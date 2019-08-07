import React from 'react';
import { Container } from '../App.styles';
import useSimilarSearchResults from './useSimilarSearchResults';
import SearchResults from './SearchResults';

const Hygiene = () => {
  const searchQuery =
    'hygiene, feminine products, hair cut, laundry, restroom, shower';
  const searchResults = useSimilarSearchResults(searchQuery);
  return (
    <Container>
      <h1>Hygiene</h1>
      <SearchResults results={searchResults} />
    </Container>
  );
};

export default Hygiene;
