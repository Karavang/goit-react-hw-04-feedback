import React from 'react';
import { useState } from 'react';
import { Notification } from './Notification';
import Section from './Section';
import { Statistics } from './Statistics';

export default function MyClicker() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const handleButtonClick = type => {
    const newState = { ...feedback };

    newState[type] = feedback[type] + 1;
    return newState;
  };

  const pfb =
    feedback.good + feedback.neutral + feedback.bad > 0
      ? (
          (feedback.good / (feedback.good + feedback.neutral + feedback.bad)) *
          100
        ).toFixed(2)
      : 0;

  return (
    <div>
      <Section
        feedback={setFeedback}
        handleButtonClick={handleButtonClick}
        handleFeedback={handleFeedback}
      />
      <Notification
        message={'There is no feedback'}
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
      />
      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={pfb}
      />
    </div>
  );
}
