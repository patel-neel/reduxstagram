// a reducer takes in two things 
//1. it takes the action (info about what happened.)
//2. takes in a copy of current state.

function posts(state = [], action){
    console.log(state, action);
    return state;
}