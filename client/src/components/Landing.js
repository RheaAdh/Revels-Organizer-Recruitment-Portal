import Footer from "./Footer";
import Carousel from "react-elastic-carousel";
import { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import supportingCategories from "./supporting";
import culturalCategories from "./cultural";

import Categories from "./Categories";

function Landing() {
  const [tab, setTab] = useState(0);
  return (
    <div className="App">
      <h2 className="revels">REVELS '22</h2>
      <h3 className="heading">
        <strong>Organizer Portal</strong>
      </h3>
      <br />

      <div className="tab-container">
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
      </div>
      {tab === 0 ? (
        <Categories
          categories={supportingCategories}
          isList
          item={supportingCategories[0]}
        />
      ) : tab === 1 ? (
        <Categories
          categories={culturalCategories}
          isList={false}
          item={culturalCategories[0]}
        />
      ) : (
        <>
          <div class="cul">Starting Soon</div>
        </>
      )}
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
