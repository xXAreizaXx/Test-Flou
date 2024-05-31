// ReactJS
import { useState } from 'react';

// Interface
interface ModalProps {
  onApprove: (suggestedText: string) => void;
  onCancel: () => void;
  position: { top: number, left: number };
  text: string;
}

export default function Modal({ onApprove, onCancel, position, text }: ModalProps) {
  // State
  const [suggestedText, setSuggestedText] = useState(text);

  // Functions
  const handleApprove = () => {
    onApprove(suggestedText);
  };

  return (
    <div className="modal" style={{ top: position.top, left: position.left }}>
      <p>Replace &quot;{text}&quot; with:</p>
      <input
        onChange={(e) => setSuggestedText(e.target.value)}
        type="text"
        value={suggestedText}
      />
      <div className="modal-buttons">
        <button onClick={handleApprove}>Approve</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

