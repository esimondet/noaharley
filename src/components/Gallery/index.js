import React from 'react';
import 'bulma/css/bulma.min.css';
import { Heading, Content, Section, Box } from 'react-bulma-components';

function Gallery() {
  return (
    <Section>
      <Box>
        <Heading style={{ textAlign: 'center' }}>
          <h1>Checkout our Pics</h1>
        </Heading>
      </Box>
    </Section>
  );
}

export default Gallery;
