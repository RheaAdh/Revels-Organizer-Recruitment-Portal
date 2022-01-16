import React from "react";

function Form() {
  const fields = (
    <div class="user-box">
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
  );

  return (
    <form className="login-form">
      <div className="row">
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Name</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Phone</label>
        </div>
      </div>
      <div className="row">
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Registration</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Email ID</label>
        </div>
      </div>
    </form>
  );
}

export default Form;
