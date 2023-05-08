import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { LabelWrapper, Input, LabelDescr, LabelSpan } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <LabelDescr>
    <LabelWrapper>
      <BsSearch size="16" />
      <LabelSpan>Find contacts by name</LabelSpan>
    </LabelWrapper>
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search..."
    />
  </LabelDescr>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
