import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FeedItem from '../../../app/components/items/FeedItem';
import "@testing-library/jest-dom/extend-expect";
import Video from '../../../app/components/media/Video';
import FeedMedia from '../../../app/components/media/FeedMedia';
import FeedComment from '../../../app/components/comment/FeedComment';
import Post from '../../../app/user/components/Post';
import CenterIcons from '../../../app/user/components/CenterIcons';

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
    test("should display the CenterIcons component when the user hovers over the post", () => {
        render(<Post id="1" image="image" 
        video="" likeIds={[]} comments={[]} />);
        // hover over the post
        fireEvent.mouseEnter(screen.getByTestId("post"));
        // CenterIcons component should be Sdisplayed
        expect(<CenterIcons likeIds={[]} comments={[]}/>).toBeInTheDocument();
    });
});