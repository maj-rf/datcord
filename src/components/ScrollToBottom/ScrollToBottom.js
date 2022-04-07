import React, { useRef, useEffect } from 'react';

export const ScrollToBottom = ({ channelMsgs }) => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView(), [channelMsgs]);
  return <div ref={elementRef} />;
};
