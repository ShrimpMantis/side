// import React from 'react';
import styles from "./../styles/Header.module.css";
import Menu from "./menu";

const  PageHeader=() =>{
  return (
   <div className={styles.menuContainer}>
       <Menu/>
   </div>
  );
}

 export default PageHeader;