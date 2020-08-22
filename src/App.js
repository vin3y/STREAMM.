import React from "react";
import "./App.css";
import Row from "../src/components/Row";
import request from "./requests";
import Banner from "../src/components/Banner";
import Nav from "../src/components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      {/* nav bar */}
      {/*banner */}

      <Banner />

      <Row
        title="NETFLIX Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}
//
export default App;
