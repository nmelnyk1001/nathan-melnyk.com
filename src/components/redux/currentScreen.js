const redux = require("redux")

export function goHome(){
    return {
        type:"Home"
    }
}

export function goProjects(){
    return{
        type:"Projects"
    }
}

export function goContactMe(){
    return{
        type:"Contact_me"
    }
}

const initialState={
    screen:"Home"
}
function reducer(state = initialState, action){
    switch(action.type){
        case "Home":
            return {
                ...state,
                screen:"Home"
            }
        case "Projects":
            return {
                ...state,
                screen:"Projects"
            }
        case "Contact_me":
            return{
                ...state,
                screen:"Contact_me"
            }
        default:
            return{
                state,
                screen:"Home"
            }
    }
}

const store = redux.createStore(reducer)

export default store