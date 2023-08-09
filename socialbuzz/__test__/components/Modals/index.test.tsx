import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import SearchModal from '../../../components/modals/MotionModals/notifications/SearchModal/SearchModal';

describe('SearchModal', () => {

    it('displays a search input field', () => {
        // Mock the getAllUsers function to return a list of users
        jest.mock('../../../app/actions/getAllUsers', () => ({
            __esModule: true,
            default: () => ({
                data: [
                {
                    id: '1',
                    username: 'john doe',
                    profileImage: 'profile.jpg',
                    followersId: [],
                    firstName: 'John',
                    lastName: 'Doe',
                },
                // Add more users as needed...
                ],
                isLoading: false,
            }),
        }));
    
        // Render the component
        render(<SearchModal />);
    
        // Find the search input field
        const searchInput = screen.getByPlaceholderText('Search');
    
        // Custom text matcher function for case-insensitive search
        expect(searchInput).toBeDefined();
    });
});
