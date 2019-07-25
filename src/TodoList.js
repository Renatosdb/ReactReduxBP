import React from 'react';
import propTypes from 'prop-types';

import { connect } from 'react-redux';

const TodoList = (props) => (
    <ul>
        { props.todos.map(e => <li key={e.id}>{e.text}</li>) }
    </ul>
);

TodoList.propTypes = {
    todos: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        text: propTypes.string,
    })).isRequired,
};


const mapStateToProps = state => ({
    todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);