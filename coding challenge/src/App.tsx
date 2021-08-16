/**
 * Remove this content and start here
 */

import Layout from 'components/layout';
import PageHeader from 'components/pageHeader';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import heartFill from './assets/heart-fill.svg';
// import heartStroke from './assets/heart-stroke.svg';
// import styles from "./styles/App.module.css";

const  App=() =>{
  return (
    <BrowserRouter>
        <PageHeader/>
        <Layout/>
    </BrowserRouter>
    
  );
}

 export default App;
