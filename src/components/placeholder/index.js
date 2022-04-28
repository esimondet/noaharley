import React from 'react';
import 'bulma/css/bulma.min.css';
import { Heading, Content, Section, Box } from 'react-bulma-components';

function Navbar() {
  return (
    <Section>
      <Box>
        <Heading style={{ textAlign: 'center' }}>
          <h1>Noah and Harley are getting married!</h1>
        </Heading>
        <Content style={{ textAlign: 'center' }}>
          <p>February 3rd, 2024</p>
          <p>Richmond, MN</p>
          <p>RSVP to follow, check back later</p>
        </Content>
      </Box>
    </Section>
  );
}

export default Navbar;
