import FaceIcon from "@material-ui/icons/Face";
import BrushIcon from "@material-ui/icons/Brush";
import CodeIcon from "@material-ui/icons/Code";
import React from "react";

import ElasticImage from './images/image-elastic.jpg';
import ElasticLogo from './images/logos/elastig-logo-square.png';

import BankifyLogo from './images/logos/bankify_logo_Big_navy.png';

import DrinksterLogo from './images/logos/drinkster_logo_square.png';
import DrinksterImage from './images/drinkster.jpg';

import BertschiLogo from './images/logos/bertschi-squarelogo.png';

import GroupPayments from './images/group-payments.png';



export const heroContent = {
  title: "Hello, I'm Joona Saaresto",
  description:
    "I am a UX Designer & Frontend developer from Vantaa, Finland. I have experience with working on projects in Fintech and Logistics.",
  linkText: 'Contact',
};

export const aboutContent = {
  title: 'Specializing in...',
  items: [
    {
      id: 0,
      icon: <FaceIcon color="primary" fontSize="large"/>,
      name: 'UX Design',
      projects: 14,
      route: '/work'
    },
    {
      id: 1,
      icon: <BrushIcon color="primary" fontSize="large"/>,
      name: 'Branding design',
      projects: 3,
      route: '/work'
    },
    {
      id: 2,
      icon: <CodeIcon color="primary" fontSize="large"/>,
      name: 'Frontend development',
      projects: 2,
      route: '/work'
    }]
};

export const historyContent = {
  title: 'Work history',
  items: [
    {
      id: 0,
      name: 'Bertschi AG',
      jobTitle: 'UX Designer & Frontend developer',
      description: 'This work taught me how software development works',
      startDate: '8/2019',
      endDate: 'Ongoing',
      tags: ['UX Design', 'React.js'],
      avatar: BertschiLogo,
    },
    {
      id: 1,
      name: 'Bankify Ltd',
      jobTitle: 'UX Designer',
      description: 'This work taught me how UX Design works',
      startDate: '5/2018',
      endDate: 'Ongoing',
      tags: ['UX Design', 'Branding design'],
      avatar: BankifyLogo,
    }
  ]
};

export const contactContent = {
  title: "Let's do something great together!",
  description: "Don't hesitate to contact",
  email: "joona.saaresto@gmail.com"
};

export const footerContent = {
  description: "If you reached this far, email me and I'll buy you a beer 🍺",
};

// CONTENT FOR WORKS:

export const workContent = {
  title: "Projects:",
  items: [
    {
      id: 'Group saving',
      projectName: "Group saving & spending",
      description:

        "Saving in a group is been done for ages, yet to this day there haven't been many digital solutions " +
        "for it. With this solution, you can save together with your family, friends and even strangers. " +
        "After the saving is done, the group admin can use a virtual credit card to make the purchases that are needed for the project.",

      responsibilities: "My responsibilities in this project included: Initiating the project, initial user testing, sketching out the prototype and testing the prototype in usability testing sessions."+
        " After the initial UX efforts, I was part of handing out the concept to the front-end and back-end developer teams to roll out the product out as a API microservice" +
        "In addition to the UX work, I was also part of marketing the product, where I produced and edited the following video.",
      startDate: '9/2018',
      tags: ['UX Design, ', 'Usability testing'],
      avatar: BankifyLogo,
      image: GroupPayments,
      website: 'https://bankify.io/group-spending-video',
      linkText: 'Check video demo'
    },
    {
      id: 'Receipt and invoice scanning in seconds',
      projectName: "Elastic API - Scan your expenses in seconds",
      description:
        "No more manual typing of expenses. Elastic Smart Scanner will detect and extract needed information" +
        "from receipts and invoices for you within seconds. Developers can leverage the Elastic API within financial applications",
      responsibilities: "Resposibilities within this project was to create the Elastic branding elements (Logo, Color palette) as well as "+
        "creating the website with Wordpress. Current activities with Elastic project is to maintain the advertisement material for the social medias" +
        "and keep on creating great content for marketing.",

      startDate: '7/2019',
      tags: ['Branding design, ', 'Web-design'],
      avatar: ElasticLogo,
      image: ElasticImage,
      website: 'https://bankify.io/elastic',
      linkText: 'Read more...'
    },
    {
      id: 'Drinkster',
      projectName: "Drinkster - Find your dream cocktail",
      description:

        "You got lot of ingredients in your shelf and don't know what to make out of them? " +
        "With Drinkster you can swipe through numerous amounts of different cocktails that you can make. Pressing the like button will show you the recipe and ingredients. " +
        "I made this app to consume data from https://www.thecocktaildb.com/api.php API and made a Tinder like responsive front-end from Material UI to build it",

      startDate: '3/2020',
      tags: ['React.js, ', 'API Integration, ', 'Material UI'],
      avatar: DrinksterLogo,
      image: DrinksterImage,
      website: 'http://drinkster.herokuapp.com/',
      linkText: 'Try Drinkster!'
    }
  ]
};