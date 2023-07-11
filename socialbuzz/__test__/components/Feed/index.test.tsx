import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FeedItem from '../../../app/components/items/FeedItem';
import "@testing-library/jest-dom/extend-expect";
import Video from '../../../app/components/media/Video';
import FeedMedia from '../../../app/components/media/FeedMedia';
import FeedComment from '../../../app/components/comment/FeedComment';


describe('FeedItem', () => {
    test('renders Image', () => {
        render(<FeedMedia video="" image=""/>);
        const video = screen.getByTestId('video');
        expect(video).not.toBeInTheDocument();
    });

    test('renders Video', () => {
        render(<FeedMedia video="video" />);
        expect(<Video video='video' />).toBeInTheDocument();
    });

    test('show Post button when there is text entered', () => {
        render (<FeedComment comment=''
        handleSubmit={() =>{}}
        setComment={(e) => {}} />)
        const input = screen.getByPlaceholderText('Add a comment...');
        // input some text
        fireEvent.change(input, { target: { value: 'test' } });
        // check if the button is visible
        const post = screen.getByRole('span')
        expect(input).toBeInTheDocument();
        expect(post).toBeInTheDocument();
    });
});