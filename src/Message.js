import React from 'react';
import './Message.css';

const Message = ({ children }) => (
  <div id="messagey" className="Message">
    {children}
  </div>
);

export default Message;
