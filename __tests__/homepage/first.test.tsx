import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../../src/App';


test('loads and displays greeting', async () => {
	render(<App />)

	fireEvent.click(screen.getByText('Click Here!'))

	await waitFor(() => screen.getByText('Click Here Again'))

});