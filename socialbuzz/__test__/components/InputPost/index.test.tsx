import React from 'react';
import { render, screen } from '@testing-library/react';
import InputPost from '../../../app/components/modals/PopUpModals/PostModal/InputPost';
import "@testing-library/jest-dom/extend-expect";


describe('InputPost', () => {
    it('should render the InputPost text', () => {
        render(<InputPost files={[]} setFiles={function (value: React.SetStateAction<File[]>): void {
            throw new Error('Function not implemented.');
        } } />);
        const text = screen.getByText(/Drag photos or videos here/i);
        expect(text).toBeInTheDocument();
    });

    it("should render the image icon", () => {
        render(<InputPost files={[]} setFiles={function (value: React.SetStateAction<File[]>): void {
            throw new Error('Function not implemented.');
        } } />);
        const imageIcon = screen.getByTestId("image-icon");
        expect(imageIcon).toBeInTheDocument();
    });

    it("should not render image when files are not present", () => {
        render(<InputPost files={[]} 
            setFiles={function (value: React.SetStateAction<File[]>): void {
            throw new Error('Function not implemented.');
        } } />);

        const media = screen.queryByTestId("media");

        expect(media).not.toBeInTheDocument();
    });
});