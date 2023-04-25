import PropTypes from 'prop-types';
import { FeedbackOptions } from './FeedbackOptions';

export default function Section({
  setGood,
  setNeutral,
  setBad,
  handleButtonClick,
}) {
  return (
    <div>
      <div className="title">Please, leave feedback</div>
      <FeedbackOptions
        setGood={setGood}
        setBad={setBad}
        setNeutral={setNeutral}
        handleButtonClick={handleButtonClick}
      />
    </div>
  );
}

Section.propTypes = {
  setGood: PropTypes.func,
  setNeutral: PropTypes.func,
  setBad: PropTypes.func,
  handleButtonClick: PropTypes.func,
};
