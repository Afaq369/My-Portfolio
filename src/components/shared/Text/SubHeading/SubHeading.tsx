import React from 'react';

const SubHeading = ({ text, bold }: { text: string; bold?: boolean }) => {
  return (
    <h3 className={`text-[18px] ${bold && 'font-[650]'} Mochiy_Pop_One`}>
      {text}
    </h3>
  );
};

export default SubHeading;
