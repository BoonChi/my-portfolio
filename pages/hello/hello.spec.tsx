import React from 'react'
import { shallow } from 'enzyme'

import Hello from '.'

it('renders the heading', () => {
  const result = shallow(<Hello name={'HumChi'} />).contains(<h1>Hi</h1>)
  expect(result).toBeTruthy()
})
