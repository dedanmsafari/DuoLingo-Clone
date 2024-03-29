export default [
  {
    id: "m1",
    type: "COMPLETE_MULTIPLE_PARTS",
    parts: [
      {
        isBlank: true,
        text: "I",
      },
      {
        text: "work",
      },
      {
        text: "as",
      },
      {
        text: "a",
      },
      {
        isBlank: true,
        text: "dev",
      },
    ],
    options: ["I", "them", "yours", "dev"],
  },

  {
    id: "a",
    type: "COMPLETE_SENTENCE",
    text: ["una", "nina,", "una"],
    answer: "mujer",
    options: ["yo", "el", "mujer", "la"],
  },
  {
    id: "b",
    type: "COMPLETE_SENTENCE",
    text: ["I", "work", "as", "a"],
    answer: "dev",
    options: ["teacher", "pilot", "plumber", "dev"],
  },
  {
    id: "c",
    type: "COMPLETE_SENTENCE",
    text: ["Which", "is", "an", "art"],
    answer: "drawing",
    options: ["engineering", "drawing", "sports", "nursing"],
  },

  {
    id: "q1",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the glass"?',
    options: [
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
        correct: true,
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
    ],
  },
  {
    id: "q2",
    type: "OPEN_ENDED",
    text: "Yo soy un hombre",
    answer: "I am a man",
  },
  {
    id: "q3",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the coffee"?',
    options: [
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
    ],
  },
  {
    id: "q4",
    type: "IMAGE_MULTIPLE_CHOICE",
    type: "OPEN_ENDED",
    text: "La mujer",
    answer: "the woman",
  },
  {
    id: "q3",
    question: 'Which of these is "the cup"?',
    type: "IMAGE_MULTIPLE_CHOICE",
    options: [
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
      },
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
        correct: true,
      },
    ],
  },
  {
    id: "q5",
    type: "OPEN_ENDED",
    text: "Me gusta React Native",
    answer: "I like react native",
  },
  {
    id: "q6",
    type: "IMAGE_MULTIPLE_CHOICE",
    question: 'Which of these is "the milk"?',
    options: [
      {
        id: "option2",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
        text: "el vaso",
      },
      {
        id: "option3",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png",
        text: "la leche",
        correct: true,
      },
      {
        id: "option1",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
        text: "la taza",
      },
      {
        id: "option4",
        image:
          "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png",
        text: "el café",
      },
    ],
  },
  // {
  //   id: "q7",
  //   type: "FILL_IN_THE_BLANK",
  //   parts: [
  //     {
  //       text: "la",
  //       isBlank: true,
  //     },
  //     {
  //       text: "nino",
  //       isBlank: true,
  //     },
  //     {
  //       text: "el",
  //       isBlank: true,
  //     },
  //     {
  //       text: "nina",
  //       isBlank: true,
  //     },
  //   ],
  //   options: ["la", "el", "nina", "nino", "ella"],
  // },
];
