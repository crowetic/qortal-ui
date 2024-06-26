import { store } from './store'
import { saveStateToLocalStorage } from './localStorageHelpers'

const keys = ['config', 'user']
const oldReducers = {}
const oldState = store.getState()

for (const key of keys) {
	oldReducers[key] = oldState[key]
}

store.subscribe(() => {
	const newState = store.getState()

	keys.forEach(key => {
		if (newState[key] !== oldState[key]) {
			saveStateToLocalStorage(key, store.getState()[key])
		}
	})
})