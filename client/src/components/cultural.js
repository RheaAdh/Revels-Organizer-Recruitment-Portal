const cultural = [
  {
    id: "Anubhuti",
    title: "Anubhuti",
    description:
      "What's a show without a trailer? Get a chance to organize and manage different workshops for the students, to showcase the ritual of Pre-Revels. It'll be your responsibility to ensure the feasibility to conduct the workshops as and when being approached by other categories.",
  },
  {
    // Infodesk and Finance
    id: "Ampersand",
    title: "Ampersand",
    description:
      "What if a student is having trouble understanding the categories or can't figure out how Revels will go about? The answer here is you. You will be the helping hand to guide the students ensuring they don't miss out on anything during Revels. While there's no parliament, but Revels is no less important hence, you'll be accountable for the budget discussions for the organization of each category of events.",
  },
  {
    // App Dev
    id: "Ergo",
    title: "Ergo",
    description:
      "If you speak in the languages that a computer understands, be the bridge for communication between a student and the fest! You’ll be responsible for assisting with the front-end and back-end development of the revels app that provides information and updates regarding the events/ categories to the students.",
  },
  {
    id: "Psychus",
    title: "Psychus",
    description:
      "Get the opportunity to work in one of the most prestigious categories in all of revels: Work closely with the CCs to help decide the line up, assist in ensuring that performers have what they need while in town, and get involved in setting up the venue and making sure this event is utterly memorable",
  },
  {
    id: "Kalakriti",
    title: "Kalakriti",
    description:
      "The reward for work well done is the opportunity to do more”. The winners of every category in an event during Revels will be given certificates and prizes, and you will be responsible for managing them while ensuring that every winner receives their reward successfully without any mishaps.",
  },
  {
    id: "Crescendo",
    title: "Crescendo",
    description:
      "The management of all the data and resources that are required during the events has to be done meticulously to have a successful fest, and if you believe that your data management and problem-solving skills , come forth and be a part of the logistics team. You’re the person who maintains a proper database of every resource starting from stationery to major props that are used and the borrowers of those resources.",
  },
  {
    id: "Footloose",
    title: "Footloose",
    description:
      "When it comes to a grand fest like Revels, safety, protection, and security play one of the most important roles without a doubt. Here, you'll be the go-to person for every important checkpoint that requires approvals and confirmations. You must make sure that everyone is abiding by the rules for the smooth running of the events without any disruptions. ",
  },
  {
    id: "HauteCouture",
    title: "Haute Couture",
    description:
      "Every remarkable moment that is captured gets added to the memories forever and hence, if you can help us make Revels the most beautiful and unforgettable memory for every student, this team needs you. Be it the pro-show or any flagship event, it is your job to capture all the remarkable instances, candids, etc., and make an aftermovie as a token of remembrance for all.",
  },
  {
    id: "Animania",
    title: "Animania",
    description:
      "We all deserve a relaxing break after a wild day of celebration and the informals are the ones we count on. From little stalls for taking pictures with fun games like a treasure hunt and foodathon, you'll be organizing and managing it all. It'll be your responsibility to have your station on and going throughout the fest.",
  },
  {
    id: "Xventure",
    title: "Xventure",
    description:
      "One cannot enjoy the fest well, if not dined well. So if you feel happy in making people's day, join the HFS team and be responsible for all the food stalls throughout the fest. You'll be responsible for giving out the redeemable food coupons when required and ensuring there's no issue in doing so.",
  },
  {
    id: "HumanLibrary",
    title: "Human Library",
    description:
      "Do you feel you can interact well with professionals and manage to convince them to judge for an event? This category involves deciding which judge will be judging an event and ensures that they reach the event on time. You will have to make sure whatever the judges require is taken care of.",
  },

  {
    id: "Lensation",
    title: "Lensation",
    description:
      "By coming up with different strategies to market traditionally in and around the campus, and ultimately decide the size of the event. You get the chance to steer a nerve of excitement around you through your engagement skills which also includes promotion through artwork and putting out the posters in everyone’s reach. You will also have the authority to paint the walls on campus and decorate the student plaza according to your imagination.",
  },
  {
    id: "Iridescent",
    title: "Iridescent",
    description:
      "If you are skilled in using a controller or your aim never misses the target while shooting an enemy, then show off your competence and organize gaming battles for the students during the fest. You'll need to ensure the smooth working of various games and networks while the competition is running. So let the games begin!",
  },
  {
    id: "Altaebir",
    title: "Altaebir",
    description:
      "Do you enjoy interacting with new people and enjoy being a host? Then imagine sending invites as a representative of the college and being the first point of contact for the students coming to the fest from other colleges. You will need to take care of food, accommodation, and all other essential requirements of these students as they are our guests.",
  },

  {
    id: "Consulere",
    title: "Consulere",

    description:
      "Is Instagram the first thing you open in the morning? Think you know enough about social media trends and how to use them? Then come be a part of the team that will manage the content for the revels page for close to 4k followers on Instagram and other platforms.You will have to engage with the public by coming up with innovative ideas and work closely with the graphics and photography team.",
  },
  {
    id: "Dramebaaz",
    title: "Dramebaaz",
    description:
      "Are you a dedicated worker? Do you like to keep things in order? If yes, then come be a part of the Revels operations team to polish this skill even further. Operations makes the timetable of the fest, ensures proper distributions of events, and allocates the venues for them. Making Revels function like a well oiled machine falls on your shoulders",
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
