import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { TOKEN_ID } from "../../utils/constants";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import "./Admin.css";
import StudentDetail from "./StudentDetail";

const Admin = () => {
  const auth = useAuth();
  const [slotCount, setSlotCount] = useState(0);
  const [applicants, setApplicants] = useState([]);
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
    }
  };
  const getApplicants = async () => {
    console.log("applicants");
    const res = await axios.get(
      `http://localhost:5000/admin/organisers/${auth.category.category}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(TOKEN_ID)}`,
        },
      }
    );
    setApplicants(res.data.data);
    console.log(applicants);
  };
  useEffect(() => {
    getApplicants();
  }, []);
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
      </center>
      {applicants.map((applicant) => (
        <StudentDetail applicant={applicant} />
      ))}
    </div>
  );
};

export default Admin;
