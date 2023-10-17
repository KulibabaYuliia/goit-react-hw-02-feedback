import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbankAmountHandler = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          padding: '20px',
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.feedbankAmountHandler}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section
          title={
            this.countTotalFeedback() === 0
              ? 'There is no feedback'
              : 'Statistics'
          }
        >
          <Statistics
            goodCount={good}
            neutralCount={neutral}
            badCount={bad}
            total={this.countTotalFeedback}
            positivePerc={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
    );
  }
}
