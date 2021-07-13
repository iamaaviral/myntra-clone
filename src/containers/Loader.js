import React from 'react';
import PropTypes from 'prop-types';

let Loader = (props) => {
    return (
        <h1>{props.page} is Loading...</h1>
    )
}
Loader.propTypes = {
    page: PropTypes.string
}

export default Loader