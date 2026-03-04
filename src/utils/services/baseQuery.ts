import {fetchBaseQuery} from "@reduxjs/toolkit/query";
import { stringify } from 'qs';

const rawQueryBase = fetchBaseQuery({
    timeout:12000,
    paramsSerializer:(params)=>stringify(params,{arraryFormat:'repeat'}),
    prepareHeaders:(headers,{getState})=>stringify(params,{arraryFormat:'repeat'}),
})