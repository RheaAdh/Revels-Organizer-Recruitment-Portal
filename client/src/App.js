import "./App.css";
import Footer from "./components/Footer";
import Carousel from "react-elastic-carousel";
import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
function App() {
  const [categories, setCategories] = useState([
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ]);

  return (
    <div className="App">
      <h2>Revels Logo here</h2>
      <h3 className="heading">Organizer Portal</h3>
      <div className="glider">
        <Carousel breakPoints={breakPoints}>
          {categories.map((item) => {
            return <Card key={item.id} />;
          })}
        </Carousel>
      </div>

      <h3 className="heading">Blacklist Rules</h3>
      <div className="blacklist-text">
        <p>
          1. All organizers are supposed to attend all the interviews they have
          chosen or else they will be blacklisted if they don't inform
          beforehand.
          <br />
          2. Organizer leaving a category after being chosen in one or
          interchange their category will be blacklisted.
          <br />
          3. Any act of misbehaving during time of work in the category will be
          blacklisted.
          <br />
          4. Organizers who don't attend meetings and contribute to the category
          will be blacklisted.
          <br />
          5. Any organizer having cgpa below 6 will not be shortlisted.
          <br />
          6. Blacklisted organizers wont receive certification and also wont be
          allowed to participate in future fests.
          <br />
        </p>
      </div>
      <h3 className="heading">Registration</h3>
      <Form />
      <Footer />
    </div>
  );
}

export default App;
