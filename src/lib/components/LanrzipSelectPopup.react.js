import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const LanrzipSelectPopup = (props) => {

  let {id, children, setProps} = props;

  const [selectedText, setSelectedText] = useState('');
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const checkForWhitespace = (text) => {
    // 使用正则表达式检查空白字符
    const onlyWhitespace = /^\s*$/.test(text);
    if (onlyWhitespace) {
      return true;
    }
    return
  };

  useEffect(() => {
    const handleMouseUp = (event) => {
      const selection = window.getSelection();
      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const selectedText = window.getSelection().toString();
        setSelectedText(selectedText);
        console.log(selectedText)
        if (!selectedText || checkForWhitespace(selectedText)) {
          setIsButtonVisible(false);
          return;
        }
        setIsButtonVisible(true);

        setButtonPosition({
          top: rect.top + window.scrollY + rect.height,
          left: rect.left + window.scrollX
        });
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="text-selector">
      {isButtonVisible && (
        <div
          style={{
            position: 'absolute',
            top: buttonPosition.top,
            left: buttonPosition.left
          }}
          onClick={() => {
            alert(`Selected text: ${selectedText}`);
            setIsButtonVisible(false);
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

LanrzipSelectPopup.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: PropTypes.string,

  /**
   * The children of this component
   */
  children: PropTypes.node,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: PropTypes.func
};



export default LanrzipSelectPopup;