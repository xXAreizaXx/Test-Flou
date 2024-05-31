// ReactJS
import React from 'react';

// Lexical
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

// Plugin
import { APPLY_REDLINE_STYLE_COMMAND } from '@plugins/RedLinePlugin';

const RedLineButton: React.FC = () => {
  // Lexical
  const [editor] = useLexicalComposerContext();

  // Functions
  const applyRedLineStyle = () => {
    editor.dispatchCommand(APPLY_REDLINE_STYLE_COMMAND, undefined);
  };

  return (
    <button
        onClick={applyRedLineStyle}
        className='toolbar-item spaced'
        aria-label='Red Line'
      >
        <svg
          className='feather feather-slash'
          fill='none'
          height='20'
          stroke='red'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 30 30'
          width='20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='15' cy='15' r='10' />
          <line x1='5' y1='5' x2='26' y2='26' />
        </svg>
    </button>
  );
};

export default RedLineButton;

