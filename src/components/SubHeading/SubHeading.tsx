import React from 'react';
// import '../../app';

const SubHeading = ({
  text,
  bold,
  special,
}: {
  text: string;
  bold?: boolean;
  special?: boolean;
}) => {
  return (
    <h3
      className={`text-[20px] ${bold && 'font-[650]'} ${
        special && 'Mochiy_Pop_One'
      }`}
    >
      {text}
    </h3>
  );
};

export default SubHeading;
