import React, { useState } from "react";

import "./Form.scss";

const Form = (props) => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  // const [obj, setObj] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      // obj: obj,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
        <input
            name="get"
            type="button"
            value="GET"
            onClick={(e) => setMethod(e.target.value)}
          />
             <input
            name="post"
            type="button"
            value="POST"
            onClick={(e) => setMethod(e.target.value)}
          />
             <input
            name="put"
            type="button"
            value="PUT"
            onClick={(e) => setMethod(e.target.value)}
          />
             <input
            name="delete"
            type="button"
            value="DELETE"
            onClick={(e) => setMethod(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
