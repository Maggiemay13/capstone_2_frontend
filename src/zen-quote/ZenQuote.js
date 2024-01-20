import React, { useState, useEffect } from "react";
import MindfulMomentApi from "../api/api";

function ZenQuote() {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    // Fetch Zen quote when the component mounts
    fetchZenQuote();
  }, []);

  async function fetchZenQuote() {
    try {
      const response = await MindfulMomentApi.getZenQuote();

      // Check if the response is undefined or not in the expected format
      if (!response || !response.quote || !response.author) {
        console.error("Invalid Zen quote response:", response);
        return;
      }

      // Set the quote data in the state
      setQuoteData(response);
    } catch (error) {
      console.error("Error fetching Zen quote:", error.message);
    }
  }

  return (
    <div>
      {quoteData ? (
        <div>
          <p>"{quoteData.quote}"</p>
          <p>- {quoteData.author}</p>
        </div>
      ) : (
        <p>Loading Zen quote...</p>
      )}
    </div>
  );
}

export default ZenQuote;
