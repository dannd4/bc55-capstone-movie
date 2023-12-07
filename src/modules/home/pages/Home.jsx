import React from "react";
import Banner from "../components/Banner";
import MovieShowing from "../components/MovieShowing";
import Cinema from "../components/Cinema";

export default function Home() {
  return (
    <div>
      <h1>Header</h1>

      <Banner />
      <MovieShowing />
      <Cinema />
    </div>
  );
}
