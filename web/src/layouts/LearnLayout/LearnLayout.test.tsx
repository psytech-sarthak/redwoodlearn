import { render } from '@redwoodjs/testing/web'

import LearnLayout from './LearnLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LearnLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LearnLayout />)
    }).not.toThrow()
  })
})
