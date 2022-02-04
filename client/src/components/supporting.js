const supporting = [
  {
    title: "Workshops",
    description:
      "What's a show without a trailer? Get a chance to organize and manage different workshops for the students, to showcase the ritual of Pre-Revels. It'll be your responsibility to ensure the feasibility to conduct the workshops as and when being approached by other categories.",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&showinfo=0&iv_load_policy=3&controls=0&modestbranding" 
  },
  {
    // Infodesk and Finance
    title: "Infodesk and Finance",
    description:
      "What if a student is having trouble understanding the categories or can't figure out how Revels will go about? The answer here is you. You will be the helping hand to guide the students ensuring they don't miss out on anything during Revels. While there's no parliament, but Revels is no less important hence, you'll be accountable for the budget discussions for the organization of each category of events.",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&showinfo=0&iv_load_policy=3&controls=0&modestbranding"
  },
  {
    // App Dev
    title: "App Dev",
    description:
      "If you speak in the languages that a computer understands, be the bridge for communication between a student and the fest! You’ll be responsible for assisting with the front-end and back-end development of the revels app that provides information and updates regarding the events/ categories to the students.",
  },
  {
    title: "ProShow",
    description:
      "Get the opportunity to work in one of the most prestigious categories in all of revels: Work closely with the CCs to help decide the line up, assist in ensuring that performers have what they need while in town, and get involved in setting up the venue and making sure this event is utterly memorable",
  },
  {
    title: "Certificates and Prizes",
    description:
      "The reward for work well done is the opportunity to do more”. The winners of every category in an event during Revels will be given certificates and prizes, and you will be responsible for managing them while ensuring that every winner receives their reward successfully without any mishaps.",
  },
  {
    title: "Logistics",
    description:
      "The management of all the data and resources that are required during the events has to be done meticulously to have a successful fest, and if you believe that your data management and problem-solving skills , come forth and be a part of the logistics team. You’re the person who maintains a proper database of every resource starting from stationery to major props that are used and the borrowers of those resources.",
  },
  {
    title: "Vigilance",
    description:
      "When it comes to a grand fest like Revels, safety, protection, and security play one of the most important roles without a doubt. Here, you'll be the go-to person for every important checkpoint that requires approvals and confirmations. You must make sure that everyone is abiding by the rules for the smooth running of the events without any disruptions. ",
  },
  {
    title: "Photography and Videography",
    description:
      "Every remarkable moment that is captured gets added to the memories forever and hence, if you can help us make Revels the most beautiful and unforgettable memory for every student, this team needs you. Be it the pro-show or any flagship event, it is your job to capture all the remarkable instances, candids, etc., and make an aftermovie as a token of remembrance for all.",
  },
  {
    title: "Informals",
    description:
      "We all deserve a relaxing break after a wild day of celebration and the informals are the ones we count on. From little stalls for taking pictures with fun games like a treasure hunt and foodathon, you'll be organizing and managing it all. It'll be your responsibility to have your station on and going throughout the fest.",
  },
  {
    title: "HFS",
    description:
      "One cannot enjoy the fest well, if not dined well. So if you feel happy in making people's day, join the HFS team and be responsible for all the food stalls throughout the fest. You'll be responsible for giving out the redeemable food coupons when required and ensuring there's no issue in doing so.",
  },
  {
    title: "Judges",
    description:
      "Do you feel you can interact well with professionals and manage to convince them to judge for an event? This category involves deciding which judge will be judging an event and ensures that they reach the event on time. You will have to make sure whatever the judges require is taken care of.",
  },
  {
    title: "Web and System Admin",
    description:
      "As we welcome various participants not only from our own college but also from different colleges to be a part of Revels, it’ll be your job to help maintain the database for each participant throughout as a part of the system admin team while also assisting with the the front-end and back-end development of the different payment procedures and Gateways. You need to create and maintain portals to ensure the smooth working of other committees.",
  },
  {
    title: "Publicity and Printing",
    description:
      "By coming up with different strategies to market traditionally in and around the campus, and ultimately decide the size of the event. You get the chance to steer a nerve of excitement around you through your engagement skills which also includes promotion through artwork and putting out the posters in everyone’s reach. You will also have the authority to paint the walls on campus and decorate the student plaza according to your imagination.",
  },
  {
    title: "Gaming",
    description:
      "If you are skilled in using a controller or your aim never misses the target while shooting an enemy, then show off your competence and organize gaming battles for the students during the fest. You'll need to ensure the smooth working of various games and networks while the competition is running. So let the games begin!",
  },
  {
    title: "Outstation Management",
    description:
      "Do you enjoy interacting with new people and enjoy being a host? Then imagine sending invites as a representative of the college and being the first point of contact for the students coming to the fest from other colleges. You will need to take care of food, accommodation, and all other essential requirements of these students as they are our guests.",
  },
  {
    title: "Social Media",
    description:
      "Is Instagram the first thing you open in the morning? Think you know enough about social media trends and how to use them? Then come be a part of the team that will manage the content for the revels page for close to 4k followers on Instagram and other platforms.You will have to engage with the public by coming up with innovative ideas and work closely with the graphics and photography team.",
  },
  {
    title: "Operations",
    description:
      "Are you a dedicated worker? Do you like to keep things in order? If yes, then come be a part of the Revels operations team to polish this skill even further. Operations makes the timetable of the fest, ensures proper distributions of events, and allocates the venues for them. Making Revels function like a well oiled machine falls on your shoulders",
  },
  {
    title: "HRD",
    description:
      "Ever wondered who delegates volunteers to various categories? Yes it's HRD. You will be responsible to provide volunteers to a particular category, as and when required. You will need to have good people management skills and ensure there is no conflict of interest between anyone.",
  },
  {
    title: "Graphics",
    description:
      "While Revels builds tons of memories for each student, it’s the visuals that make Revels memorable for the world ahead with its marvelous creativity. So, come show off your artistry with the graphic designing involved in making the posters, banners, and other marketing material related to Revels. While working hand in hand with the social media team, your work is to promote/market content related to the fest all over the platforms and make sure we stretch to reach maximum engagement.",
  },
  {
    title: "Sponsorships",
    description:
      "If dealing with numbers and shaking hands on a deal is your skill, then you have come to the right place. Building business relationships and bringing in funds from suitable companies to make Revels bigger and better is your agenda. It will be your job to make a portfolio describing various slabs of sponsorships for our potential sponsors and making sure the MOUs are in sync with the work being done, thus keeping both sides happy.",
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
export default shuffle(supporting);
