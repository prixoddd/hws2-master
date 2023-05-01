import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort':

            const sortUp = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            const sortDown = [...state].sort((a, b) => a.name < b.name ? 1 : -1)
            return action.payload === 'up' ? sortUp : sortDown

        case 'check':
            return state.filter(a => a.age >= action.payload)

        default:
            return state
    }
}
