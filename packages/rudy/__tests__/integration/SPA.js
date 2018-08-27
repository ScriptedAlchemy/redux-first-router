import createTest from '../../__helpers__/createTest'

jest.mock('../../src/utils/isHydrate', () => () => false)
jest.mock('../../src/utils/isServer', () => () => false)

createTest('callbacks called on load if SPA', {
  FIRST: {
    path: '/first',
    beforeEnter() {},
    thunk: ({ dispatch }) => dispatch({ type: 'REDIRECTED' }),
  },
})
