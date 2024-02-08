
const initState = {
    themeId: 1,
}

export type ThemeStateType = typeof initState



export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type ChangeThemeIdAT = { type: string, id: number }
type ActionType = ChangeThemeIdAT

export const changeThemeId = (id: number): ChangeThemeIdAT => ({ type: 'SET_THEME_ID', id }) // fix any
