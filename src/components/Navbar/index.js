import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Section, Tabs } from 'react-bulma-components';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isGalleryActive, setIsGalleryActive] = useState(true);
  const [isJourneyActive, setIsJourneyActive] = useState(false);
  const [isRegistryActive, setIsRegistryActive] = useState(false);

  function toggleIsGalleryActive() {
    setIsGalleryActive(!isGalleryActive);
  }

  function toggleIsJourneyActive() {
    setIsJourneyActive(!isJourneyActive);
  }

  function toggleIsRegistryActive() {
    setIsRegistryActive(!isRegistryActive);
  }

  return (
    <Section>
      <Tabs align='center' type='boxed'>
        <Link to='/' onClick={toggleIsGalleryActive}>
          <Tabs.Tab active={isGalleryActive}>
            <h2>Gallery</h2>
          </Tabs.Tab>
        </Link>
        <Link to='/Journey' onClick={toggleIsJourneyActive}>
          <Tabs.Tab active={isJourneyActive}>
            <h2>Our Journey</h2>
          </Tabs.Tab>
        </Link>
        <Link to='/Registry' onClick={toggleIsRegistryActive}>
          <Tabs.Tab active={isRegistryActive}>
            <h2>Registry</h2>
          </Tabs.Tab>
        </Link>
      </Tabs>
    </Section>
  );
}

export default Navbar;
