import {
  Home,
  Hardware,
  Inclusivity,
  Measurement,
  Model,
  Plant,
  Software,
  Sustainable,
} from "./contents";

// Wet Lab Folder
import {Design} from "./contents/Wet Lab/Design/design";
import {Experiments} from "./contents/Wet Lab/Experiments/experiments";
import {Engineering} from "./contents/Wet Lab/Engineering/engineering";
import {Safety} from "./contents/Wet Lab/Safety/safety";
import {Parts} from "./contents/Wet Lab/Parts/parts";


// Dry Lab Folder

// Team Folder
import {Attributions} from "./contents/Team/Attributions/attributions";
import {Team} from "./contents/Team/Team Members/team";

// Project Folder
import {Contribution} from "./contents/Project/Contributions/contribution";
import {Description} from "./contents/Project/Description/description";
import {Implementation} from "./contents/Project/Implementation/implementation";

// Human Practice Folder
import {HumanPractices} from "./contents/Human Practices/Integrated Human Practices/human-practices";
import {Education} from "./contents/Human Practices/Education/education";
import {Entrepreneurship} from "./contents/Human Practices/Entrepreneurs/entrepreneurship";



interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    component: Home,
    lead: "Welcome to iGEM 2024! Your team has been approved and you are ready to start the iGEM season!",
  },
  {
    // this is the start of the folder for team
    name: "Team",
    folder: [
      {
        name: "Team",
        title: "Team",
        path: "/team",
        component: Team,
        lead: "On this page you can introduce your team members, instructors, and advisors.",
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        component: Attributions,
        lead: "In the iGEM Competition, we celebrate student effort and achievement. The Attributions form helps the judges differentiate between what students accomplished from how their external collaborators supported them. Therefore, teams must clearly explain on the standard Project Attributions form what work they have conducted by themselves and what has been done by others.",
      },
    ],
  },

  {
  // this is the start of the folder for wet lab
  name: "Wet Lab",
    folder: [
      {
        name: "Design",
        title: "Design",
        path: "/design",
        component: Design,
        lead: "test 123",
      },
      {
        name: "Engineering",
        title: "Engineering",
        path: "/engineering",
        component: Engineering,
        lead: "test 123",
      },
      {
        name: "Experiments",
        title: "Experiments",
        path: "/experiments",
        component: Experiments,
        lead: "test 123",
      },
      {
        name: "Parts",
        title: "Parts",
        path: "/parts",
        component: Parts,
        lead: "test 123",
      },
      {
        name: "Safety",
        title: "Safety",
        path: "/safety",
        component: Safety,
        lead: "test 123",
      }
    ],
  },

  // this is the end of the folder for wet lab

  // this is the start of the folder for project
  {
    name: "Project",
    folder: [
      {
        name: "Contribution",
        title: "Contribution",
        path: "/contribution",
        component: Contribution,
        lead: "Make a useful contribution for future iGEM teams. Use this page to document that contribution.",
      },
      {
        name: "Description",
        title: "Project Description",
        path: "/description",
        component: Description,
        lead: "Describe how and why you chose your iGEM project.",
      },
      {
        name: "Implementation",
        title: "Implementation",
        path: "/implementation",
        component: Implementation,
        lead: "Testing 123",
      },
    ],
  },

  // this is the end of the folder for projects

  {
    name: "Human Practices",
    title: "Human Practices",
    path: "/human-practices",
    component: HumanPractices,
    lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
  },
  {
    // this is the start of the folder for awards
    name: "Awards",
    folder: [
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
        lead: "Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.",
      },
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: Entrepreneurship,
        lead: "The entrepreneurship prize recognizes exceptional effort to build a business case and commercialize an iGEM project.",
      },
      {
        name: "Hardware",
        title: "Hardware",
        path: "/hardware",
        component: Hardware,
        lead: "Hardware in iGEM should make synthetic biology based on standard parts easier, faster, better, or more accessible to our community.",
      },
      {
        name: "Inclusivity",
        title: "Diversity and Inclusion",
        path: "/inclusivity",
        component: Inclusivity,
        lead: "Every individual, regardless of background or experience, should have an equal opportunity to engage with scientific knowledge and technological development.",
      },
      {
        name: "Measurement",
        title: "Measurement",
        path: "/measurement",
        component: Measurement,
        lead: "Synthetic Biology needs great measurement approaches for characterizing parts, and efficient new methods for characterizing many parts at once. Describe your measurement approaches on this page.",
      },
      {
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
        lead: "Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.",
      },
      {
        name: "Plant",
        title: "Plant",
        path: "/plant",
        component: Plant,
        lead: "This award is designed to celebrate exemplary work done in plant synthetic biology.",
      },
      {
        name: "Software",
        title: "Software",
        path: "/software",
        component: Software,
        lead: "Software in iGEM should make synthetic biology based on standard parts easier, faster, better or more accessible to our community.",
      },
      {
        name: "Sustainable",
        title: "Sustainable Development Goals",
        path: "/sustainable",
        component: Sustainable,
        lead: "Describe how you have evaluated your project ideas against one or more of the SDGs.",
      },
    ],
  },
];

export default Pages;
