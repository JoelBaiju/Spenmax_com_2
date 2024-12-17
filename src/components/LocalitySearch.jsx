import React, { useState, useEffect } from "react";
import axios from "axios";

const LocalitySearch = ({setvendors,startloading,stoploading}) => {
  const [query, setQuery] = useState(""); // Search text input
  const [results, setResults] = useState([]); // API results
  const [debouncedQuery, setDebouncedQuery] = useState(""); // Debounced value of query
  const [selectedSuggestion, setSelectedSuggestion] = useState(""); // Selected suggestion

  const accessToken =
    "pk.eyJ1Ijoic3Blbm1heGFwcDEyMyIsImEiOiJjbTRzM281bTkwMzVqMmxzNHJidmNmZXgzIn0.AhdGGztZp5NSBPd-MAZcFw";

  // Function to get the first word from a string
  const getFirstWord = (text) => {
    return text.split(/[-,\s]/)[0];
  };
  // Update debounced query after 1 second when query changes
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    // Cleanup timeout if query changes again before 1 second
    return () => clearTimeout(handler);
  }, [query]);

  // Fetch results when debouncedQuery changes
  useEffect(() => {
    const fetchLocalities = async () => {
      if (!debouncedQuery) return; // Prevent empty calls
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedQuery}.json?access_token=${accessToken}`
        );
        setResults(response.data.features);
      } catch (error) {
        console.error("Error fetching data from Mapbox:", error);
      }
    };

    fetchLocalities();
  }, [debouncedQuery]);

  // Function to handle suggestion click
  const handleSelectSuggestion = async(placeName) => {
    const firstWord = getFirstWord(placeName); // Get the first word
    setQuery(firstWord); 
    fetchvendors(firstWord)
    setQuery('')
    setResults([]); // Clear suggestions
  };












  const fetchvendors=async()=>{
    startloading()

    console.log('address:', query)
    if (query) {
        const response = await fetch(`https://spenmax.in/api/shop/vendor/branches/user/?search=${query}`);

        if (response.ok) {
            const data = await response.json();
            console.log("Response Data:", query);
            setvendors(data)
        } else {
            console.error("Failed to fetch pricing. Status:", response.status);
        }
    }
    stoploading()
  }



  return (
    <div className="w-full">
      <input
        className="w-full h-10 mt-5 rounded-md p-2"
        id="searchbox"
        type="text"
        placeholder="Search locality or place name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />


      {/* Display First Suggestion Only */}
      {results.length > 0 && (
        <ul style={{ marginTop: "20px", listStyleType: "none", padding: 0 }}>
          <li
          className="bg-white/50 flex justify-between items-center"
            style={{ cursor: "pointer", padding: "10px" }}
            onClick={() => handleSelectSuggestion(results[0].place_name)}
          >
            {getFirstWord(results[0].place_name)}
            <i class="fa-solid fa-arrow-up -rotate-45"></i>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LocalitySearch;
