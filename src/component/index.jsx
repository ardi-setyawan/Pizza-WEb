import React from 'react'
import {Route,Switch} from 'react-router-dom'
 
import Main from './component/Main';
import Beli from './component/Beli';


const Index = () => (
    <Switch>
        <Route exact path="/" Component={Main}/>
        <Route path="/beli" Component={Beli}/>
    </Switch>    
)

export default Index;