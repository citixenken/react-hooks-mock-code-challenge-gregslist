import React, { useState } from "react";

const NewistingForm = ({ onAddListing }) => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { description, image, location };

    fetch("https://localhost:6001/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newListing) => {
        onAddListing(newListing);
      })
      .catch((err) => console.error(err));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label htmlFor="image">image:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label htmlFor="location">location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Add Listing</button>
    </form>
  );
};

export default NewistingForm;
