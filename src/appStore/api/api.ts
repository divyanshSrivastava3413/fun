import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api=createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
    endpoints:(builder)=>({
        getTodos:builder.query<any, void>({
            query:()=>'todos'
        }),
        loginUser:builder.mutation({
            query:(loginDetails)=>({
                url:"auth/login",
                method:"POST",
                body:{
                    username:loginDetails.name,
                    password:loginDetails.password,
                }
            })
        })
    })
})

export const {useGetTodosQuery, useLoginUserMutation}=api;