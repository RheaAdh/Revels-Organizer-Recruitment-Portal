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
    <div class="user-box">
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
  );

  return (
    <form className="login-form">
      <div className="row">
        <div class="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>
        <div class="user-box">
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
        <div class="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email ID</label>
        </div>
        <div class="user-box">
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
        <div class="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setBranch(e.target.value)}
          />
          <label>Branch</label>
        </div>
        <div class="user-box">
          <input
            type="text"
            name=""
            required=""
            onChange={(e) => setCgpa(e.target.value)}
          />
          <label>CGPA</label>
        </div>
      </div>
      <div className="row">
        <div class="user-box">
          <label>Preference 1</label>
          <select
            id="cars"
            name="cars"
            onChange={(e) => setPref_1(e.target.value)}
          >
            <option value="volvo">Preference 1</option>
            <option value="volvo">Proshow</option>
            <option value="saab">Social Media</option>
            <option value="audi">Graphics</option>
            <option value="fiat"> Sponsorship</option>
            <option value="audi">Publicity and Printing</option>
            <option value="volvo">Logistics</option>
            <option value="saab">Operations</option>
            <option value="audi">Outstation management</option>
            <option value="fiat"> App Development</option>
            <option value="audi">System admin and Web</option>
          </select>
        </div>
        <div class="user-box">
          <label>Preference 2</label>
          <select
            id="cars"
            name="cars"
            onChange={(e) => setPref_2(e.target.value)}
          >
            <option value="volvo">Preference 2</option>
            <option value="volvo">Proshow</option>
            <option value="saab">Social Media</option>
            <option value="audi">Graphics</option>
            <option value="fiat"> Sponsorship</option>
            <option value="audi">Publicity and Printing</option>
            <option value="volvo">Logistics</option>
            <option value="saab">Operations</option>
            <option value="audi">Outstation management</option>
            <option value="fiat"> App Development</option>
            <option value="audi">System admin and Web</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div class="user-box">
          <label>Slot 1</label>
          <input
            type="datetime-local"
            style={{
              backgroundColor: "white",
              color: "black",
              marginTop: "2rem",
            }}
            onChange={(e) => setSlot_1(e.target.value)}
          ></input>
        </div>
        <div class="user-box">
          <div>
            <label>Slot 2</label>
            <input
              type="datetime-local"
              style={{
                backgroundColor: "white",
                color: "black",
                marginTop: "2rem",
              }}
              onChange={(e) => setSlot_2(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <input type="submit" onClick={handleSubmit}></input>
    </form>
  );
}

export default Form;
