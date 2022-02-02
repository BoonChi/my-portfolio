import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import AboutMe from '../index'

describe('About me', () => {
  it('renders About me page unchanged', () => {
    const { container } = render(<AboutMe />)
    expect(container).toMatchSnapshot()
  })

  it('renders and reads H1 text', () => {
    const wrapper = shallow(<AboutMe />)

    const heading = <h1>About Chi</h1>

    expect(wrapper.contains(heading)).toEqual(true)
  })
})
