import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFont,
  faCalendarAlt,
  faEdit,
  faFileUpload,
  faAngleDown,
  faClone,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import { Breadcrumb2 } from "./Breadcrumb2";

export const FontAwesome: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Icons</h1>

        <div className="field">
          <Breadcrumb2 />
        </div>

        <div className="field">
          <p className="buttons">
            <button className="button">
              <span className="icon">
                <FontAwesomeIcon icon={faClone} />
              </span>
              <span>Add section</span>
            </button>
          </p>
        </div>

        <div className="field">
          <p className="buttons">
            <button className="button is-dark">
              <span className="icon">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </button>
            <button className="button">
              <span className="icon">
                <FontAwesomeIcon icon={faFont} />
              </span>
              <span>Text</span>
            </button>
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  style={{ marginRight: "0.5rem" }}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faEdit} />
                  </span>
                  <span>Input</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="#single" className="dropdown-item">
                    Single line input
                  </a>
                  <a href="#multi" className="dropdown-item">
                    Multi-line input
                  </a>
                </div>
              </div>
            </div>

            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  style={{ marginRight: "0.5rem" }}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faList} />
                  </span>
                  <span>List</span>
                  <span className="icon">
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a
                    href="#list"
                    className="dropdown-item"
                    title="Only one item can be selected."
                  >
                    List box
                  </a>
                  <a
                    href="#radio"
                    className="dropdown-item"
                    title="Only one item can be selected."
                  >
                    Radio button
                  </a>
                  <a
                    href="#check"
                    className="dropdown-item"
                    title="Multiple selections are possible."
                  >
                    Check box
                  </a>
                </div>
              </div>
            </div>
            <button className="button">
              <span className="icon">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </span>
              <span>Date</span>
            </button>
            <button className="button">
              <span className="icon">
                <FontAwesomeIcon icon={faFileUpload} />
              </span>
              <span>File upload</span>
            </button>
          </p>
        </div>

        <div className="field">
          <input
            id="switchExample"
            type="checkbox"
            name="switchExample"
            className="switch"
            checked={true}
          />
          <label htmlFor="switchExample">Switch example</label>
        </div>
      </div>
    </section>
  );
};
