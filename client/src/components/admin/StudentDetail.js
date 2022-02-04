import React from "react";
import "./Admin.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import { TOKEN_ID } from "../../utils/constants";
import toast from "react-hot-toast";

function StudentDetail({ applicant, adminCategory }) {
  const handleEmail = () => {
    confirmAlert({
      title: `Send Email : ${applicant.name} `,
      message: `Are you sure?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => sendEmail(),
        },
        {
          label: "No",
        },
      ],
    });
  };
  const sendEmail = async () => {
    const toastId = toast.loading("Sending...");
    const data = {
      organiserId: applicant._id,
    };
    try {
      const res = await axios.post(`/admin/confirmuser`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(TOKEN_ID)}`,
        },
      });
      if (!res.data.success) {
        toast.error(res.data.message, {
          id: toastId,
        });
        return;
      }
      if (res.data.success) {
        toast.success("Email Sent", {
          id: toastId,
        });
        window.location.reload();
        return;
      }
    } catch (error) {
      console.log(error.response);
      toast.error("Something went wrong", {
        id: toastId,
      });
    }
  };
  const handleSubmit = (value) => {
    confirmAlert({
      title: `${value} : ${applicant.name} `,
      message: `Are you sure?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => submitReview(value),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const submitReview = async (value) => {
    const toastId = toast.loading("Loading...");
    const data = {
      organiserId: applicant.id,
      status: value === "Select" ? 1 : 2,
    };
    try {
      const res = await axios.patch(`/admin/organiser/status`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(TOKEN_ID)}`,
        },
      });
      if (!res.data.success) {
        toast.error(res.data.message, {
          id: toastId,
        });
        return;
      }
      if (res.data.success) {
        toast.success("Status Updated", {
          id: toastId,
        });
        window.location.reload();
        return;
      }
    } catch (error) {
      console.log(error.response);
      toast.error("Something went wrong", {
        id: toastId,
      });
    }
  };
  return (
    <div className="studentdetails">
      <div className="studentdetails-col col1">
        <h4>{applicant.name}</h4>
        <p>{applicant.registration_no}</p>
        <p>{applicant.email}</p>
        <p>Phone : {applicant.phone}</p>
      </div>
      <div className="studentdetails-col">
        <h4>Pref 1 : {applicant.pref_1.category}</h4>
        {applicant.pref_1.status === 0 &&
        applicant.pref_1.category === adminCategory.category ? (
          <>
            <p>Not Reviewed </p>
            <div className="status-btn">
              <button
                className="btns selected"
                value="Select"
                onClick={(e) => handleSubmit(e.target.value)}
              >
                Select <i className="fa fa-check"></i>
              </button>
              <button
                className="btns rejected"
                value="Reject"
                onClick={(e) => handleSubmit(e.target.value)}
              >
                Reject <i className="fa fa-close"></i>
              </button>
            </div>
          </>
        ) : (
          <>
            {applicant.pref_1.status === 0 ? (
              <p>Not Reviewed</p>
            ) : (
              <p>Reviewed</p>
            )}
          </>
        )}
        {applicant.pref_1.status === 1 && (
          <div className="status-btn">
            <button className="btns in">Selected</button>
            {applicant.pref_1.category === adminCategory.category && (
              <button className="btns email" onClick={handleEmail}>
                Send Mail <i className="fa fa-paper-plane"></i>
              </button>
            )}
          </div>
        )}
        {applicant.pref_1.status === 3 && (
          <div className="status-btn">
            <button className="btns in">Selected</button>
            <button className="btns in">Mail Sent</button>
          </div>
        )}
        {applicant.pref_1.status === 2 && (
          <div className="status-btn">
            <button className="btns out">Rejected</button>
          </div>
        )}
      </div>
      <div className="studentdetails-col">
        <h4>Pref 2 : {applicant.pref_2.category}</h4>
        {applicant.pref_1.status === 0 ? (
          <p>Confirmation Pending for Pref 1</p>
        ) : (
          <>
            {applicant.pref_1.status === 1 ? (
              <p>Selected for Pref 1</p>
            ) : (
              <>
                {applicant.pref_1.status === 2 &&
                applicant.pref_2.status === 0 ? (
                  <>
                    <p>Not Reviewed</p>
                    {applicant.pref_2.category === adminCategory.category && (
                      <div className="status-btn">
                        <button
                          className="btns selected"
                          value="Select"
                          onClick={(e) => handleSubmit(e.target.value)}
                        >
                          Select <i className="fa fa-check"></i>
                        </button>
                        <button
                          className="btns rejected"
                          value="Reject"
                          onClick={(e) => handleSubmit(e.target.value)}
                        >
                          Reject <i className="fa fa-close"></i>
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {applicant.pref_2.status === 1 ? (
                      <div>
                        <p>Reviewed</p>
                        <div className="status-btn">
                          <button className="btns in">Selected</button>
                          {applicant.pref_2.category ===
                            adminCategory.category && (
                            <button
                              className="btns email"
                              value="Select"
                              onClick={handleEmail}
                            >
                              Send Mail <i className="fa fa-paper-plane"></i>
                            </button>
                          )}
                        </div>
                      </div>
                    ) : (
                      <>
                        {applicant.pref_2.status === 3 && (
                          <>
                            <p>Reviewed</p>
                            <div className="status-btn">
                              <button className="btns in">Selected</button>
                              <button className="btns in">Mail Sent</button>
                            </div>
                          </>
                        )}
                        {applicant.pref_2.status === 2 && (
                          <>
                            <p>Reviewed</p>
                            <div className="status-btn">
                              <button className="btns out">Rejected</button>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default StudentDetail;
