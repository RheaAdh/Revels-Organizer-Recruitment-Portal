import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { TOKEN_ID } from "../../utils/constants";
import axios from "axios";

import "./Admin.css";
import StudentDetail from "./StudentDetail";

const Admin = () => {
  const auth = useAuth();
  const [slotCount, setSlotCount] = useState(0);
  const [applicants, setApplicants] = useState([]);
  const [downloadLink, setDownloadLink] = useState(
    `http://localhost:5000/admin/registrations/${auth.category.category}`
  );
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
    try {
      const res = await axios.get(
        `http://localhost:5000/admin/organisers/${auth.category.category}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(TOKEN_ID)}`,
          },
        }
      );
      setApplicants(res.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getApplicants();
  }, []);
  return (
    <div className="admin">
      <h3 className="heading">{auth.category.categoryId}</h3>
      <button className="btn download" type="submit">
        <a href={downloadLink}>Download List <i className="fa fa-download"></i></a>
      </button>
      
      <h1>Status of Applicants</h1>

      {applicants.map((applicant, index) => (
        <StudentDetail
          applicant={applicant}
          key={index}
          adminCategory={auth.category}
        />
      ))}
      <form>
        <input
          type="number"
          placeholder="Slots per day?"
          className="slot-input"
          onChange={(e) => setSlotCount(e.target.value)}
        ></input>
        <button className="btn" type="submit" onClick={updateSlot}>
          Update
        </button>
      </form>
      <button className="btn" onClick={auth.logout}>
        Logout
      </button>
      
    </div>
  );
};

export default Admin;
