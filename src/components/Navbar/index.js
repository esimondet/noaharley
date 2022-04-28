import React from 'react';
import 'bulma/css/bulma.min.css';
import { Section, Tabs } from 'react-bulma-components';

function Placeholder() {
  return (
    <Section>
      <Tabs align='center' type='boxed'>
        <Tabs.Tab> Our Journey </Tabs.Tab>
        <Tabs.Tab> Gallery </Tabs.Tab>
        <Tabs.Tab> Registry </Tabs.Tab>
      </Tabs>
    </Section>
  );
}

export default Placeholder;
