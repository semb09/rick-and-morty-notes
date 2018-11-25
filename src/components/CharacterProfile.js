import React from 'react';
import PropTypes from 'prop-types';

const CharacterProfile = ({ character, notes }) => (
  <div className="profile-wrapper">
    <h1 className="profile__header__title">{character.name}</h1>
    <div className="profile">
      <div className="profile__left">
        <img className="profile__image" src={character.image} alt={character.name} />
      </div>

      <div className="profile__right">
        <div className="profile__right__info">
          <span className="profile__right__info__title">Stats</span>
          <ul className="profile__right__info__list">
            <li>
              <b>Origin: </b>
              {character.origin.name}
            </li>
            <li>
              <b>Location: </b>
              {character.location.name}
            </li>
            <li>
              <b>Status: </b>
              {character.status}
            </li>
            <li>
              <b>Gender: </b>
              {character.gender}
            </li>
          </ul>
        </div>
        <div className="profile__right__info profile__right__info--notes">
          <span className="profile__right__info__title">Notes</span>
          {notes || <i>No Notes</i>}
        </div>
      </div>
    </div>
  </div>
);

CharacterProfile.propTypes = {
  notes: PropTypes.string.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default CharacterProfile;
