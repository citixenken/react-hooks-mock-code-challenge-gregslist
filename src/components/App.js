import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then(setListings)
      .catch((err) => console.error(err));
  }, []);

  function handleRemoveListing(id) {
    const newListings = listings.filter((listing) => listing.id === id);
    setListings(newListings);
  }

  const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer
        listings={displayedListings}
        onRemoveListing={handleRemoveListing}
      />
    </div>
  );
}

export default App;
