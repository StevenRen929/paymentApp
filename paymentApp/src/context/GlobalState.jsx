import React,{children, createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions:[{id:1,text:'flower',amount:-20,},
    {id:2,text:'salary',amount:300,},
    {id:3,text:'Book',amount:-10,},
    {id:4,text:'Camera',amount:150,
    }]
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = ({children})=>{
    //固定写法
    const[state,dispatch] = useReducer(AppReducer,initialState);

    //action
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }

    return(
        // global context provider 里面嵌套的东西会被直接提升到app.jsx
        //里面的function 所有都组件都可以用
        //react 里面查some context
        <GlobalContext.Provider 
        value={
            {
                transactions:state.transactions,
                deleteTransaction,
                addTransaction,
            }}
        >
       {children}
        </GlobalContext.Provider>
    );
};