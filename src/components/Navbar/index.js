import React from 'react';
import 'bulma/css/bulma.min.css';
import { Section, Tabs } from 'react-bulma-components';
import { Link } from 'react-router-dom';

function Placeholder() {
  return (
    <Section>
      <Tabs align='center' type='boxed'>
        <Tabs.Tab>
          <Link to='/'>Our Journey</Link>
        </Tabs.Tab>
        <Tabs.Tab>
          <Link to='/Gallery'>Gallery</Link>
        </Tabs.Tab>
        <Tabs.Tab>
          <Link to='/Registry'>Registry</Link>
        </Tabs.Tab>
      </Tabs>
    </Section>
  );
}

export default Placeholder;
