import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import "../../index.css";
// import "antd/lib/date-picker/style/index.css";
// import "antd/dist/antd.css";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import DateRangePicker from "react-bootstrap-daterangepicker";
// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-daterangepicker/daterangepicker.css";
import axios from "axios";
import { Alert, AlertTitle } from "@material-ui/lab";
// const { RangePicker } = DatePicker;
import Moment from "react-moment";
class SearachV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keySearch: "",
      travelType: "personal",
      onPageChange: 0,
      destinationValue: [
        { title: "Maldives" },
        { title: "Andaman" },
        { title: "Thailand" },
        { title: "Dubai" },
        { title: "Bankok" },
        { title: "Italy" },
        { title: "Russia" },
        { title: "Bali" },
        { title: "Sri Lanka" },
      ],
      tripType: "",
      dateValue: "",
      name: "",
      phoneNumber: "",
      email: "",
      fetching: false,
      adults: "",
      childeren: "",
      infant: "",
      comments: "",
      toDate: "",
      fromDate: "",
      destinations: [],
      value: "",
    };
  }

  onNextClick = () => {
    this.setState((prevState) => ({
      onPageChange: prevState.onPageChange + 1,
    }));
  };

  onBackClick = () => {
    this.setState((prevState) => ({
      onPageChange: prevState.onPageChange - 1,
    }));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  tripTypeChange = (value) => {
    this.setState({
      tripType: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      adults,
      childeren,
      infant,
      comments,
      email,
      name,
      phoneNumber,
      tripType,
      fromDate,
      toDate,
      destinations,
    } = this.state;
    // destinations.forEach()
    const data = {
      destination: [...destinations],
      toDate: toDate.toString(),
      fromDate: fromDate.toString(),
      travellers: `adults ${adults} , childeren ${childeren} , infants ${infant}`,
      reason: tripType,
      name: name,
      phoneNumber: phoneNumber,
      comments: comments,
      email: email,
    };

    axios
      .post(process.env.REACT_APP_CLIENT_ID + "enquiry", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        return this.successAlert;
      })
      .catch((error) => {
        return this.errorAlert(error);
      });
  };

  errorAlert = (error) => {
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
    );
  };

  successAlert = () => {
    this.props.closeModal();
    return (
      <Alert severity="success">
        <AlertTitle>Submitted</AlertTitle>
        Your Form has been submitted.
      </Alert>
    );
  };

  render() {
    return (
      <div style={{ background: "rgb(239, 242, 241)", height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div className="col-4">
            <img
              src="https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              style={{ borderRadius: "24px", height: "100%", width: "100%" }}
            />
          </div>

          <div className="col-8">
            <div style={{ marginBottom: "70px" }}>
              <span
                style={{ float: "right", cursor: "pointer" }}
                onClick={this.props.closeModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 21 21"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
            </div>
            <div>0{this.state.onPageChange + 1}/03</div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  height: "4px",
                  width: "30%",
                  backgroundColor:
                    this.state.onPageChange == 0
                      ? "rgb(0, 120, 162)"
                      : "rgb(204, 204, 204)",
                  borderRadius: "3px",
                }}
              />
              <div
                style={{
                  height: "4px",
                  width: "30%",
                  backgroundColor:
                    this.state.onPageChange == 1
                      ? "rgb(0, 120, 162)"
                      : "rgb(204, 204, 204)",
                  borderRadius: "3px",
                  marginLeft: "10px",
                }}
              />
              <div
                style={{
                  height: "4px",
                  width: "30%",
                  backgroundColor:
                    this.state.onPageChange == 2
                      ? "rgb(0, 120, 162)"
                      : "rgb(204, 204, 204)",
                  borderRadius: "3px",
                  marginLeft: "10px",
                }}
              />
            </div>

            <div>
              <form>
                {this.state.onPageChange == 0 ? (
                  <div style={{ marginTop: "40px" }}>
                    <div className="modal-text">
                      <span
                        style={{
                          position: "relative",
                          top: "1px",
                          marginRight: "12px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#0078A2"
                          class="bi bi-brightness-alt-high-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                        </svg>
                      </span>
                      Which destinations would you like to travel to?
                    </div>
                    <div style={{ position: "relative" }}>
                      <span
                        style={{
                          position: "absolute",
                          top: "6px",
                          left: "12px",
                          zIndex: "10",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </span>
                      <Autocomplete
                        multiple
                        id="tags-filled"
                        options={this.state.destinationValue.map(
                          (option) => option.title
                        )}
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              variant="filled"
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        onChange={(e, value, reason) =>
                          this.setState({
                            ...this.state.destinations,
                            destinations: value,
                          })
                        }
                        renderInput={(params) => (
                          <TextField {...params} variant="filled" />
                        )}
                      />
                    </div>
                    <div className="modal-text" style={{ marginTop: "30px" }}>
                      <span
                        style={{
                          position: "relative",
                          top: "1px",
                          marginRight: "12px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#0078A2"
                          class="bi bi-brightness-alt-high-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                        </svg>
                      </span>
                      What kind of trip are you planning?
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                      <div
                        className={
                          this.state.tripType == "honeymoon"
                            ? "trip-planning-box-select"
                            : "trip-planning-box"
                        }
                        onClick={() => this.tripTypeChange("honeymoon")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cup-straw"
                          viewBox="0 0 640 512"
                        >
                          <path d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z" />
                        </svg>
                        <div>Honeymoon</div>
                      </div>
                      <div
                        className={
                          this.state.tripType == "anniversary"
                            ? "trip-planning-box-select"
                            : "trip-planning-box"
                        }
                        onClick={() => this.tripTypeChange("anniversary")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cup-straw"
                          viewBox="0 0 640 512"
                        >
                          <path d="M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z" />
                        </svg>
                        <div>Anniversary</div>
                      </div>
                      <div
                        className={
                          this.state.tripType == "birthday"
                            ? "trip-planning-box-select"
                            : "trip-planning-box"
                        }
                        onClick={() => this.tripTypeChange("birthday")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cup-straw"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0l-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z" />
                        </svg>

                        <div>Birthday</div>
                      </div>
                      <div
                        className={
                          this.state.tripType == "family"
                            ? "trip-planning-box-select"
                            : "trip-planning-box"
                        }
                        onClick={() => this.tripTypeChange("family")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cup-straw"
                          viewBox="0 0 640 512"
                        >
                          <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                        </svg>
                        <div>Family</div>
                      </div>
                      <div
                        className={
                          this.state.tripType == "groups"
                            ? "trip-planning-box-select"
                            : "trip-planning-box"
                        }
                        onClick={() => this.tripTypeChange("groups")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-cup-straw"
                          viewBox="0 0 640 512"
                        >
                          <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
                        </svg>
                        <div>Groups</div>
                      </div>
                    </div>
                  </div>
                ) : this.state.onPageChange == 1 ? (
                  <div style={{ marginTop: "40px" }}>
                    <div className="modal-text">
                      <span
                        style={{
                          position: "relative",
                          top: "1px",
                          marginRight: "12px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#0078A2"
                          class="bi bi-brightness-alt-high-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                        </svg>
                      </span>
                      How many of you will be travelling?
                    </div>
                    <div style={{ display: "flex", marginBottom: "15px" }}>
                      <input
                        className="travelling-people-input"
                        value={this.state.adults}
                        placeholder="Adults(12-above)"
                        onChange={(e) =>
                          this.setState({ adults: e.target.value })
                        }
                        type="text"
                      />
                      <input
                        className="travelling-people-input"
                        value={this.state.childeren}
                        placeholder="Childeren(2-11.99)"
                        onChange={(e) =>
                          this.setState({ childeren: e.target.value })
                        }
                        type="text"
                      />
                      <input
                        className="travelling-people-input"
                        value={this.state.infant}
                        placeholder="Infant(0-1.99)"
                        onChange={(e) =>
                          this.setState({ infant: e.target.value })
                        }
                        type="text"
                      />
                    </div>
                    <div className="modal-text">
                      <span
                        style={{
                          position: "relative",
                          top: "1px",
                          marginRight: "12px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#0078A2"
                          class="bi bi-brightness-alt-high-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                        </svg>
                      </span>
                      What are the dates you are looking at?
                    </div>

                    <DateRangePicker
                      onCallback={(start, end) =>
                        this.setState({ fromDate: start._d, toDate: end._d })
                      }
                    >
                      <input
                        type="text"
                        className="form-control date-range-picker"
                      />
                    </DateRangePicker>

                    <div className="modal-text">
                      <span
                        style={{
                          position: "relative",
                          top: "1px",
                          marginRight: "12px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#0078A2"
                          class="bi bi-brightness-alt-high-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                        </svg>
                      </span>
                      How can we make this trip better for you? (optional)
                    </div>
                    <textarea
                      onChange={(e) =>
                        this.setState({ comments: e.target.value })
                      }
                      rows="4"
                      cols="35"
                      style={{
                        border: "1px solid rgb(239, 242, 241)",
                        borderRadius: "20px",
                        padding: "2px 10px",
                      }}
                    />
                  </div>
                ) : this.state.onPageChange == 2 ? (
                  <div style={{ marginTop: "40px" }}>
                    <div style={{ marginBottom: "10px" }}>
                      <span
                        style={{
                          position: "relative",
                          top: "1px",
                          marginRight: "12px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#0078A2"
                          class="bi bi-brightness-alt-high-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                        </svg>
                      </span>

                      <span className="modal-text">Your first name?</span>
                    </div>

                    <span
                      style={{
                        position: "absolute",
                        left: "28px",
                        marginTop: "10px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                    </span>

                    <input
                      name="name"
                      type="text"
                      className="modal-last-input"
                      onChange={this.handleChange}
                    />

                    <div style={{ marginBottom: "10px" }}>
                      <span
                        style={{
                          position: "relative",
                          top: "1px",
                          marginRight: "12px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#0078A2"
                          class="bi bi-brightness-alt-high-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                        </svg>
                      </span>
                      <span
                        className="modal-text"
                        style={{ marginTop: "20px" }}
                      >
                        Phone Number?
                      </span>
                    </div>

                    <span
                      style={{
                        position: "absolute",
                        left: "28px",
                        marginTop: "10px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                      </svg>
                    </span>

                    <input
                      name="phoneNumber"
                      type="text"
                      className="modal-last-input"
                      onChange={this.handleChange}
                    />

                    <div>
                      <span
                        style={{
                          position: "relative",
                          top: "1px",
                          marginRight: "12px",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#0078A2"
                          class="bi bi-brightness-alt-high-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
                        </svg>
                      </span>
                      <span
                        className="modal-text"
                        style={{ marginTop: "20px" }}
                      >
                        Your email ID?
                      </span>
                    </div>

                    <span
                      style={{
                        position: "absolute",
                        left: "28px",
                        marginTop: "10px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                      </svg>
                    </span>

                    <input
                      name="email"
                      type="text"
                      className="modal-last-input"
                      onChange={this.handleChange}
                    />
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
            <div
              style={{
                width: "90%",
                display: "flex",
                position: "absolute",
                bottom: "0px",
                justifyContent: "flex-end",
              }}
            >
              <button
                className="btn"
                onClick={this.onBackClick}
                disabled={this.state.onPageChange == 0 ? true : false}
              >
                Back
              </button>
              {this.state.onPageChange == 2 && (
                <button
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "rgb(0, 120, 162)",
                    color: "#fff",
                    borderRadius: "37px",
                    padding: "0px 60px",
                  }}
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              )}
              {this.state.onPageChange !== 2 && (
                <button
                  className="btn"
                  style={{
                    backgroundColor: "rgb(0, 120, 162)",
                    color: "#fff",
                    borderRadius: "37px",
                    padding: "0px 60px",
                  }}
                  onClick={this.onNextClick}
                  disabled={this.state.onPageChange == 2 ? true : false}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearachV2;
