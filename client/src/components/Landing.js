import Footer from "./Footer";
import Carousel from "react-elastic-carousel";
import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import supportingCategories from "./supporting";
import sportsCategories from "./sports";
import culturalCategories from "./cultural";
import Categories from "./Categories";

function Landing() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1450, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1750, itemsToShow: 6, itemsToScroll: 6 },
  ];
  const [tab, setTab] = useState(2);
  return (
    <div className="App">
      <h2 className="revels">REVELS '22</h2>
      <h3 className="heading">
        <strong>Organizer Portal</strong>
      </h3>
      <br />

      {/* <div className="tab-container">
        <button
          className="tab"
          onClick={() => {
            setTab(0);
          }}
          style={{
            border:
              tab === 0 ? "2px solid #fff" : "1px solid rgba(255,255,255,0.5)",
            backgroundColor: tab === 0 ? "#fff" : "transparent",
          }}
        >
          <span
            style={{
              color: tab === 0 ? "rgba(0,0,0,1)" : "rgba(255,255,255,0.5)",
              fontWeight: tab === 0 ? "bold" : "",
            }}
          >
            Supporting Categories
          </span>
        </button>
        <button
          className="tab"
          onClick={() => setTab(1)}
          style={{
            border:
              tab === 1 ? "2px solid #fff" : "1px solid rgba(255,255,255,0.5)",
            backgroundColor: tab === 1 ? "#fff" : "transparent",
          }}
        >
          <span
            style={{
              color: tab === 1 ? "rgba(0,0,0,1)" : "rgba(255,255,255,0.5)",
              fontWeight: tab === 1 ? "bold" : "",
            }}
          >
            Sports
          </span>
        </button>
        <button
          className="tab"
          onClick={() => {
            setTab(2);
          }}
          style={{
            border:
              tab === 2 ? "2px solid #fff" : "1px solid rgba(255,255,255,0.5)",
            backgroundColor: tab === 2 ? "#fff" : "transparent",
          }}
        >
          <span
            style={{
              color: tab === 2 ? "rgba(0,0,0,1)" : "rgba(255,255,255,0.5)",
              fontWeight: tab === 2 ? "bold" : "",
            }}
          >
            Cultural Categories
          </span>
        </button>
      </div> */}
      {/* {tab === 0 ? (
        <>
          <div class="cul">CLOSED</div>
        </>
      ) : tab === 1 ? (
        <>
          <div class="cul">CLOSED</div>
        </>
      ) : (
        <>
          <div class="cul">CLOSED</div>
        </>
      )} */}
      <>
        <div class="cul">
          CLOSED
          <p>
            Those who have already registered will receive an email shortly
            notifying them of their selection status.
          </p>
        </div>
      </>

      <br />
      <h3 className="heading htitle">Blacklist Rules</h3>
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
          7. If selected in supporting or sports category, you won't be allowed
          to apply for cultural category.
          <br />
        </p>
      </div>
      <br />

      <h3 className="heading htitle av">Registration</h3>

      <Form />
      <Footer />
    </div>
  );
}

export default Landing;

/* <Categories
  categories={supportingCategories}
  isList
  item={supportingCategories[0]}
  tab={0}
/> */

/* <Categories
  categories={sportsCategories}
  isList={false}
  item={sportsCategories[0]}
  tab={1}
/> */
/* <div className="glider">
<Carousel breakPoints={breakPoints}>
  {culturalCategories.map((item) => {
    return <Card key={item.id} item={item} />;
  })}
</Carousel>
</div> */
