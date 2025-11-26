import { type RouteObject } from 'react-router-dom'
import { PublicRouter } from './public'
export const route=():RouteObject[]=>
{
    return[
        ...PublicRouter
    ]
}