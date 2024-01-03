import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const stateCopy = state.map(user => user);
            if (action.payload === 'up') {
                stateCopy.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    if (a.name < b.name) return -1;
                    return 0;
                })
            } else {
                stateCopy.sort((a, b) => {
                    if (a.name < b.name) return 1;
                    if (a.name > b.name) return -1;
                    return 0;
                })
            }
                // by name

            return stateCopy // need to fix
        }
        case 'check': {

            return state.filter(user => user.age >= 18) // need to fix
        }
        default:
            return state
    }
}
