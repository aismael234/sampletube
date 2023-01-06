import React from "react";
import "./Main.css";
import Video from "./Video";
import Filter from "./Filter";
import axios from "axios";

const API_URL = "https://sampletube-backend-production.up.railway.app";
// const API_URL = "https://sampletube-backend-production.up.railway.app";

// Gets thumbnail url, current uploader name and title
// https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=tZcBn5EaVmI&format=json

export default function Main() {
  const [video, setVideo] = React.useState({
    id: "",
    title: "",
    uploader: "",
    view_count: "",
    upload_date: "",
  });

  const [form, setForm] = React.useState({
    minimum_views: "",
    maximum_views: "",
    date_from: "",
    date_to: "",
    keywords: "",
  });

  const [isValidFilter, setIsValidFilter] = React.useState(true);

  function toggleIsValidFilter() {
    setIsValidFilter((prevState) => !prevState);
  }

  // Handle form data changes
  function handleForm(event) {
    const { name, type, value } = event.target;

    if (type === "number") {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value.replace(/\D/g, ""),
      }));
    } else if (type === "date" || type === "textarea") {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: event.target.value,
      }));
    } else if (type === "reset") {
      setForm({
        minimum_views: "",
        maximum_views: "",
        date_from: "",
        date_to: "",
        keywords: "",
      });
    }

    //console.log(form);
  }

  // Send filter data to server and grab video that meets criteria
  async function handleSubmit() {
    //console.log(form);

    const data = await axios.get(API_URL, { params: form });
    //console.log(data);
    const videoData = data.data[0];
    //console.log(videoData);
    if (videoData) {
      if (isValidFilter === false) toggleIsValidFilter();
      setVideo({
        ...videoData,
        view_count: videoData.view_count + " views",
      });
    } else {
      if (isValidFilter === true) toggleIsValidFilter();
    }
  }

  // Load video on initial page load
  const fetchInitialVideo = async () => {
    const data = await axios.get(API_URL);
    //console.log(data);
    const videoData = data.data[0];
    //console.log(videoData);
    setVideo({
      ...videoData,
      view_count: videoData.view_count + " views",
    });
  };

  React.useEffect(() => {
    fetchInitialVideo();
  }, []);

  return (
    <main>
      <h2 className="description">
        Generate a Random <span className="description-red">Sample.</span>
        <br />
        <span className="description-red">Inspire</span> New Music.
      </h2>
      <div className="main">
        <Video className="main-video" video={video} />
        <Filter
          className="main-filter"
          video={video}
          form={form}
          handleForm={() => handleForm(event)}
          onSubmit={handleSubmit}
          isValidFilter={isValidFilter}
          toggleIsValidFilter={toggleIsValidFilter}
        />
      </div>
    </main>
  );
}
