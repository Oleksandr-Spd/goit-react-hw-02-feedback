import React from 'react';
import { OptionBtn, OptionItem, OptionList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionList>
    {options.map(option => (
      <OptionItem key={option}>
        <OptionBtn
          variant="outline-success"
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </OptionBtn>
      </OptionItem>
    ))}
  </OptionList>
);
