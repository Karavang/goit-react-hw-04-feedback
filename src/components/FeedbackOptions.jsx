import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ setGood, setNeutral, setBad }) => {
  const abobaGood = () => {
    setGood(prevState => prevState + 1);
  };
  const abobaNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };
  const abobaBad = () => {
    setBad(prevState => prevState + 1);
  };
  return (
    <ul className="flexator">
      <li>
        <button className="clickable" onClick={abobaGood}>
          Good
        </button>
      </li>
      <li>
        <button className="clickable" onClick={abobaNeutral}>
          Neutral
        </button>
      </li>
      <li>
        <button className="clickable" onClick={abobaBad}>
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
