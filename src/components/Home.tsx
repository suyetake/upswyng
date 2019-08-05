import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import HomeButtons from './HomeButtons';
import { Container, font } from '../App.styles';
import SearchInput from './SearchInput';

const HomeButtonsContainer = styled(Grid)`
  && {
    margin-bottom: ${font.helpers.convertPixelsToRems(30)};
    margin-top: ${font.helpers.convertPixelsToRems(15)};
  }
` as typeof Grid;

const Home = () => (
  <Container container justify="space-evenly">
    <Grid item xs={12}>
      <SearchInput />
    </Grid>
    <Grid item xs={12}>
      <HomeButtonsContainer
        container
        direction="row"
        justify="space-evenly"
        spacing={8}
      >
        <HomeButtons />
      </HomeButtonsContainer>
    </Grid>
    <Grid>
      <a href="https://www.netlify.com">
        <img
          src="https://www.netlify.com/img/global/badges/netlify-light.svg"
          alt="deploys by Netlify"
        />
      </a>
    </Grid>
  </Container>
);

export default Home;
