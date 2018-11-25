import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getCharacters, getNextCharacters, dispatchNotification } from '../actions';

import ModalPortal from './ModalPortal';
import LoadingSpinner from '../components/LoadingSpinner';
import Overview from '../components/Overview';
import EditModal from '../components/EditModal';

class OverviewContainer extends React.Component {
  state = {
    showModal: false,
    note: {
      id: null,
      name: null,
    },
    value: '',
  }

  componentDidMount() {
    const { actions, characters } = this.props;
    if (Object.keys(characters.results).length < 20) {
      actions.getCharacters();
    }
  }

  getMoreCharacters = () => {
    const { actions } = this.props;
    actions.getNextCharacters();
  }

  handleOpenEdit = (id, name) => {
    const note = localStorage.getItem(`note-${id}`);
    this.setState({
      note: {
        id,
        name,
      },
      showModal: true,
      value: note || '',
    });
  }

  handleOnChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  }

  handleCloseEdit = () => {
    this.setState({ showModal: false });
  }

  handleSubmit = () => {
    const { actions } = this.props;
    const { note, value } = this.state;
    localStorage.setItem(`note-${note.id}`, value.trim());
    this.setState({ showModal: false }, () => (
      actions.dispatchNotification('Successfully saved note.')
    ));
  }

  render() {
    const { showModal, note, value } = this.state;
    const { characters } = this.props;

    return (
      <React.Fragment>
        <ModalPortal
          showModal={showModal}
        >
          <EditModal
            note={note}
            value={value}
            changeHandler={this.handleOnChange}
            closeModal={this.handleCloseEdit}
            character={null}
            submitHandler={this.handleSubmit}
            submitDisabled={!value.trim().length}
          />
        </ModalPortal>
        {characters.loading
          && (
            <LoadingSpinner
              showSpinner={characters.loading}
            />
          )
        }
        <Overview
          openEditHandler={this.handleOpenEdit}
          characters={characters}
          getMoreCharacters={this.getMoreCharacters}
        />
      </React.Fragment>
    );
  }
}

OverviewContainer.propTypes = {
  actions: PropTypes.objectOf(
    PropTypes.func,
  ).isRequired,
  characters: PropTypes.shape({
    results: PropTypes.object,
    loading: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  characters: state.characters,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    getCharacters,
    getNextCharacters,
    dispatchNotification,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
