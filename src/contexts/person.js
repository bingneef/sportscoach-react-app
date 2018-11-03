import createContext from 'immer-wieder'
const { Provider, hoc } = createContext((setState, getState) => ({
  // Everything in here is your state
  bands: {
    0: { name: 'Flipper' },
    1: { name: 'Melt Banana' },
  },
  ids: [0, 1],
  // Including actions, which you can wrap and nest, makes it easier to access them later ...
  someActions: {
    // Actions do not have to mutate state at all, use getState to access current state
    cacheState: id => getState(state => fetch(`/backend?cache=${state.stringify()}`)),
    // Actions can be async naturally
    async fetchState() {
      try {
        const res = await fetch(`/backend?state`)
        setState(await res.json())
      } catch(error) {
        setState({ error })
      }
    },
    // Otherwise setState behaves like always
    removeAll: () => {
      setState({ bands: {}, ids: [] })
    },
    // With the distinction that you mutate drafts, thanks to immer
    changeName: (id, name) =>
      setState(state => {
        // You are allowed to mutate state in here ...
        state.bands[id].name = name
        // Or return a reduced shallow clone of state like always
        // return { ...state, users: { ...state.users, [id]: { ...state.users[id], name } } }
      }),
  },
}))

export {
  Provider,
  hoc,
}
