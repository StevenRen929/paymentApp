// Adding a reducer to a component
// writing a reducer function
// avoiding recreacting the initail state

// import { useReducer } from 'react';

// function reducer(state, action) {
//     // ...
//   }
  
//   function MyComponent() {
//     const [state, dispatch] = useReducer(reducer, { age: 42 });
//通过reducer function 里面的action 来改变state 这里state是{age：42}
export default (state,action) => {
    switch(action.type){
        case "DELETE_TRANSACTION":
           return{
            ...state,
            transactions:state.transactions.filter(
                //就是点击的时候action payload 会把id传过来
                (transactions)=>transactions.id!==action.payload
                //return 之后就是剩下的不等于payload id 的transaction
            )
           }
        case "ADD_TRANSACTION":
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
    }
}



