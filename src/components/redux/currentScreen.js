const redux = require("redux")

export function goHome(){
    return {
        type:"HOME"
    }
}

export function goProjects(){
    return{
        type:"PROJECTS"
    }
}

export function goContactMe(){
    return{
        type:"CONTACT_ME"
    }
}

const initialState={
    screen:"HOME"
}
function reducer(state = initialState, action){
    switch(action.type){
        case "HOME":
            return {
                ...state,
                screen:"HOME"
            }
        case "PROJECTS":
            return {
                ...state,
                screen:"PROJECTS"
            }
        case "CONTACT_ME":
            return{
                ...state,
                screen:"CONTACT_ME"
            }
        default:
            return{
                state,
                screen:"HOME"
            }
    }
}

const store = redux.createStore(reducer)
//store.subscribe(()=>console.log(store.getState()))

export default store