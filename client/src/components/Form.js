import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Loading...");
    if (
      pref_1 === "--" ||
      pref_2 === "--" ||
      // slot_1 === "" ||
      // slot_2 === "" ||
      name === "" ||
      email === "" ||
      registration_no === "" ||
      phone === "" ||
      branch === "" ||
      cgpa === ""
    ) {
      toast.error("All fields are required*", {
        id: toastId,
      });
      return;
    }
    if (pref_1 == pref_2) {
      toast.error("Preferences cannot be same", {
        id: toastId,
      });
      return;
    }
    try {
      const data = {
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
      };
      const res = await axios.post("http://localhost:5000/register", data);
      if (res.data.success) {
        toast.success(`${res.data.msg} \n We will contact you soon.`, {
          id: toastId,
          duration: 5000,
        });
        setName("");
        setRegistration_no("");
        setEmail("");
        setPhone("");
        setBranch("");
        setCgpa("");
        setSlot_1("");
        setSlot_2("");
        setPref_1("--");
        setPref_2("--");
        return;
      }
      if (!res.data.success) {
        var str;
        if (isArray(res.data.msg)) {
          str = Object.keys(res.data.msg[0])
            .map((key) => `${key} : ${res.data.msg[0][key]}`)
            .toString();
        } else {
          str = res.data.msg;
        }

        toast.error(str, {
          id: toastId,
        });
        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong `, {
        id: toastId,
      });
    }
  };

  function isArray(what) {
    return Object.prototype.toString.call(what) === "[object Array]";
  }

  const [name, setName] = useState("");
  const [registration_no, setRegistration_no] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [pref_1, setPref_1] = useState("--");
  const [pref_2, setPref_2] = useState("--");
  const [slot_1, setSlot_1] = useState("");
  const [slot_2, setSlot_2] = useState("");

  return (
    <form className="login-form">
      <div className="row">
        <div className="user-box">
          <input
            type="text"
            name=""
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name=""
            required
            value={registration_no}
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
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email ID</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name=""
            required
            value={phone}
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
            required
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
          <label>Branch</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name=""
            required
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
          />
          <label>CGPA</label>
        </div>
      </div>
      <div className="row slots">
        <div className="user-box">
          <label>Preference 1</label>
          <select
            id="pref1"
            name="pref1"
            value={pref_1}
            onChange={(e) => setPref_1(e.target.value)}
          >
            <option value="default">--</option>
            <option value="PROSHOW">Proshow</option>
            <option value="social media">Social Media</option>
            <option value="graphics">Graphics</option>
            <option value="sponsorship"> Sponsorship</option>
            <option value="pnp">Publicity and Printing</option>
            <option value="logistics">Logistics</option>
            <option value="OP">Operations</option>
            <option value="OM">Outstation management</option>
            <option value="APP"> App Development</option>
            <option value="SYS">System admin and Web</option>
          </select>
        </div>
        <div className="user-box">
          <label>Preference 2</label>
          <select
            id="pref2"
            name="pref2"
            value={pref_2}
            onChange={(e) => setPref_2(e.target.value)}
          >
            <option value="default">--</option>
            <option value="PROSHOW">Proshow</option>
            <option value="social media">Social Media</option>
            <option value="graphics">Graphics</option>
            <option value="sponsorship"> Sponsorship</option>
            <option value="pnp">Publicity and Printing</option>
            <option value="logistics">Logistics</option>
            <option value="OP">Operations</option>
            <option value="om">Outstation management</option>
            <option value="APP"> App Development</option>
            <option value="SYS">System admin and Web</option>
          </select>
        </div>
        {/* <div className="user-box">
          <label>Availability</label>
          <input
            type="date"
            onChange={(e) => setSlot_1(e.target.value)}
            className="slots-in"
            value={slot_1}
            min="2022-01-29"
            max="2022-02-25"
          ></input>
        </div> */}
      </div>

      <div className="row slots">
        {/* <div className="user-box">
          <label>Preference 2</label>
          <select
            id="pref2"
            name="pref2"
            value={pref_2}
            onChange={(e) => setPref_2(e.target.value)}
          >
            <option value="default">--</option>
            <option value="PROSHOW">Proshow</option>
            <option value="social media">Social Media</option>
            <option value="graphics">Graphics</option>
            <option value="sponsorship"> Sponsorship</option>
            <option value="pnp">Publicity and Printing</option>
            <option value="logistics">Logistics</option>
            <option value="OP">Operations</option>
            <option value="om">Outstation management</option>
            <option value="APP"> App Development</option>
            <option value="SYS">System admin and Web</option>
          </select>
        </div> */}
        {/* <div className="user-box">
          <div>
            <label>Availability</label>
            <input
              type="date"
              onChange={(e) => setSlot_2(e.target.value)}
              className="slots-in"
              value={slot_2}
              min="2022-01-29"
              max="2022-02-25"
            ></input>
          </div>
        </div> */}
      </div>
      <button className="btn" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
