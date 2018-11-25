import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CharacterCard from './CharacterCard';
import Button from './Button';

const Overview = ({
  characters, getMoreCharacters, openEditHandler,
}) => (
  <React.Fragment>
    <TransitionGroup className="overview-wrapper">
      {!characters.loading && Object.keys(characters.results).map(key => (
        <CSSTransition
          key={key}
          classNames="fade-slow"
          timeout={800}
          exit={false}
        >
          <CharacterCard
            openEditHandler={() => (
              openEditHandler(characters.results[key].id, characters.results[key].name)
            )}
            image={characters.results[key].image}
            name={characters.results[key].name}
            id={characters.results[key].id}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
    {!characters.loading && characters.info.next
      && (
        <Button
          onClick={getMoreCharacters}
          wrapperClass="overview__load-more"
          loading={characters.loadingNext}
          className="overview__load-more-btn"
        >
          Load More
        </Button>
      )
    }
  </React.Fragment>
);

Overview.propTypes = {
  openEditHandler: PropTypes.func.isRequired,
  getMoreCharacters: PropTypes.func.isRequired,
  characters: PropTypes.shape({
    loadingNext: PropTypes.bool,
    results: PropTypes.object,
  }).isRequired,
};

export default Overview;
