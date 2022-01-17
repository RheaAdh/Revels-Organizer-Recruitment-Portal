import React, { useState } from "react";
import axios from "axios";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:5000/register",
      data: {
        name,
        registration_no,
        email,
        phone,
        branch,
        cgpa,
        pref_1,
        pref_2,
        slot_1,
        slot_2,
      },
    }).then((response) => {
      console.log(response.msg);
      alert(response.msg);
    });
  };

  const [name, setName] = useState("");
  const [registration_no, setRegistration_no] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [pref_1, setPref_1] = useState("Preference 1");
  const [pref_2, setPref_2] = useState("Preference 2");
  const [slot_1, setSlot_1] = useState("");
  const [slot_2, setSlot_2] = useState("");

  const fields = (
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
  );

  return (
    <form className="login-form">
      <div className="row">
        <div className="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setRegistration_no(e.target.value)}
          />
          <label>Registration No.</label>
        </div>
      </div>
      <div className="row">
        <div className="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email ID</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setPhone(e.target.value)}
          />
          <label>Phone</label>
        </div>
      </div>
      <div className="row">
        <div className="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setBranch(e.target.value)}
          />
          <label>Branch</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setCgpa(e.target.value)}
          />
          <label>CGPA</label>
        </div>
      </div>
      <div className="single-item-row">
        <div className="user-box">
          <label>Preference 1</label>

          <select
            id="pref1"
            name="pref1"
            onChange={(e) => setPref_1(e.target.value)}
          >
            <option value="default">Preference 1</option>
            <option value="proshow">Proshow</option>
            <option value="social media">Social Media</option>
            <option value="graphics">Graphics</option>
            <option value="sponsorship"> Sponsorship</option>
            <option value="pnp">Publicity and Printing</option>
            <option value="logistics">Logistics</option>
            <option value="operations">Operations</option>
            <option value="om">Outstation management</option>
            <option value="appdev"> App Development</option>
            <option value="webdev">System admin and Web</option>
          </select>
        </div>
      </div>
      <div className="single-item-row">
        <div className="user-box">
          <label>Preference 2</label>
          <select
            id="pref2"
            name="pref2"
            onChange={(e) => setPref_2(e.target.value)}
          >
            <option value="default">Preference 2</option>
            <option value="proshow">Proshow</option>
            <option value="social media">Social Media</option>
            <option value="graphics">Graphics</option>
            <option value="sponsorship"> Sponsorship</option>
            <option value="pnp">Publicity and Printing</option>
            <option value="logistics">Logistics</option>
            <option value="operations">Operations</option>
            <option value="om">Outstation management</option>
            <option value="appdev"> App Development</option>
            <option value="webdev">System admin and Web</option>
          </select>
        </div>
      </div>

      <div className="single-item-row">
        <div className="user-box">
          <label>Time Slot 1</label>
          <input
            type="datetime-local"
            style={{
              backgroundColor: "white",
              color: "black",
              marginTop: "2rem",
              padding: "0.5rem",
              margin: "1rem",
              width: "90%",
              textAlign: "center",
              background: "black",
              color: "white",
            }}
            onChange={(e) => setSlot_1(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="single-item-row">
        <div className="user-box">
          <div>
            <label>Time Slot 2</label>
            <input
              type="datetime-local"
              style={{
                backgroundColor: "white",
                color: "black",
                marginTop: "2rem",
                padding: "0.5rem",
                margin: "1rem",
                width: "90%",
                textAlign: "center",
                background: "black",
                color: "white",
              }}
              onChange={(e) => setSlot_2(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <input className="btn" type="submit" onClick={handleSubmit}></input>
    </form>
  );
}

export default Form;
