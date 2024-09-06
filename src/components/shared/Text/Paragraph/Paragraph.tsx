import React from 'react';

const Paragraph = ({ text, bold }: { text: string; bold?: boolean }) => {
  return (
    <p className={`text-[14px] ${bold && 'font-[650]'} Mochiy_Pop_One`}>
      {text}
    </p>
  );
};

export default Paragraph;
