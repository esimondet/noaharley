import React from 'react';
import 'bulma/css/bulma.min.css';
import { Heading, Image, Section, Box, Columns } from 'react-bulma-components';

function Registry() {
  return (
    <Section>
      <Box>
        <Heading style={{ textAlign: 'center' }}>
          <h1>Checkout our Registries</h1>
        </Heading>
      </Box>
      <Section>
        <Columns>
          <Columns.Column>
            <Box>
              <div>
                <Image
                  src='../../assets/registry/home-depot.png'
                  alt='Home Depot Logo'
                  href='https://www.homedepot.com/'
                  target='blank'
                />
              </div>
              <div>
                <a href='https://www.homedepot.com/' target='blank'>
                  Home Depot
                </a>
              </div>
            </Box>
          </Columns.Column>
          <Columns.Column>
            <Box>
              <div>
                <img
                  src='../../assets/registry/home-depot.png'
                  alt='Home Depot Logo'
                  href='https://www.homedepot.com/'
                  target='blank'
                />
              </div>
              <div>
                <a href='https://www.homedepot.com/' target='blank'>
                  Home Depot
                </a>
              </div>
            </Box>
          </Columns.Column>
          <Columns.Column>
            <Box>
              <div>
                <img
                  src='../../assets/registry/home-depot.png'
                  alt='Home Depot Logo'
                  href='https://www.homedepot.com/'
                  target='blank'
                />
              </div>
              <div>
                <a href='https://www.homedepot.com/' target='blank'>
                  Home Depot
                </a>
              </div>
            </Box>
          </Columns.Column>
          <Columns.Column>
            <Box>
              <div>
                <img
                  src='../../assets/registry/home-depot.png'
                  alt='Home Depot Logo'
                  href='https://www.homedepot.com/'
                  target='blank'
                />
              </div>
              <div>
                <a href='https://www.homedepot.com/' target='blank'>
                  Home Depot
                </a>
              </div>
            </Box>
          </Columns.Column>
        </Columns>
      </Section>
    </Section>
  );
}

export default Registry;
