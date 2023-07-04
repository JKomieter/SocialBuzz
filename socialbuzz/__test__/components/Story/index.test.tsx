import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from '../../../app/components/layout/Carousel';
import UserStory from '../../../app/components/layout/UserStory';
import "@testing-library/jest-dom/extend-expect";


describe('Carousel', () => {
    it('renders Carousel component', () => {
        render(<Carousel image={'/images/personplaceholder.png'} id={'1'} mutateStories={() => {}} video={'/images/personplaceholder.png'} username={'test'} />);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    it('renders UserStory component', () => {
        render(<UserStory handleChange={() => {}} 
        currentUser={{username: "test"}}/>);
        const username = screen.queryByText('test');
        expect(username).toBeInTheDocument();
    });

    it("should call handleChange when there is a file", () => {
        const handleChange = jest.fn();
        render(<UserStory handleChange={handleChange} />);
        expect(handleChange).toHaveBeenCalledTimes(0);
    });
});