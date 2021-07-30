import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Book from './Book';

describe('book component', () => {
  afterEach(() => cleanup());
  it('renders books', () => {
    const { asFragment } = render(
      <Book
        name="harry potter"
        author="evil woman"
        src="harry.jpg"
        provided={{ draggableProps: 'hello', dragHandleProps: 'hello' }}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
