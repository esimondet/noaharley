import React from 'react';
import { Modal, Media, Image } from 'react-bulma-components';

const Spotlight = ({ onClose, currentPhoto }) => {
  const { title } = currentPhoto;

  return (
    <Modal>
      <Modal.Content>
        <Modal.Card>
          <Modal.Header>
            <button
              onClick={onClose}
              className='delete'
              aria-label='close'
            ></button>
          </Modal.Header>
          <Media>
            <Image
              alt={title}
              src={require(`../../assets/gallery/${title}.jpeg`)}
            />
          </Media>
        </Modal.Card>
      </Modal.Content>
    </Modal>
  );
};

export default Spotlight;
