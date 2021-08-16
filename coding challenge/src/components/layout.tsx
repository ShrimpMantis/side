import React from 'react';
import { Route, Switch } from "react-router-dom";
import styles from "./../styles/Layout.module.css";
import AboutUs from './aboutus';
import Home from './home';


const  Layout=() =>{
   
 const routes=[
     {key:"home",component:Home},
     {key:"aboutUs",component:AboutUs},
    ];
 const routeValues= routes.map((route, index)=>{
        return (
            <Route path={`/${route.key}`} component={route.component} key={`route${index}`}></Route>
        );
 });

  return (
   <div className={styles.container}>
       <Switch>
          {routeValues}
       </Switch>
   </div>
  );
}

 export default Layout;