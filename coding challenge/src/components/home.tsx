import { Property } from 'models';
import { massageData } from 'operators';
import React, { useEffect, useState } from 'react';
import { cachePropertyData, getCacheData, getData } from 'services';
import styles from "./../styles/Home.module.css";
import PropertyGrid from './propertyGrid';
import SideNavigation from './sideNavigation';

const  Home= () =>{
    const [homeData, setHomeData]=useState<any>([]);
    const [filteredListings, setListings]=useState<Array<Property>>();

 useEffect(()=>{
     const fetchData= async ()=>{
         const propertyData= getCacheData();
         if(propertyData==null){
            let result= await getData();
            cachePropertyData(result);
            let properResult= massageData(result);
            setDataInPlaces(properResult);
         }else{
            let properResult= massageData(propertyData);
            setDataInPlaces(properResult);
         }
     }

     fetchData();
 },[]);

 const setDataInPlaces=(properResult:Array<Property>)=>{
    setHomeData(properResult);
    var filteredData= properResult.slice(0,3);
    setListings(filteredData);
 }

  return (
      <>
        <div className={styles.container}>
            <PropertyGrid properties={homeData}/>
        </div>
        <div className={styles.sideNav}>
            <SideNavigation listings ={filteredListings}/>
        </div>
     </>
  );
}

 export default Home;