import {
  Home
} from "./contents";

// Wet Lab Folder
import {Design} from "./contents/Wet Lab/Design/design";
import {Experiments} from "./contents/Wet Lab/Experiments/experiments";
import {EngineeringW} from "./contents/Wet Lab/Engineering/engineeringW";
import {Safety} from "./contents/Wet Lab/Safety/safety";
import {Parts} from "./contents/Wet Lab/Parts/parts";
//import {ProofOfConcepts} from "./contents/Wet Lab/Proof of Concepts/proofofconcepts";
import {Results} from "./contents/Wet Lab/Results & Analysis/resultsandanalysis";

// Dry Lab Folder
import {Engineering} from "./contents/Dry Lab/Engineering/engineering";
import {Model} from "./contents/Dry Lab/Model/model";

// Team Folder
import {Attributions} from "./contents/Team/Attributions/attributions";
import {Team} from "./contents/Team/Team Members/team";
import {Collaborations} from "./contents/Team/Collaborations/collaborations";

// Project Folder
import {Contribution} from "./contents/Project/Contributions/contribution";
import {Description} from "./contents/Project/Description/description";
import {Implementation} from "./contents/Project/Implementation/implementation";
import {Judging} from "./contents/Project/Judging/judging";

// Human Practice Folder
import {HumanPractices} from "./contents/Human Practices/Integrated Human Practices/human-practices";
import {Education} from "./contents/Human Practices/Education/education";
import {Entrepreneurship} from "./contents/Human Practices/Entrepreneurs/entrepreneurship";
import {PatientStories} from "./contents/Human Practices/Patient Stories/patient-stories";
import {Sustainable} from "./contents/sustainable"

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
        {
          name: "Judging",
          title: "Judging",
          path: "/judging",
          component: Judging,
          lead: "Testing 123",
        },
      ],
    },
  
    // this is the end of the folder for projects

  // this is the start of the folder for wet lab
  {
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
          name: "Experiments",
          title: "Experiments",
          path: "/experiments",
          component: Experiments,
          lead: "test 123",
        },
        {
          name: "Engineering",
          title: "Engineering",
          path: "/engineeringW",
          component: EngineeringW,
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
        },
        {
          name: "Results and Analysis",
          title: "Results",
          path: "/resultsandanalysis",
          component: Results,
          lead: "test 123",
        }
        //add proof of concept here
      ],
    },
  // this is the end of the folder for wet lab

      // this is the start of the folder for dry lab
  {
    name: "Dry Lab",
    folder: [
      {
        name: "Engineering",
        title: "Engineering",
        path: "/engineering",
        component: Engineering,
        lead: "test 123",
      },
      {
        name: "Model",
        title: "Model",
        path: "/model",
        component: Model,
        lead: "test 123",
      },
    ],
  },
  // this is the end of the folder for dry lab
  // this is start of the folder for human practices
  {
    name: "Human Practices",
    folder: [
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
        lead: "test 123",
      },
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: Entrepreneurship,
        lead: "test 123",
      },
      {
        name: "Integrated Human Practices",
        title: "Integrated Human Practices",
        path: "/human-practices",
        component: HumanPractices,
        lead: "Testing 123",
      },
      {
        name: "Patient Stories",
        title: "Patient Stories",
        path: "/patient-stories",
        component: PatientStories,
        lead: "Testing 123",
      },
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
      {
        name: "Sustainable",
        title: "Sustainable Development Goals",
        path: "/sustainable",
        component: Sustainable,
        lead: "Describe how you have evaluated your project ideas against one or more of the SDGs.",
      }
    ],
  },
  // this is the end of the folder for human practices
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
      {
        name: "Collaborations",
        title: "Collaborations",
        path: "/collaborations",
        component: Collaborations,
        lead: "test 123",
      },
    ],
  },










  // {
  //   // this is the start of the folder for awards
  //   name: "Awards",
  //   folder: [

  //     },
  //   ],
  // },
];

export default Pages;
