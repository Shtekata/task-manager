import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Aside from './Aside';

describe('Aside component', () => {
    it('Should add class active when is clicked', async () => {
        
        const labels = [['home', 'Home'], ['tasks/add', 'Add Task'], ['old-tasks', 'Old Tasks'],
        ['about', 'About'], ['musical', 'Relax'], ['contact-us', 'Contact Us'], ['ala-bala', '404']];
        
        const onAsideItemClick = () => { };
        
        render(
            <BrowserRouter>
                <Aside labels={labels} onAsideItemClick={onAsideItemClick} />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText('Relax'));
        
        await waitFor(() => screen.getByText('Relax'));

        expect(screen.getByText('Relax').getAttribute('class')).toContain('active');
    })

   it('Should change background color', async () => {
        
        const labels = [['home', 'Home'], ['tasks/add', 'Add Task'], ['old-tasks', 'Old Tasks'],
        ['about', 'About'], ['musical', 'Relax'], ['contact-us', 'Contact Us'], ['ala-bala', '404']];
        
        const onAsideItemClick = () => { };
        
        render(
            <BrowserRouter>
                <Aside labels={labels} onAsideItemClick={onAsideItemClick} />
            </BrowserRouter>
        );

        fireEvent.click(screen.getByText('Relax'));
        
        await waitFor(() => screen.getByText('Relax'));

        expect(window.getComputedStyle(screen.getByText('Relax'))['background-color']).toEqual('rgb(75, 97, 161)');
    })
})