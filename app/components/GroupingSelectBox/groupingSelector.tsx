// GroupingSelectBox.tsx
import React, { ChangeEvent, FunctionComponent } from 'react';
import { Container } from './Container';
import { GroupingSelectBoxProps } from '@/types/interfaces';

const GroupingSelectBox: FunctionComponent<GroupingSelectBoxProps> = ({ options }) => {

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  };

  return (
    <Container>
      <select
        className="rounded p-1 text-white bg-gray-800 focus:outline-none hover:cursor-pointer"
        data-testid="groupings"
        name="groupings"
        onChange={handleChange}
        defaultValue={0}
      >
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            Group {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default GroupingSelectBox;
