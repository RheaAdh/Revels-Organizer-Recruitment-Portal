import React from "react";
import { useAuth } from "../../context/AuthContext";
import './Admin.css';
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
          <StudentDetail />
          <StudentDetail />
          <StudentDetail />
    </div>
  );
};
function StudentDetail  ()  {
      
  const handleSubmit = async(e) =>{
   e.preventDefault();
   const r = window.confirm("Are you sure");
   if(!r){
     return
   }
   if(r){
     
   }
 };
return(
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
       <button className="btn selected">Select <i class="fa fa-check"></i></button>
       <button className="btn rejected">Reject <i class="fa fa-close"></i></button>
       </div>
     </div>
     <div className="studentdetails-col">
     <h4>Pref 2: </h4>
       <p>Not Reviewed</p>
       <div className="status-btn">
       <button className="btn selected">Select <i class="fa fa-check"></i></button>
       <button className="btn rejected">Reject <i class="fa fa-close"></i></button>
       </div>
     </div>
   </div>
);
}

export default Admin;
