import querySerializer from 'query-string'

import { setupAll } from '../__test-helpers__/setup'
import { urlToAction } from '../src/utils'


it('dispatched as action.query', async () => {
  const { store } = await setupAll('/third', { querySerializer })
  const query = { foo: 'bar', baz: 69 }

  await store.dispatch({ type: 'FIRST', query })
  await store.dispatch({ type: 'THIRD', query })

  const state = store.getState() /*? $.location */
  expect(state).toMatchSnapshot()
})

it('history.push("/path?search=foo")', async () => {
  const { store, history } = await setupAll('/third', { querySerializer })

  await history.push('/first?foo=bar&baz=69')
  await history.push('/third?foo=bar&baz=69')

  const state = store.getState() /*? $.location */
  expect(state).toMatchSnapshot()
})

it('currentPathName changes, but pathname stays the same (only query changes)', async () => {
  const { store, history } = await setupAll('/third', { querySerializer })

  await history.push('/first?foo=bar&baz=69')
  await history.push('/first?foo=car&baz=70')

  const state = store.getState() /*? $.location */
  expect(state).toMatchSnapshot()
})

it('generated from urlToAction within <Link />', async () => {
  const { store, history, routesMap } = await setupAll('/third', { querySerializer })

  let action = urlToAction(
    { url: '/first?foo=bar&baz=69' },
    routesMap,
    '',
    querySerializer
  ) /*? */
  await store.dispatch(action)

  action = urlToAction(
    { url: '/first?foo=car&baz=70#bla' },
    routesMap,
    '',
    querySerializer
  ) /*? */
  await store.dispatch(action)

  const state = store.getState() /*? $.location */
  expect(state).toMatchSnapshot()
})
