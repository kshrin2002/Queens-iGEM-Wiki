import React, { useEffect, useState } from 'react';
import './patient-stories.css'
import { Button } from 'react-bootstrap';
export function PatientStories() {
  return (
    <>
      <PatientStoriesHeading />
      <VideoSection />
      <PatientInfoSection />
      <Conclusion />
      <BackToTopButton />
    </>
  );
}


const VideoSection = () => {
  return (
    <div className="patient-story-section1" style={{marginBottom:'10rem'}}>
      <h1 style={{marginBottom: '4rem', marginLeft:'4rem'}}>BRIEF DESCRIPTION + QUESTIONS WE ASKED</h1>
    <div className="video-container" style={{display:'flex', justifyContent:'center'}}>
    <iframe title="Queens-Canada: Shortened Patient Comp (2024) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/e648f41e-bff7-4818-9622-592f11842f32"  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
    </div>
    <div className='intro-paragraph'>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '2rem'}}>
          Intro
        </h1>
        <p>
        We sought to speak with patients to ensure that our therapeutic design is not only scientifically sound but also deeply aligned with the lived experiences of those it aims to help. While lab-based research and theoretical frameworks provide crucial insights into disease mechanisms and potential treatments, it is the patients who offer the most personal and practical perspective on how a therapeutic could impact their daily lives. Speaking with patients gave us a better understanding of their struggles, priorities, and concerns—things that may not always be obvious from clinical or scientific data alone. 
       
      
       <p>For example, we wanted to learn directly from patients how they feel about current treatments, what gaps exist in their care, and how they perceive new, experimental solutions like the therapeutic we are developing. By listening to their experiences, we hoped to uncover key factors such as ease of use, accessibility, and potential side effects, which might not have been fully considered during the early stages of our design. This patient feedback would help ensure that our solution is not only effective at a biological level but also practical and relevant to their everyday realities. </p>
       
        
       
       <p>By telling these stories we hope to not only learn from the patients but advocate for them by telling their stories. Each one is a unique and truly inspiring individual. We have a lot to learn from each of them. </p>
       
        
       
       <ul>
         <li>We asked each person the following questions:</li>
         
         <li>How does Parkinson’s disease affect your daily routine?</li>
         
         <li>What is the most difficult part about living with Parkinson’s Disease</li>
         
         <li>What was the diagnosis process like for you?</li>
         
         <li>Are you currently on any treatments?</li>
         
         <li>How has Parkinson's Disease changed your life?</li>
         
         <li>What symptoms do you experience most frequently, and how do they affect you?</li>
         
         <li>How has Parkinson's influenced your relationships with friends, family, and caregivers?</li>
         
         <li>Are there any activities or hobbies you've had to adapt due to Parkinson's disease?</li>
         
         <li>What support systems have you found most helpful in managing Parkinson's?</li>
         
         <li>Can you describe any misconceptions or stereotypes about Parkinson's disease that you've encountered?</li>
         
         <li>How do you prioritize your physical and mental well-being while living with Parkinson's?</li>
         
         <li>Are there any resources or communities that have been particularly valuable to you in your journey with Parkinson's?</li>
         
         <li>What advice would you give to someone newly diagnosed with Parkinson's disease?</li>
         
         <li>Have you participated in any clinical trials or experimental treatments for Parkinson's disease? If so, what was your experience like?</li>
         
         <li>Have you experienced any stigma or discrimination because of your Parkinson's diagnosis?</li>
         
         <li>Have you encountered any barriers in accessing healthcare services or support for Parkinson's disease?</li>
         
         <li>What are your current hobbies?</li>
         
         <li>What is something on your bucket list?</li>
         
         <li>What is something positive that you are looking forward to?</li>
         
         <li>What is a current goal of yours that you are striving for?</li>
       </ul>
       
        
       
       <p>The art on this page has been illustrated by Barbara Salsberg Mathews. This is a sneak peek into a larger project she is working on with Parkinson’s Europe called “What Parkinson’s Feels Like: A collection of illustrations by Barbara Salsberg Mathews”. Barbara is creating an illustration to quotes submitted people with Parkinson’s disease. It was our pleasure to be able to combine our patient network with this exciting project. Thank you Barbara and Parkinson’s Europe for allowing us to display this beautiful artwork! </p>
        </p>
    </div>
    </div>
  )
}
<iframe title="Queens-Canada: Shortened Patient Comp (2024) [English]" width="560" height="315" src="https://video.igem.org/videos/embed/e648f41e-bff7-4818-9622-592f11842f32"  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>

const PatientStoriesHeading: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '138px' }}>
      <h1 style={{ fontSize: '5em', color: '#590000', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '10rem'}}>
        PATIENT STORIES
      </h1>
    </div>
  );
};

const PatientInfoSection: React.FC = () => {
  return (
    <div className="stories-wrapper">
      <h1 style={{marginBottom: '4rem', marginLeft:'1rem'}}>DESCRIPTION OF ART + THANKS</h1>
      <h1 className="story-title">Barbara Salsberg Mathews</h1>
      <div className="story-1">
        <p className="story">
        Barbara was a high school visual arts teacher for the TDBS. She is an illustrator and an author and now she has Parkinson’s disease. She faced her diagnosis in January 2020.  

        <p>Parkinson’s affects her daily routine by tiring her out and creates brain fog- she often forgets what she’s talking about. Parkinson's also gives her confusion and anxiety, and her reaction time is overall slower. Barbara thinks the most difficult part about living with Parkinson’s is knowing that it’s progressive and it has no cure. You really must plan ahead with your life. “I want to make Parkinson’s my b*tch!” says Barbara. Parkinson’s disease reminds Barbara, how precious life is.  </p>

        <p>Barbara had a rocky diagnosis process with some doctors, they didn’t tailor her care very well and gave her medications that were not working for her. They really neglected some of her feelings and emotions. Parkinson’s disease made Barbara rewrite her future. She was planning on going full speed selling her art, she had to change these plans after her diagnosis, it really altered the course of her life. Parkinson’s has taught her have more patience. Parkinson’s taught Barbara to speak her mind. She doesn’t really worry about what others think and it’s made her closer to her family and friends.  </p>

        <p>Overall, she’s also become more patient and much slower and more compassionate about the things she does. She says I love you a lot more to the people she loves. Barbara engages with local support groups and loves meeting others with Parkinson’s online.  </p>

        <p>Some advice that Barbara would give to someone newly diagnosed with Parkinson’s is take a breath and step back and know that everything is going to be okay. To get informed early and find good information and don’t worry about the end stage right now. Talk to somebody wise and really keep a journal of your medication. Movement and exercise matter. Every victory counts. In terms of access to healthcare, Barbara thinks there’s not enough support out there and that some people do not always get the help they need.  </p>

        <p>Something on Barbara’s bucket list is to see the aurora borealis northern lights. </p>
        </p>
        <div className="quote-container">
        <img src="https://static.igem.wiki/teams/5079/writeups/patient-stories/barbara-barbara-art.jpeg" alt="" />
        <p className="quote">“Parkinson’s is like a grey mist, floating towards me from behind to take me down. Sneaking up in an insidious way, trying to put me to sleep, rolling me up in a tight ball, kicking me under the couch so I roll off to the corner with the dust bunnies.” </p>
        </div>
      </div>
      <h1 className="story-title">Larry Gifford</h1>
      <div className="story-2">
        <p className="story">
        <p>Larry was diagnosed with Parkinson’s disease in 2017. He founded a podcast called ‘When life gives you Parkinson’s” in 2018. He’s also the co-founder of PD avengers which was established in October of 2023.  </p>

 

        <p>Larry had DBS treatment (deep brain stimulation). Parkinson’s disease affected Larry’s day-to-day life as he used to work 7 AM to 7 PM as a radio professional program director. Since being diagnosed with Parkinson’s disease, Larry is no longer able to do this job. He has to nap every day, and he faces a lot of fatigue. The most difficult part about Parkinson’s disease for him is never knowing what you’re going to wake up.  </p>

 

        <p>Larry‘s diagnosis process was fairly easy, although he initially delayed the process due to making excuses for some of his symptoms and not believing that he had the disease. Parkinson’s disease put into perspective Larry’s life. He focusses on what he can still do right now. Parkinson’s disease opened up a world of people that he had never met before. Larry‘s main symptom right now is trouble sleeping which causes extreme fatigue for him.  </p>

 

        <p>One big misconception Larry finds with Parkinson’s disease is that people believe that young people cannot have the disease. He prioritizes his physical and mental well-being by trying to get out and exercising three times a week.  </p>

 

        <p>Some advice he would give to someone newly diagnosed with Parkinson’s disease is that in "it’s not the end of the world”. There are some very difficult days, but you need to listen to your body and accept that Parkinson’s is going part of your life. Do not let it define you on.  </p>

 

        <p>Something on Larry’s bucket list is to travel to Paris, France. </p>
        </p>
        <div className="quote-container">
        <img src="https://static.igem.wiki/teams/5079/writeups/patient-stories/larry-barbara-art.jpg" alt="" />
        <p className="quote">“Parkinson’s masks my face, so even when I’m happy on the inside, it doesn’t shine through.”  </p>
        </div>
      </div>

      <h1 className="story-title">Benjamin Stecher</h1>
      <div className="story-2">
        <p className="story">
        <p>Ben is the founder of Tomorrow Edition, co-founder of the Parkinson’s research advocacy group and patient advisor to the world’s Parkinson’s Congress. Ben is an author, and he also participates in patient-driven research advocacy.  </p>

 

<p>For Ben, Parkinson’s disease does not affect his daily routine and life as much these days. Ben had a DBS treatment (deep brain stimulation). He has a tremor from time to time. Ben has had Parkinson’s for 11 years. The most difficult part about living with Parkinson’s disease for Ben is that it does not feel like one disease, it feels like multiple different diseases all in one. Parkinson’s disease altered the course of his life. Ben was living and working in China and had to give up his career because of his diagnosis and he moved out of China.  </p>

 

<p>Ben became an advocate for others and himself. He travelled a lot and really became passionate about traveling. Ben has made many friends along the way through his life with Parkinson’s and he likes to learn from other patients.  </p>

 

<p>To prioritize physical and mental well-being he meditates, does yoga and ensures that his mind is in the right place. Some advice that Ben would give to someone newly diagnosed with Parkinson’s disease is “don’t let anyone else define the sickness for you, live your life.”  </p>

 

<p>Something on Ben’s bucket list is to visit South America.  </p>
        </p>
        <div className="quote-container">
        <img src="https://static.igem.wiki/teams/5079/writeups/patient-stories/ben-barbara-art.jpg" alt="" />
        <p className="quote">"Parkinson's feels like a never-ending roller coaster ride of emotions, with ups and downs, never knowing what's around the next bend."  </p>
        </div>
      </div>
    </div>
  );
};

const Conclusion: React.FC = () => {
  return(
    <div className='conclusion-ps'>
      <h1 className="story-title">What we Learned</h1>
      <p className='story'>
      Parkinson’s disease is a very heterogeneous disease. It presents itself differently in each patient while also manifesting itself at different stages in people’s lives, affecting not just the patients but their families and communities as well. Through these stories we learned how Parkinson's disease affects people differently. Each of these patients' stories highlights their struggles, priorities, and concerns. Learning from them we will be able to better adapt our project to have a patient-centric approach. We can design research and therapeutics that truly reflect the needs and desires of those actually affected by the disease.  

 
      
      <p><br />Aside from the endless data researchers can get from patients, we hope to inspire others to listen to Parkinson’s patients and hear their voice. There is humanity behind each and every diagnosis. They are people too- people with husbands, wives and children. They are human beings with beautiful stories to tell. These patients' stories are filled with resilience, strength, hope, and wisdom that can inspire both researchers and other patients. SynAxis aims to foster an environment of empathy and compassion in Parkinson's research. We want to ensure that the perspectives of patients are not only heard but celebrated. Never forget that behind every diagnosis is a real human being with a story to tell.  </p>

      </p>
    </div>
  )
}

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 300) {
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
      className={`button ${isVisible ? 'visible' : ''}`}
      variant="custom"
      onClick={scrollToTop}
    >
      ↑
    </Button>
  );
};


