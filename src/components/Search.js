import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("");
  const [response, setResponse] = useState([]);
  console.log(response);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php?", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: "term",
        },
      });
      setResponse(data);
    };
    search();
  }, [term]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
