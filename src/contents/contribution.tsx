import React from 'react';

export function Contribution() {
  return (
    <>
      <TitleSection 
        title={'SUBTITLE 1'} 
        subtitle1={'Section 1'} 
        description1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'} 
        subtitle2={'Section 2'} 
        description2={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'} 
        image={'/path-to-image'} 
        borderColor={'blue'}
      />
    </>
  );
}
interface TitleSectionProps {
  title: string;
  subtitle1: string;
  description1: string;
  subtitle2: string;
  description2: string;
  image: string;
  borderColor: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({title, subtitle1, description1, subtitle2, description2, image, borderColor }) => (
  <div className="card" style={{ borderColor: borderColor }}>
    <h1 className="title">{title}</h1>
    <div className="content">
      <div className="text-content">
        <h3>{subtitle1}</h3>
        <p>{description1}</p>
        <h3>{subtitle2}</h3>
        <p>{description2}</p>
      </div>
      <div className="image-content">
        <img src="https://static.igem.wiki/teams/5079/headshot-template-picture.png" alt="section visual" />
      </div>
    </div>
  </div>
);

export default Contribution;