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
    //console.log(`From filter component: ${JSON.stringify(event.target.value)}`);
    props.onSubmit();
  }

  // function handleForm(event) {
  //   const { name, type, value } = event.target;

  //   if (type === "number") {
  //     setForm((prevForm) => ({
  //       ...prevForm,
  //       [name]: value.replace(/\D/g, ""),
  //     }));
  //   } else if (type === "date" || type === "text") {
  //     setForm((prevForm) => ({
  //       ...prevForm,
  //       [name]: event.target.value,
  //     }));
  //   } else if (type === "reset") {
  //     setForm({
  //       minimum_views: "",
  //       maximum_views: "",
  //       date_from: "",
  //       date_to: "",
  //       keywords: "",
  //     });
  //   }

  //   console.log(form);
  // }

  return (
    <form className="filter">
      <h4 style={{ alignSelf: "center", margin: "0", marginBottom: "5px" }}>
        Filter
      </h4>
      <div className="inputs-container">
        <div className="input-row">
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
        </div>
        <div className="input-row">
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
        </div>
        <div id="input-date" className="input-row">
          <label htmlFor="date_from">Uploaded between </label>
          <input
            style={{ width: "60px" }}
            type="date"
            name="date_from"
            id="date_from"
            value={props.form.date_from}
            onChange={props.handleForm}
          />
          <label htmlFor="date_to">and</label>
          <input
            style={{ width: "60px" }}
            type="date"
            name="date_to"
            id="date_to"
            value={props.form.date_to}
            onChange={props.handleForm}
          />
        </div>
        <div className="input-row" id="input-keywords">
          <label htmlFor="keywords">Keywords </label>
          <textarea
            style={{ width: "150px" }}
            name="keywords"
            id="keywords"
            value={props.form.keywords}
            onChange={props.handleForm}
          />
        </div>
        <div className="buttons-container">
          <button
            type="reset"
            id="reset"
            name="reset"
            onClick={props.handleForm}
          >
            Reset
          </button>
          <button id="submit" onClick={handleSubmitBtn}>
            Sample!
          </button>
        </div>
      </div>
    </form>
  );
}
