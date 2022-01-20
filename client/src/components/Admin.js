import React from "react";

const Admin = () => {
  return (
    <div className="admin">
      {/* render acc to category */}
      <div className="left">
        <h2 className="revels">REVELS '22</h2>
        <h3 className="heading">App Dev</h3>
        <h3>Category ID: 1RDI94P</h3>
        <button className="btn" type="submit">
          <a href="http://localhost:5000/registrations/APP">
            Download Applicants
          </a>
        </button>
        <form>
          <label>No.of slots per day</label>
          <br />
          <input type="number"></input>
          <br />
          <button className="btn" type="submit">
            Update
          </button>
        </form>
      </div>

      <div className="right">
        <h1>List of Applicants</h1>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea</span>
          <button className="btn">Selected</button>
          <button className="btn">Rejected</button>
          <button className="btn">Send Mail</button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Ishan</span>
          <button className="btn">Selected</button>
          <button className="btn">Rejected</button>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Sent Mail
          </button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea</span>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Selected
          </button>
          <button className="btn">Rejected</button>
          <button className="btn">Send Mail</button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Ishan</span>
          <button className="btn">Selected</button>
          <button className="btn" style={{ backgroundColor: "red" }}>
            Rejected
          </button>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Sent Mail
          </button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Ishan</span>
          <button className="btn">Selected</button>
          <button className="btn">Rejected</button>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Sent Mail
          </button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea</span>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Selected
          </button>
          <button className="btn">Rejected</button>
          <button className="btn">Send Mail</button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Ishan</span>
          <button className="btn">Selected</button>
          <button className="btn">Rejected</button>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Sent Mail
          </button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea</span>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Selected
          </button>
          <button className="btn">Rejected</button>
          <button className="btn">Send Mail</button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Ishan</span>
          <button className="btn">Selected</button>
          <button className="btn">Rejected</button>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Sent Mail
          </button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea</span>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Selected
          </button>
          <button className="btn">Rejected</button>
          <button className="btn">Send Mail</button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Ishan</span>
          <button className="btn">Selected</button>
          <button className="btn">Rejected</button>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Sent Mail
          </button>
        </div>
        <div className="person">
          <span style={{ marginRight: "1rem" }}>Rhea</span>
          <button className="btn" style={{ backgroundColor: "green" }}>
            Selected
          </button>
          <button className="btn">Rejected</button>
          <button className="btn">Send Mail</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
