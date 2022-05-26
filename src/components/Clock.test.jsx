import React from 'react';
import {render} from '@testing-library/react';
import {Clock} from "./clock";

describe('Clock tests', () => {

  describe('Clock element', () => {
    it('It renders', () => {
      const {container} = render(<Clock/>)

      const clock = container.querySelector('.clock');

      expect(clock).toBeInTheDocument();
    })

    it('has correct default size', () => {
      const {container} = render(<Clock/>)

      const clock = container.querySelector('.clock');

      expect(clock).toHaveStyle('width: 200px');
      expect(clock).toHaveStyle('height: 200px');
    })

    it('has proper size when given size', () => {
      const size = 350;

      const {container} = render(<Clock size={size}/>);

      const time = container.querySelector('.clock');

      expect(time).toHaveAttribute('style', `width: ${size}px; height: ${size}px;`);
    });
  });

  describe('clock hands', () => {
    it('is rendered properly', () => {
      const {container} = render(<Clock/>);

      const face = container.querySelector('.center');

      expect(face).toBeInTheDocument();
    });

    it('has hour marks by default', () => {
      const {container} = render(<Clock/>);

      const hourMarks = container.querySelectorAll('.number');

      expect(hourMarks).toHaveLength(12);
    });

    it('has hour numbers rendered', () => {
      const { container } = render(<Clock renderNumbers />);

      const hourMarks = container.querySelectorAll('.number');

      hourMarks.forEach((hourMark, index) => {
        expect(hourMark).toHaveTextContent(index + 1);
      });
    });
  });
})
  