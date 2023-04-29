import PropTypes from 'prop-types';
import { FeedbackOptions } from './FeedbackOptions';

export default function Section({ handleFeedback }) {
  return (
    <div>
      <div className="title">Please, leave feedback</div>
      <FeedbackOptions handleFeedback={handleFeedback} />
    </div>
  );
}

Section.propTypes = {
  setGood: PropTypes.func,
  setNeutral: PropTypes.func,
  setBad: PropTypes.func,
  handleButtonClick: PropTypes.func,
};
