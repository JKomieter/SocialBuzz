import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FeedItem from '../../../app/components/items/FeedItem';
import "@testing-library/jest-dom/extend-expect";
import Video from '../../../app/components/media/Video';
import FeedMedia from '../../../app/components/media/FeedMedia';
import FeedComment from '../../../app/components/comment/FeedComment';
import Post from '../../../app/user/components/Post';
import CenterIcons from '../../../app/user/components/CenterIcons';
import Image from 'next/image';

describe('FeedItem', () => {
    test('renders Image', () => {
        render(<FeedMedia video="" image="https://images.app.goo.gl/f6Xmqbv2fyqW1pvX9"/>);
        const image = <Image alt='' src="https://images.app.goo.gl/f6Xmqbv2fyqW1pvX9" width={100} height={100}/>
        expect(image).not.toBeInTheDocument();
    });
});