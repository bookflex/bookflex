import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { string } = PropTypes;

const Tab = props =>
  <div className="tab">
    <Link to={props.link}>{props.name}</Link>
  </div>
;

Tab.propTypes = {
  link: string.isRequired,
  name: string.isRequired,
};

export default Tab;
