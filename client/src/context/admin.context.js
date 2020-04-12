import { createContext } from "react";
function noop(){}
export const AdminContext=createContext({
    userId:null, 
    isAutenticated:false,
    userDetails:{},
    styles:[],
    techniques:[]
})