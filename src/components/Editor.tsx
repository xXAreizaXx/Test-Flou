'use client';

// Lexical
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { ListItemNode, ListNode } from '@lexical/list';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { TRANSFORMERS } from '@lexical/markdown';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

// Plugins
import { RedLineNode } from '@plugins/RedLineNode';
import AutoLinkPlugin from '@plugins/AutoLinkPlugin';
import CodeHighlightPlugin from '@plugins/CodeHighlightPlugin';
import ListMaxIndentLevelPlugin from '@plugins/ListMaxIndentLevelPlugin';
import RedLinePlugin from '@plugins/RedLinePlugin';
import ToolbarPlugin from '@plugins/ToolbarPlugin';
import TreeViewPlugin from '@plugins/TreeViewPlugin';

// Themes
import ExampleTheme from '@themes/ExampleTheme';

function Placeholder() {
  return <div className='editor-placeholder'>Enter some rich text...</div>;
}

const editorConfig = {
  namespace: 'example',
  theme: ExampleTheme,
  onError(error: any) {
    throw error;
  },
  nodes: [
    AutoLinkNode,
    CodeHighlightNode,
    CodeNode,
    HeadingNode,
    LinkNode,
    ListItemNode,
    ListNode,
    QuoteNode,
    RedLineNode,
    TableCellNode,
    TableNode,
    TableRowNode,
  ],
};

const Editor = () => {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className='editor-container'>
        <ToolbarPlugin />
        <div className='editor-inner'>
          <RichTextPlugin
            ErrorBoundary={LexicalErrorBoundary}
            contentEditable={<ContentEditable className='editor-input' />}
            placeholder={<Placeholder />}
          />
          <HistoryPlugin />
          <TreeViewPlugin />
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          <RedLinePlugin />
        </div>
      </div>
    </LexicalComposer>
  );
};

export default Editor;
