import React from 'react';
import { Container } from '../App.styles';
import useSimilarSearchResults from './useSimilarSearchResults';
import SearchResults from './SearchResults';

const JobTraining = () => {
  const searchQuery = 'job, career';
  const searchResults = useSimilarSearchResults(searchQuery);
  return (
    <Container>
      <h1>Job Training</h1>
      <SearchResults results={searchResults} />
    </Container>
  );
};

export default JobTraining;