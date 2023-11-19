// "use client";

// import React, { useState, useEffect } from "react";
// // https://api.quotable.io/random

// const StateFetch = () => {
//   const [quote, setQuote] = useState(null);
//   useEffect(() => {
//     const fetchQuote = async () => {
//       const res = fetch("https://api.quotable.io/random");
//       const data = await res.json();
//       setQuote(data);
//       console.log(quote);
//     };
//     fetchQuote();
//   }, []);
//   return <div>using use State</div>;
// };

// export default StateFetch;

"use client";

import React, { useState, useEffect } from "react";
// https://api.quotable.io/random

const StateFetch = () => {
  const [quote , setQuote] = useState(null);
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-2xl  font-bold py-2"> fetch using useState and useEffect</h1>
      <p>Author : {quote?.author }</p>
    </div>
  );
};

export default StateFetch;
