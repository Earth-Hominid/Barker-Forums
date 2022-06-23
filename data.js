data = {
  id: '62b4b5e59dbc4e0dc431fa2e',
  user: 'javascript_rhino',
  email: 'javascript_rhino@gmail.com',
};

subforums = [
  {
    data: {
      addSubforum: {
        id: '62b4b86fc013292e2448a8fe',
        name: 'Nutrition',
        description:
          'A subbarker for the discussion of canine nutrition science.',
        userId: {
          username: 'javascript_rhino',
          id: '62b4b5e59dbc4e0dc431fa2e',
        },
      },
    },
  },
];

posts = [
  {
    data: {
      addPost: {
        id: '62b4ba9359592d17cbab7cf6',
        title:
          'Incidence of Canine Dilated Cardiomyopathy Diagnosed at Referral Institutes and Grain-Free Pet Food Store Sales: A Retrospective Survey',
        content:
          'https://www.frontiersin.org/articles/10.3389/fanim.2022.846227/full Dilated cardiomyopathy (DCM) is considered a predominantly inherited disease in dogs. Recent reports suggest an increased incidence of DCM in atypical breeds eating grain-free and/or legume-rich diets. Emerging communications have noted that there is an apparent increase in the DCM incidence rate in the United States (US). However, little data regarding the incidence of DCM are currently available. To address the gap in the literature, this project examines the DCM incidence rate, over time, by retrospective polling of veterinary cardiologists across the US. Further, grain-free brick-and-mortar pet food market share data from 2011 to 2019 were presented.',
        userId: {
          username: 'javascript_rhino',
          id: '62b4b5e59dbc4e0dc431fa2e',
        },
        subforumId: {
          name: 'Nutrition',
          id: '62b4b86fc013292e2448a8fe',
        },
      },
    },
  },
];

const comments = [
  {
    data: {
      addComment: {
        id: '62b4c6b4d5611b31ec2ccd3b',
        content: 'Interesting article, thanks for sharing.',
        userId: {
          username: 'codeasaurus',
          id: '62b4c68bd5611b31ec2ccd39',
        },
        subforumId: {
          name: 'Nutrition',
          id: '62b4b86fc013292e2448a8fe',
        },
        postId: {
          title:
            'Incidence of Canine Dilated Cardiomyopathy Diagnosed at Referral Institutes and Grain-Free Pet Food Store Sales: A Retrospective Survey',
          id: '62b4ba9359592d17cbab7cf6',
        },
      },
    },
  },
];

const votes = [
  {
    data: {
      addVote: {
        id: '62b4c76868b5b85e770156c3',
      },
    },
  },
];
