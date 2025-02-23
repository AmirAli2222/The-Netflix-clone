import React from 'react'
import { Row } from '../Row/Row';
import requests from '../../../utils/requests';
export const RowList = () => {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isSmall={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isSmall={true}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
        isSmall={true}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isSmall={true}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isSmall={true}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isSmall={true}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isSmall={true}
      />
      {/* <Row title="TV Shows" fetchUrl={requests.fetchTvShow} isSmall={true} /> */}
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isSmall={true}
      />
      <Row
        title="Animation"
        fetchUrl={requests.fetchAnimation}
        isSmall={true}
      />
      <Row
        title="Kids"
        fetchUrl={requests.fetchKids}
        isSmall={true}
      />

    </div>
  );
}
