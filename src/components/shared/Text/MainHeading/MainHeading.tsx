import React from 'react';

const MainHeading = ({ text, bold }: { text: string; bold?: boolean }) => {
  return (
    <h1 className={`text-[46px] ${bold && 'font-[650]'} Mochiy_Pop_One py-3`}>
      {text}
    </h1>
  );
};

export default MainHeading;
