import React from 'react';
import { Link, withRouter} from "react-router-dom";
import styles from "./../styles/Menu.module.css";

const  Menu=() =>{
const menuList=[
    {path:"/Home", text:"Home"},
    {path:"/AboutUs",text:"AboutUs"}
];
const menusComponent= menuList.map((menu, index)=>{
    
    return <div className={styles.menuItem} key={index}>
            <Link to={menu.path}>{menu.text}</Link>
        </div>
});
  return (
             <div className={styles.menuContainer}>
                    {menusComponent}
            </div>
  );
}

 export default withRouter(Menu);