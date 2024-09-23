import React, { useEffect, useState } from "react";
import './experiments.css';
import Button from "react-bootstrap/esm/Button";


interface MonthlyUpdates {
  month: string;
  weeks: { dateRange: string; content: string }[];
}

const monthsData: MonthlyUpdates[] = [
  {
    month: "January",
    weeks: [
      { dateRange: "JAN 1 - JAN 7", content: "Lorem ipsum dolor sit amet..." },
      { dateRange: "JAN 8 - JAN 14", content: "Lorem ipsum dolor sit amet..." },
      { dateRange: "JAN 15 - JAN 21", content: "Lorem ipsum dolor sit amet..." },
      { dateRange: "JAN 22 - JAN 28", content: "Lorem ipsum dolor sit amet..." },
    ],
  },
  {
    month: "February",
    weeks: [
      { dateRange: "FEB 4 - 10", content: "Lorem ipsum dolor sit amet..." },
      { dateRange: "FEB 11 - 17", content: "Lorem ipsum dolor sit amet..." },
      { dateRange: "FEB 18 - 24", content: "Lorem ipsum dolor sit amet..." },
      { dateRange: "FEB 25 - MAR 2", content: "Lorem ipsum dolor sit amet..." },
    ],
  },
  { month: "March", weeks: [
    { dateRange: "FEB 4 - 10", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 11 - 17", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 18 - 24", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 25 - MAR 2", content: "Lorem ipsum dolor sit amet..." },
  ] },
  { month: "April", weeks: [
    { dateRange: "FEB 4 - 10", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 11 - 17", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 18 - 24", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 25 - MAR 2", content: "Lorem ipsum dolor sit amet..." },
  ] },
  { month: "May", weeks: [
    { dateRange: "FEB 4 - 10", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 11 - 17", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 18 - 24", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 25 - MAR 2", content: "Lorem ipsum dolor sit amet..." },
  ] },
  { month: "June", weeks: [
    { dateRange: "FEB 4 - 10", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 11 - 17", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 18 - 24", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 25 - MAR 2", content: "Lorem ipsum dolor sit amet..." },
  ] },
  { month: "July", weeks: [
    { dateRange: "FEB 4 - 10", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 11 - 17", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 18 - 24", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 25 - MAR 2", content: "Lorem ipsum dolor sit amet..." },
  ] },
  { month: "August", weeks: [
    { dateRange: "FEB 4 - 10", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 11 - 17", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 18 - 24", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 25 - MAR 2", content: "Lorem ipsum dolor sit amet..." },
  ] },
  { month: "September", weeks: [
    { dateRange: "FEB 4 - 10", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 11 - 17", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 18 - 24", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 25 - MAR 2", content: "Lorem ipsum dolor sit amet..." },
  ] },
  { month: "October", weeks: [
    { dateRange: "FEB 4 - 10", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 11 - 17", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 18 - 24", content: "Lorem ipsum dolor sit amet..." },
    { dateRange: "FEB 25 - MAR 2", content: "Lorem ipsum dolor sit amet..." },
  ] },
];

export function Experiments() {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const handleMonthClick = (month: string) => {
    setSelectedMonth(selectedMonth === month ? null : month);
  };

  return (
    <div className="experiments-container">
      <DesignHeading />
      <OverviewSection />
      <div className="content">
        <MonthList monthsData={monthsData} onMonthClick={handleMonthClick} />
        <div className="month-list">
          {monthsData.map((monthData) => (
            <div
              key={monthData.month}
              className={`month-item ${selectedMonth === monthData.month ? 'active' : ''}`}
            >
              <div
                className={`month-label ${selectedMonth === monthData.month ? 'active' : ''}`}
                onClick={() => handleMonthClick(monthData.month)}
              >
                {monthData.month.toUpperCase()}
              </div>
              <MonthDetails month={selectedMonth} monthsData={monthsData} />
            </div>
          ))}
        </div>
      </div>
      <CompleteTimeline />
      <BackToTopButton />
    </div>
    
  );
}

const OverviewSection = () => {
  return (
    <section className="overview-section">
      <h2>WEEK-BY-WEEK TIMELINE</h2>
    </section>
  );
};

const DesignHeading: React.FC = () => {
  return (
    <div 
        style={{
          color: '#590000',
          fontWeight: 'bold',
          letterSpacing: '2px',
          textAlign: 'center',
          marginTop: '100px'
        }}
    >
      <h1 style={{fontSize: '80px',}}>
        EXPERIMENTS</h1>
    </div>
  );
};

interface MonthListProps {
  monthsData: MonthlyUpdates[];
  onMonthClick: (month: string) => void;
}

const MonthList: React.FC<MonthListProps> = ({ monthsData, onMonthClick }) => {
  return (
    <div className="left-bar">
    <div className="simple-month-list">
      {monthsData.map((monthData) => (
        <div
          key={monthData.month}
          className="simple-month-label"
          onClick={() => onMonthClick(monthData.month)}
        >
          {monthData.month.toUpperCase()}
        </div>
      ))}
    </div>
    </div>
  );
};

interface MonthDetailsProps {
  month: string | null;
  monthsData: MonthlyUpdates[];
}

const MonthDetails: React.FC<MonthDetailsProps> = ({ month, monthsData }) => {
  const selectedMonthData = monthsData.find((m) => m.month === month);
  return (
    <div className="month-details">
      {selectedMonthData ? (
        <div className="month-details-card">
          {selectedMonthData.weeks.map((week, index) => (
            <div key={index} className="week-detail">
              <h3>{week.dateRange}</h3>
              <p>{week.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-updates">No updates available.</div>
      )}
    </div>
  );
};

// Back to Top Button Component
const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 300) { // Change this value as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Button
      className={`button ${isVisible ? 'visible' : ''}`} // Add the visible class
      variant="primary"
      onClick={scrollToTop}
    >
      ↑ Back to Top
    </Button>
  );
};

const CompleteTimeline: React.FC = () => {
  return (
    <div 
        style={{
          color: '#590000',
          fontWeight: 'bold',
          letterSpacing: '2px',
          textAlign: 'center',
          marginTop: '100px'
        }}
    >
      <h1 style={{fontSize: '80px',}}>
        COMPLETE TIMELINE</h1>

        <iframe src="" frameBorder="0"></iframe>
    </div>
  );
};



export default Experiments;
