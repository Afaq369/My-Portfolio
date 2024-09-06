import React from 'react';

const Heading = ({ text, bold }: { text: string; bold?: boolean }) => {
  return (
    <h2 className={`text-[26px] ${bold && 'font-[650]'} Mochiy_Pop_One py-3`}>
      {text}
    </h2>
  );
};

export default Heading;
