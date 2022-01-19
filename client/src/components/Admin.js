import React from "react";

const Admin = () => {
  return (
    <div className="admin">
      {/* render acc to category */}
      <div>CATEGORY NAME</div>
      <button className="btn" type="submit">
        <a href="http://localhost:5000/registrations/APP">Download Sheet</a>
      </button>
      <div className="list">
        List of Applicants
        <div className="person">
          <div>Rhea</div>
          <div>YES/NO</div>
        </div>
        <div className="person">
          <div>Ishan</div>
          <div>YES/NO</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
