import React from 'react';
import propTypes from 'prop-types';

import { connect } from 'react-redux';

const Footer = ({ count }) => <p> {count} favorito(s) listado(s).</p>

Footer.propTypes = {
    count: propTypes.number.isRequired,
};

const mapStateToProps = state => ({
    count: state.favorites.length,
});

export default connect(mapStateToProps)(Footer);