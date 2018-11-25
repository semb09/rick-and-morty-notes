import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as EditIcon } from '../assets/icons/edit.svg';

const CharacterCard = ({
  id, image, name, openEditHandler,
}) => (
  <div className="character-card">
    <div className="character-card__image-wrapper">
      <button onClick={openEditHandler} type="button" className="character-card__edit-btn">
        <EditIcon className="character-card__edit-btn__icon" />
      </button>
      <Link to={`/single/${id}`}>
        <img className="character-card__image" src={image} alt={name} />
      </Link>
      <div className="character-card__name-wrapper">
        <span className="character-card__name">
          {name}
        </span>
      </div>
    </div>
  </div>
);

CharacterCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  openEditHandler: PropTypes.func.isRequired,
};

export default CharacterCard;
