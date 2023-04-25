import React from 'react';
import { useState } from 'react';
import { Notification } from './Notification';
import Section from './Section';
import { Statistics } from './Statistics';

export default function MyClicker() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = type => {
    this.setState(prevState => {
      const newState = { ...prevState };
      newState[type] = prevState[type] + 1;
      return newState;
    });
  };

  const pfb =
    good + neutral + bad > 0
      ? ((good / (good + neutral + bad)) * 100).toFixed(2)
      : 0;

  return (
    <div>
      <Section
        setGood={setGood}
        setBad={setBad}
        setNeutral={setNeutral}
        handleButtonClick={handleButtonClick}
      />
      <Notification
        message={'There is no feedback'}
        good={good}
        neutral={neutral}
        bad={bad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} total={pfb} />
    </div>
  );
}
