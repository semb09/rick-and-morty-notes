import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getSingleCharacter } from '../actions';

import CharacterProfile from '../components/CharacterProfile';
import LoadingSpinner from '../components/LoadingSpinner';

class SingleContainer extends React.Component {
  state = {
    notes: '',
  }

  componentDidMount() {
    const { match, characters, actions } = this.props;
    const { params } = match;
    const { id } = params;
    const character = characters[id];
    if (!character) {
      actions.getSingleCharacter(id);
    }
    const notes = localStorage.getItem(`note-${id}`);
    this.setState({ notes: notes || '' });
  }

  render() {
    const { notes } = this.state;
    const { match, characters, loading } = this.props;
    const { params } = match;
    const { id } = params;

    const character = characters[id];

    return (
      <React.Fragment>
        <LoadingSpinner showSpinner={loading} />
        <TransitionGroup>
          {character
            && (
              <CSSTransition
                classNames="fade"
                timeout={800}
                appear
              >
                <CharacterProfile
                  character={character}
                  notes={notes}
                />
              </CSSTransition>
            )
          }
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

SingleContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  characters: PropTypes.objectOf(
    PropTypes.object,
  ).isRequired,
  actions: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  characters: state.characters.results,
  loading: state.characters.loadingSingle,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getSingleCharacter,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleContainer);
