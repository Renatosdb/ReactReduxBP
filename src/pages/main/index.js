import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FavoriteActions from '../../store/actions/favorites';

class Main extends Component {
    static propTypes = {
        addFavorite: propTypes.func.isRequired,
        favorites: propTypes.arrayOf(propTypes.shape({
            id: propTypes.number,
            name: propTypes.string,
            description: propTypes.string,
            url: propTypes.string,
        })).isRequired,
    };

    state ={
        repositoryInput:'',
    };

    handleAddRepository = (event) => {
        event.preventDefault();

        this.props.addFavorite();
    }

    render() {
        return(
            <Fragment>
                <form onSubmit={this.handleAddRepository}>
                    <input
                        placeholder="usuario/repo"
                        value={this.state.repositoryInput}
                        onChange={e => this.setState({ repositoryInput: e.target.value })}
                    />
                    <button type="submit">Add Repo</button>
                </form>

                <ul>
                    {this.props.favorites.map(favorite => (
                        <li key={favorite.id}>
                            <p>
                                <strong>{favorite.name}</strong> ({favorite.description})
                            </p>
                            <a href={favorite.url}>Acessar Git</a>
                        </li>
                    )) }
                </ul>
            </Fragment>
        )
    }
};

const mapStateToProps = state => ({
    favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);