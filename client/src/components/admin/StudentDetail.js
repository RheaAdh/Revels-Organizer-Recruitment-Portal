import React from "react";

function StudentDetail({ applicant }) {
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
        <h4>{applicant.name}</h4>
        <p>{applicant.email}</p>
        <p>{applicant.phone}</p>
        <p>{applicant.registration_no}</p>
      </div>
      <div className="studentdetails-col">
        <h4>Pref 1: </h4>
        {applicant.pref_1.status == 0 ? <p>Not Reviewed</p> : <p>Reviewed</p>}

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
        {applicant.pref_2.status == 0 ? <p>Not Reviewed</p> : <p>Reviewed</p>}

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

export default StudentDetail;
