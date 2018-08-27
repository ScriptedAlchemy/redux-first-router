export const createPrevEmpty = (): Prev => ({
  type: '',
  params: {},
  query: {},
  state: {},
  hash: '',
  basename: '',
  location: {
    url: '',
    pathname: '',
    search: '',
    key: '',
    scene: '',
    index: -1,
  },
})
