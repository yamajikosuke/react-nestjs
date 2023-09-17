import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCheck,
  faEnvelope,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

export const Form = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Form Sample</h1>
        <div className="field">
          {/* Time*/}
          <label className="label">Time</label>
          <div className="control">
            <input className="input" type="time" placeholder="Text input" />
          </div>
        </div>
        {/* DateTime-local */}
        <div className="field">
          <label className="label">DateTime-Local</label>
          <div className="control">
            <input
              className="input"
              type="datetime-local"
              placeholder="Text input"
            />
          </div>
        </div>
        {/* Name */}
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Text input" />
          </div>
        </div>
        {/* Username */}
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              type="text"
              placeholder="Text input"
              value="bulma"
              onChange={() => {}}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="icon is-small is-right">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </div>
        {/* Email */}
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="email"
              placeholder="Email input"
              value="hello@"
              onChange={() => {}}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="icon is-small is-right">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </span>
          </div>
          <p className="help is-danger">This email is invalid</p>
        </div>
        {/* Subject */}
        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <div className="select">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>
        {/* Message */}
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>
        {/* Check box */}
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />I agree to the{" "}
              {/* <a href="#">terms and conditions</a> */}
            </label>
          </div>
        </div>
        {/* Radio button */}
        <div className="field">
          <div className="control">
            <label className="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label className="radio">
              <input type="radio" name="question" />
              No
            </label>
          </div>
        </div>
        {/* Button */}
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </section>
  );
};
