
const initialState = {
    startValue: 0,  //значения в LS
    maxValue: 0,    // значения в LS
    count: 0,
    // max: 0,         // значение, задаваемое в Settings
    // start: 0,        // значение, задаваемое в Settings
}
type initialStateType = typeof initialState
export const counterReducer = (state: initialStateType = initialState, action: ActionsType):initialStateType => {
    switch (action.type) {
        case 'INC-VALUE':
            return {...state, count: state.count + 1}
        case 'SET-COUNTER':
            return {...state, count: action.count}
        case 'RESET-COUNTER':
            return {...state, count: state.startValue}
        case 'SET-MAX-VALUE' :
            return {...state, maxValue: action.maxValue}
        case 'SET-START-VALUE' :
            return {...state, startValue: action.startValue}
        default:
            return state

    }
}
type ActionsType = IncCounerValueType | SetMaxValueType | SetStartValueType | ResetCounterType  | SetCounterType
type IncCounerValueType = ReturnType<typeof incCounerValueAC>
type SetMaxValueType = ReturnType<typeof setMaxValueToLocalStorageAC>
type SetStartValueType = ReturnType<typeof setStartValueToLocalStorageAC>
type ResetCounterType = ReturnType<typeof resetCounterAC>

type SetCounterType = ReturnType<typeof setCounterAC>

export const incCounerValueAC = () => {
    return {
        type: 'INC-VALUE',
    } as const
}
export const setMaxValueToLocalStorageAC = (maxValue: number) => {
    return {
        type: 'SET-MAX-VALUE',
        maxValue
    } as const
}
export const setStartValueToLocalStorageAC = (startValue: number) => {
    return {
        type: 'SET-START-VALUE',
        startValue
    } as const
}
export const resetCounterAC = (startValue: number) => {
    return {
        type: 'RESET-COUNTER',
        startValue
    } as const
}
export const setCounterAC = (count: number) => {
    return {
        type: 'SET-COUNTER',
        count
    } as const
}
