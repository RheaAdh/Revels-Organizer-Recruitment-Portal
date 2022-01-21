import React from "react";
import { useAuth } from "../context/AuthContext";

const Admin = () => {
  const auth = useAuth();
  return (
    <div className="admin">
      {/* render acc to category */}
      <center>
        <h3 className="heading">App Dev</h3>
        <button className="btn" type="submit">
          <a
            href="http://localhost:5000/registrations/APP"
            style={{ textDecoration: "none" }}
          >
            Download Applicants
          </a>
        </button>
        <form>
          <input
            type="number"
            placeholder="Slots per day?"
            style={{
              padding: "0.5rem",
              backgroundColor: "black",
              color: "white",
              marginRight: "1rem",
            }}
          ></input>
          <button className="btn" type="submit">
            Update
          </button>
        </form>
        <h1>Status of Applicants</h1>
        {/* <input
          placeholder="Search Applicant"
          style={{ padding: "1rem" }}
        ></input> */}
      </center>

      <div className="card-container">
        {" "}
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea Adhikari</span>
          <div className="pref1">
            <span style={{ marginRight: "1rem" }}>Pref 1</span>
            <button className="btn">Selected</button>
            <button className="btn" style={{ backgroundColor: "red" }}>
              Rejected
            </button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
          <div className="pref2">
            <span style={{ marginRight: "1rem" }}>Pref 2</span>
            <button className="btn" style={{ backgroundColor: "green" }}>
              Selected
            </button>
            <button className="btn">Rejected</button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea Adhikari</span>
          <div className="pref1">
            <span style={{ marginRight: "1rem" }}>Pref 1</span>
            <button className="btn">Selected</button>
            <button className="btn" style={{ backgroundColor: "red" }}>
              Rejected
            </button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
          <div className="pref2">
            <span style={{ marginRight: "1rem" }}>Pref 2</span>
            <button className="btn" style={{ backgroundColor: "green" }}>
              Selected
            </button>
            <button className="btn">Rejected</button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea Adhikari</span>
          <div className="pref1">
            <span style={{ marginRight: "1rem" }}>Pref 1</span>
            <button className="btn">Selected</button>
            <button className="btn" style={{ backgroundColor: "red" }}>
              Rejected
            </button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
          <div className="pref2">
            <span style={{ marginRight: "1rem" }}>Pref 2</span>
            <button className="btn" style={{ backgroundColor: "green" }}>
              Selected
            </button>
            <button className="btn">Rejected</button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea Adhikari</span>
          <div className="pref1">
            <span style={{ marginRight: "1rem" }}>Pref 1</span>
            <button className="btn">Selected</button>
            <button className="btn" style={{ backgroundColor: "red" }}>
              Rejected
            </button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
          <div className="pref2">
            <span style={{ marginRight: "1rem" }}>Pref 2</span>
            <button className="btn" style={{ backgroundColor: "green" }}>
              Selected
            </button>
            <button className="btn">Rejected</button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea Adhikari</span>
          <div className="pref1">
            <span style={{ marginRight: "1rem" }}>Pref 1</span>
            <button className="btn">Selected</button>
            <button className="btn" style={{ backgroundColor: "red" }}>
              Rejected
            </button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
          <div className="pref2">
            <span style={{ marginRight: "1rem" }}>Pref 2</span>
            <button className="btn" style={{ backgroundColor: "green" }}>
              Selected
            </button>
            <button className="btn">Rejected</button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea Adhikari</span>
          <div className="pref1">
            <span style={{ marginRight: "1rem" }}>Pref 1</span>
            <button className="btn">Selected</button>
            <button className="btn" style={{ backgroundColor: "red" }}>
              Rejected
            </button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
          <div className="pref2">
            <span style={{ marginRight: "1rem" }}>Pref 2</span>
            <button className="btn" style={{ backgroundColor: "green" }}>
              Selected
            </button>
            <button className="btn">Rejected</button>
            {/* <button className="btn" disabled>
              Send Mail
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
