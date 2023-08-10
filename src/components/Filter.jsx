import React, { useState } from "react";
import "./Filter.css";

export default function Filter(props) {
  //   const [form, setForm] = useState({
  //     minimum_views: "",
  //     maximum_views: "",
  //     date_from: "",
  //     date_to: "",
  //     keywords: "",
  //   });

  function handleSubmitBtn(event) {
    event.preventDefault();
    props.onSubmit();
  }

  return (
    <form className="filter">
      <h6 className="filter-error-message">
        <span
          className={
            props.isValidFilter ? "filter-error-off" : "filter-error-on"
          }
        >
          No video matches the given parameters
        </span>
      </h6>

      <h4 style={{ alignSelf: "center", margin: "0", paddingBottom: "5px" }}>
        Filter
      </h4>
      <div className="inputs-container">
        <label htmlFor="minimum_views">Minimum Views</label>
        <input
          id="minimum_views"
          name="minimum_views"
          placeholder="1000"
          min="0"
          type="number"
          value={props.form.minimum_views}
          onChange={props.handleForm}
        />
        <label htmlFor="maximum_views">Maximum Views</label>
        <input
          id="maximum_views"
          name="maximum_views"
          placeholder="300000"
          min="0"
          type="number"
          value={props.form.maximum_views}
          onChange={props.handleForm}
        />
        <label htmlFor="date_from">Uploaded between </label>
        <div className="dates-container">
          <input
            type="date"
            name="date_from"
            id="date_from"
            placeholder="MM/DD/YYYY"
            value={props.form.date_from}
            onChange={props.handleForm}
          />
          <label htmlFor="date_to">and</label>
          <input
            type="date"
            name="date_to"
            id="date_to"
            placeholder="MM/DD/YYYY"
            value={props.form.date_to}
            onChange={props.handleForm}
          />
        </div>
        <label htmlFor="keywords">Keywords </label>
        <textarea
          name="keywords"
          id="keywords"
          placeholder="Orchestra"
          value={props.form.keywords}
          onChange={props.handleForm}
        />
        <div className="buttons-container">
          <button
            type="reset"
            id="reset"
            name="reset"
            style={{ fontWeight: "600" }}
            onClick={() => {
              props.handleForm();
              if (props.isValidFilter === false) props.toggleIsValidFilter();
            }}
          >
            Reset
          </button>
          <button
            id="submit"
            style={{ fontWeight: "600" }}
            onClick={handleSubmitBtn}
          >
            Sample!
          </button>
        </div>
      </div>
    </form>
  );
}
