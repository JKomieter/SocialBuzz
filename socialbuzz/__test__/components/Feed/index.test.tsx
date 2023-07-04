import React from 'react';
import { render, screen } from '@testing-library/react';
import FeedMedia from '../../../app/components/media/FeedMedia';
import "@testing-library/jest-dom/extend-expect";


describe('FeedItem', () => {
    test('renders Image', () => {
        render(<FeedMedia video="" image=""/>);
        const video = screen.getByTestId('video');
        expect(video).not.toBeInTheDocument();
    });

    test('renders Video', () => {
        render(<FeedMedia video="video" image=""/>);
        const video = screen.getByTestId('video');
        expect(video).toBeInTheDocument();
    });
});