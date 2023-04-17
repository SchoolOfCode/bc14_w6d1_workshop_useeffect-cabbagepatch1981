import React from 'react'
import {render} from '@testing-library/react'

import App from '../components/App'

test('renders app component', () => {
  const utils = render(<App />)
  const screen = utils

  // eslint-disable-next-line testing-library/no-node-access
  const mainElement = screen.container.querySelector('.App')
  expect(mainElement).toBeInTheDocument()
})

// TESTING PLAN (Tasks 1 -3)

// TASK 1
// (i) When the button is clicked, the id changes to a random number between 1 and 151 (both inclusive)
// (ii) id should be passed down as a prop to PokemonViewer

// TASK 2
// (i) PokemonViewer component should have state
// (ii) A fetch request is made to https://pokeapi.co/api/v2/pokemon/${id} (mock the response?)
// (iii) useEffect should only re-run when id changes

// TASK 3
// Data is rendered to the page
// Could check the following are rendered:
// name, image, ability, item, moves, sprites, stats etc
