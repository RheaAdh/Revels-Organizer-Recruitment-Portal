const cultural = [
  {
    id: "Anubhuti",
    title: "Anubhuti",
    description:
      "Write. Speak. Guess. We're proud to be artists and we're proud to be Hindi. Give freedom to your creative impulse by being a part of Anubhuti.",
  },
  {
    // Infodesk and Finance
    id: "Ampersand",
    title: "Ampersand",
    description:
      "Where words find a voice and cultures stir up commotion, Ampersand is where you flaunt your verbal and written skills with a zeal like no other.",
  },
  {
    // App Dev
    id: "Ergo",
    title: "Ergo",
    description:
      "Ergo is an open category for those who have a flair for general knowledge, answering riddles, figuring out puzzles, and weaving interesting plots!",
  },
  {
    id: "Psychus",
    title: "Psychus",
    description:
      "For those of you who have an affinity for looking past hurdles of delusion, acuity and psychology, put on your thinking caps as Psychus takes you on an adrenaline-fuelled adventure.",
  },
  {
    id: "Kalakriti",
    title: "Kalakriti",
    description:
      "Kalakriti brings you a stage to showcase your finesse in art, be it creating an album cover or doodling, and gives you the opportunity to fully express yourself and fall in love with art all over again!",
  },
  {
    id: "Crescendo",
    title: "Crescendo",
    description:
      "For those of you who want to showcase your musical knowledge and prowess, collaborate with talented musicians, and grow as artists, Crescendo is the place for you! Come join us to perform, learn and explore the intricacies of music!",
  },
  {
    id: "Footloose",
    title: "Footloose",
    description:
      " When you dance, your purpose is not to get to a certain place in the floor, it’s to enjoy each step along the way. Revels'22 presents FOOTLOOSE, a chance for you to show off your moves.",
  },
  {
    id: "HauteCouture",
    title: "HauteCouture",
    description:
      "Fashion brings out the designer in us, an expressionist beaming with confidence. To test the same, Revels’22 brings you HAUTE COUTURE, a gala of glamour and grace.",
  },
  {
    id: "Animania",
    title: "Animania",
    description:
      "The ultimate dream for all Otakus and K-drama bingers; Animania is a collection of adrenaline-pumping events recreated from your favourite Anime and Korean dramas. Your only goal? Be the last one standing.",
  },
  {
    id: "Xventure",
    title: "Xventure",
    description:
      "Fuel your adrenaline! Xventure allows you to tap into your inner adrenaline junkie and feel every second run the course through your body.",
  },
  {
    id: "HumanLibrary",
    title: "HumanLibrary",
    description:
      "Human Library strives to encourage dialogue around stereotypes and prejudices in our communities through a unique event. Participate and learn how to unjudge the person behind the cover.",
  },

  {
    id: "Lensation",
    title: "Lensation",
    description:
      "Transcend the boundary of language and let your creativity speak through the nuances of photography and videography",
  },
  {
    id: "Iridescent",
    title: "Iridescent",
    description:
      "Discover the true creative geek inside you with games that rattle your mind and test how much attention to detail you're willing to pay in the games we plan for our trivia and logic based events.",
  },
  {
    id: "Altaebir",
    title: "Altaebir",
    description:
      "Fancy of yourself as a director, a writer or even an actor? We bring to you Revel's Film Festival. Essentially, we're gonna give you an offer you can't refuse!",
  },

  {
    id: "Consulere",
    title: "Consulere",

    description:
      "A compendium of events that test your analytical wits and real-world knowledge. A platform designed to bring out the creative, cautious genius in you - Suit up and make your case to take home not just the prize money but also tonnes of acuity! It is time to incubate your unique perspective and solve problems that pester everyone ranging from behemoth corporations to your modest sabziwala in day-to-day life.",
  },
  {
    id: "Dramebaaz",
    title: "Dramebaaz",
    description:
      "Dramebaaz is a category of Revels where you get to experience all the spheres and of this artform be it mime, nukkad naatak, center stage and everything more you can think about. It  aims to include something fun to do for everyone interested in the art of dramatics through our numerous events.",
  },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
const categories = shuffle(cultural);

export default categories;
