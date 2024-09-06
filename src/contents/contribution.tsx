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
        image={'https://static.igem.wiki/teams/5079/headshot-template-picture.png'} 
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
  <div className="card" style={{ borderColor: borderColor, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div className="text-content" style={{ flex: 1, paddingRight: '20px' }}>
      <h1 className="title">{title}</h1>
      <h3>{subtitle1}</h3>
      <p>{description1}</p>
      <h3>{subtitle2}</h3>
      <p>{description2}</p>
    </div>
    <div className="image-content" style={{ flex: 0 }}>
      <img src={image} alt="section visual" style={{ width: '250px', height: '250px', borderRadius: '50%' }} />
    </div>
  </div>
);

export default Contribution;
