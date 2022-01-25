import Footer from "./Footer";
import Carousel from "react-elastic-carousel";
import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import supportingCategories from "./supporting";
const breakPoints = [
  { width: 1, itemsToShow: 3 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 2, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
];
function Landing() {
  const [tab, setTab] = useState(0);
  // Supporting
  const [categories, setCategories] = useState(supportingCategories);
  // Cultural
  const [categories2, setCategories2] = useState([
    { id: 1, title: "PV" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ]);
  return (
    <div className="App">
      <h2 className="revels">REVELS '22</h2>
      <h3 className="heading">Organizer Portal</h3>
      <div className="tab-container">
        <button
          className="tab"
          onClick={() => {
            setTab(0);
          }}
          style={{
            backgroundColor: tab === 0 ? "transparent" : "transparent",
          }}
        >
          <span
            style={{
              color:
                tab === 0 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)",
              fontWeight: tab === 0 ? "bold" : "",
            }}
          >
            SUPPORTING CATEGORIES
          </span>
        </button>
        <button
          className="tab"
          onClick={() => setTab(1)}
          style={{
            backgroundColor: tab === 1 ? "transparent" : "transparent",
          }}
        >
          <span
            style={{
              color:
                tab === 1 ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)",
              fontWeight: tab === 1 ? "bold" : "",
            }}
          >
            CULTURAL CATEGORIES
          </span>
        </button>
      </div>
      {tab === 0 ? (
        <div className="glider">
          <Carousel breakPoints={breakPoints}>
            {categories.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </Carousel>
        </div>
      ) : (
        <div className="glider">
          <Carousel breakPoints={breakPoints}>
            {categories2.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </Carousel>
        </div>
      )}

      <h3 className="heading">Blacklist Rules</h3>
      <div className="blacklist-text">
        <p>
          1. All organizers are supposed to attend all the interviews they have
          chosen or else they will be blacklisted if they don't inform
          beforehand
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

export default Landing;
