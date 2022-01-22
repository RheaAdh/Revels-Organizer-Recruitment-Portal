import React from "react";
import { useAuth } from "../../context/AuthContext";
import { TOKEN_ID } from "../../utils/constants";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./Admin.css";

const Admin = () => {
  const auth = useAuth();
  const [slotCount, setSlotCount] = React.useState(0);
  const downloadApplicants = async () => {
    console.log(auth.category);
    console.log(
      `http://localhost:5000/admin/registrations/${auth.category.category}`
    );
    const token = localStorage.getItem(TOKEN_ID);
    const res = await axios.get(
      `http://localhost:5000/admin/registrations/${auth.category.category}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(res);
  };
  const updateSlot = async (e) => {
    e.preventDefault();
    const verdict = window.confirm("Are you sure you want to update the slot?");
    if (!verdict) {
      return;
    }
    if (verdict) {
      const data = {
        slot_count: slotCount,
      };
      const res = await axios.post(
        `http://localhost:5000/admin/updateslot/${auth.category.categoryId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(TOKEN_ID)}`,
          },
        }
      );
      console.log(res);
    }
  };

  return (
    <div className="admin">
      {/* render acc to category */}
      <center>
        <h3 className="heading">{auth.category.categoryId}</h3>
        <button className="btn" type="submit" onClick={downloadApplicants}>
          Download Applicants
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
            onChange={(e) => setSlotCount(e.target.value)}
          ></input>
          <button className="btn" type="submit" onClick={updateSlot}>
            Update
          </button>
        </form>
        <h1>Status of Applicants</h1>
        {/* <input
          placeholder="Search Applicant"
          style={{ padding: "1rem" }}
        ></input> */}
      </center>
      <StudentDetail />
      <StudentDetail />
      <StudentDetail />
    </div>
  );
};
function StudentDetail() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const r = window.confirm("Are you sure");
    if (!r) {
      return;
    }
    if (r) {
    }
  };
  return (
    <div className="studentdetails">
      <div className="studentdetails-col col1">
        <h4>Rhea Adhikari</h4>
        <p>rheadhikari@gmail.com</p>
        <p>9898989898</p>
        <p>190911116</p>
      </div>
      <div className="studentdetails-col">
        <h4>Pref 1: </h4>
        <p>Not Reviewed</p>
        <div className="status-btn">
          <button className="btn selected">
            Select <i className="fa fa-check"></i>
          </button>
          <button className="btn rejected">
            Reject <i className="fa fa-close"></i>
          </button>
        </div>
      </div>
      <div className="studentdetails-col">
        <h4>Pref 2: </h4>
        <p>Not Reviewed</p>
        <div className="status-btn">
          <button className="btn selected">
            Select <i className="fa fa-check"></i>
          </button>
          <button className="btn rejected">
            Reject <i className="fa fa-close"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
