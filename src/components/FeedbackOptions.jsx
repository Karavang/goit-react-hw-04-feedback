import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <ul className="flexator">
      <li>
        <button
          className="clickable"
          onClick={() => {
            handleFeedback('good');
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className="clickable"
          onClick={() => {
            handleFeedback('neutral');
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className="clickable"
          onClick={() => {
            handleFeedback('bad');
          }}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  setGood: PropTypes.func,
  setNeutral: PropTypes.func,
  setBad: PropTypes.func,
};
