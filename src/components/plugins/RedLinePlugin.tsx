// ReactJS
import { useEffect, useState } from 'react';

// Lexical
import { $getSelection, $isRangeSelection, createCommand, $getNodeByKey, TextNode } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

// Components
import Modal from '@components/Modal';

// Plugin
import { $createRedLineNode } from '@plugins/RedLineNode';

// Command
export const APPLY_REDLINE_STYLE_COMMAND = createCommand<void>();

export default function RedLinePlugin() {
  // Lexical
  const [editor] = useLexicalComposerContext();

  // State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);
  const [selectedText, setSelectedText] = useState('');

  // Effects
  useEffect(() => {
    return editor.registerCommand(
      APPLY_REDLINE_STYLE_COMMAND,
      () => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          const text = selection.getTextContent();

          setSelectedText(text);

          editor.update(() => {
            const redLineNode = $createRedLineNode(text);

            selection.insertNodes([redLineNode]);
            setSelectedNodeKey(redLineNode.getKey());

            const domSelection = window.getSelection();

            if (domSelection && domSelection.rangeCount > 0) {
              const range = domSelection.getRangeAt(0);
              const rect = range.getBoundingClientRect();

              setModalPosition({
                top: rect.bottom + window.scrollY + 5,
                left: rect.left + window.scrollX,
              });
            }
          });

          setIsModalOpen(true);
        }

        return true;
      },
      0
    );
  }, [editor]);

  // Functions
  const handleApprove = (suggestedText: string) => {
    setIsModalOpen(false);

    if (selectedNodeKey) {
      editor.update(() => {
        const textNode = $getNodeByKey(selectedNodeKey);

        if (textNode && textNode instanceof TextNode) {
          const newTextNode = new TextNode(suggestedText);

          textNode.replace(newTextNode);
        }
      });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);

    if (selectedNodeKey) {
      editor.update(() => {
        const textNode = $getNodeByKey(selectedNodeKey);

        if (textNode && textNode instanceof TextNode) {
          const originalTextNode = new TextNode(selectedText);

          textNode.replace(originalTextNode);
        }
      });
    }
  };

  return isModalOpen &&
    <Modal
      onApprove={handleApprove}
      onCancel={handleCancel}
      position={modalPosition}
      text={selectedText}
    />
};






