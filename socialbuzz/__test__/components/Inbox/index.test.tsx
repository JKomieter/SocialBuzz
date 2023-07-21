import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Nav from '../../../app/inbox/Nav';
import UserMessage from '../../../app/inbox/UserMessage';
import Conversation from '../../../app/inbox/Conversation';


jest.mock("talkjs", () => ({
    ready: new Promise<void>((resolve) => resolve()),
    default: {
        User: jest.fn(),
        Session: jest.fn(),
        Chatbox: jest.fn(),
        oneOnOneId: jest.fn(),
    }
}))

describe("INBOX", () => {
    test("renders current user's name on Nav component", () => {
        render(<Nav username="testuser" />)
        const name = screen.getByText(/testuser/i);
        expect(name).toBeInTheDocument();
    });

    test("should call handleClick when user is clicked in UserMessage component", () => {
        const setOtherEmail = jest.fn();
        const setOtherId = jest.fn();
        const setOtherName = jest.fn();
        const setOtherPhotoUrl = jest.fn();

        const id = 'user_id';
        const profileImage = '/user_profile_image.jpg';
        const username = 'testuser';
        const email = 'testuser@example.com';
        render(<UserMessage
                id={id}
                profileImage={profileImage}
                username={username}
                email={email}
                setOtherEmail={setOtherEmail}
                setOtherId={setOtherId}
                setOtherName={setOtherName}
                setOtherPhotoUrl={setOtherPhotoUrl}
            />);
        const userMessageDiv = screen.getByTestId('div');

        fireEvent.click(userMessageDiv);

        // Check that handleClick has been called once
        expect(setOtherId).toHaveBeenCalledTimes(1);
        expect(setOtherName).toHaveBeenCalledTimes(1);
        expect(setOtherEmail).toHaveBeenCalledTimes(1);
        expect(setOtherPhotoUrl).toHaveBeenCalledTimes(1);

        // Check that handleClick has been called with the correct arguments
        expect(setOtherId).toHaveBeenCalledWith(id);
        expect(setOtherName).toHaveBeenCalledWith(username);
        expect(setOtherEmail).toHaveBeenCalledWith(email);
        expect(setOtherPhotoUrl).toHaveBeenCalledWith(profileImage);
    });

    test("should render InboxUsers component", () => {
        const props = {
            currentUserId: 'user_id',
            currentUserEmail: 'user_email',
            currentUserUsername: 'user_username',
            currentUserPhotoUrl: '/user_profile_image.jpg',
            otherUserEmail: 'other_user_email',
            otherUserId: 'other_user_id',
            otherUserName: 'other_user_name',
            otherUserPhotoUrl: '/other_user_profile_image.jpg',
        }

        render(<Conversation {...props} />);

        const chatBozDiv = screen.getByTestId('chatbox');
        expect(chatBozDiv).toBeInTheDocument();
    });
});
