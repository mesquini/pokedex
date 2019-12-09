import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Dashboard from './pages/main/Index.js'

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component = {Dashboard} />
        </BrowserRouter>
    )
}