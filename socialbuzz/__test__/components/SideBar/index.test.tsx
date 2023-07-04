import React from 'react';
import { render, screen } from '@testing-library/react';
import SideBarItems from '../../../app/components/items/SideBarItems';
import "@testing-library/jest-dom/extend-expect";
import { FiSearch } from 'react-icons/fi';


describe('SideBar', () => {
    it('renders SideBar component', () => {
        render(<SideBarItems name={'search'} icon={FiSearch} href={'search'} showFooter={false} />);
        expect(<FiSearch />).toBeInTheDocument();
    });
});