import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Heading, Card, Section, Box } from 'react-bulma-components';
import Spotlight from '../Spotlight';

function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [photos] = useState([
    {
      title: 'gallery1',
    },
    {
      title: 'gallery2',
    },
    {
      title: 'gallery3',
    },
    {
      title: 'gallery4',
    },
    {
      title: 'gallery5',
    },
  ]);

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (photo) => {
    setCurrentPhoto({ ...photo });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Section>
      <Heading style={{ textAlign: 'center' }}>
        <Box>
          <h1>Gallery</h1>
        </Box>
      </Heading>

      <div>
        {isModalOpen && (
          <Spotlight currentPhoto={currentPhoto} onClose={toggleModal} />
        )}
        <div>
          {photos.map((photo) => (
            <Box>
              <img
                src={require(`../../assets/gallery/${photo.title}.jpeg`)}
                alt={photo.title}
              />
            </Box>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Gallery;
