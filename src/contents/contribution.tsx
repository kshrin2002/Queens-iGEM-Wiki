export function Contribution() {
  return (
    <>
        <TitleSection title={'hello'} subtitle1={''}/>
        <TitleSection />
        <TitleSection />
        <TitleSection />
    </>
  );
}

const TitleSection = (title, subtitle1, description1, subtitle2, description2, image) => <>
    <h1>{title}</h1>
    <div className='d-flex'>
        <div>
            <h3>{subtitle1}</h3>
            <span>{description1}</span>
            <h3>{subtitle2}</h3>
            <span>{description2}</span>
        </div>
        <div>
            <img src={image} />
        </div>
    </div>
</>