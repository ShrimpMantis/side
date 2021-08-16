import { Property } from 'models';
import { Bath } from 'models/bath';
import { Measurements } from 'models/measurementEnum';
import { useEffect, useState } from 'react';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import styles from "./../styles/PropertyCard.module.css";
import heartFill from '../assets/heart-fill.svg';
import heartEmpty from '../assets/heart-stroke.svg';

const  PropertyCard = (props:{property:Property,  isFavoriteHandler:(id:Property)=>void }) =>{

    let totalBath=0;
   
    let propValue= props.property;
    const[totalBathValue, setTotalBath]=useState<number>(0);
    const [isPropertyFavorite, setFavorite]=useState<Boolean>(false);
   
    useEffect(()=>{
        let bathrooms:Bath= propValue.baths;
        if(bathrooms.full && bathrooms.half){
            totalBath= bathrooms.full + 0.5*(bathrooms.half);
         }else if(bathrooms.full && !bathrooms.half){
                totalBath= bathrooms.full;
         }
         setTotalBath(totalBath);
    },[]);


    const favoriteClicked=()=>{
      
        let isFav=!isPropertyFavorite;
        let storagePropValue= {...propValue};
        storagePropValue.favorite=isFav;
        setFavorite(isFav);
        props.isFavoriteHandler(storagePropValue);
    };


    const iconStyleNotFavorite={
        content: `url(${heartEmpty})`
    };
    const iconStyleFavorite={
        content: `url(${heartFill})`
    }
   
  return (
   <div className={styles.container}>
        <div className={styles.favorite}>
            <div className={styles.favoriteIcon}  style={isPropertyFavorite?iconStyleFavorite:iconStyleNotFavorite}
             id={propValue.id} onClick={()=>favoriteClicked()}></div>
        </div>
        <div className={styles.pictureWrapper}>
            <img className={styles.imageElement} src={propValue.photos[0].path} alt={propValue.photos[0].description}/>
        </div>
        <div className={styles.informationNuggetsWrapper}>
            <span className={styles.nugget}>{propValue.bedrooms}</span><span>BR</span>
            <span className={styles.nugget}>|</span>

            <span className={styles.nugget}>{totalBathValue}</span><span>Bath</span>
            <span className={styles.nugget}>|</span>

            <span className={styles.nugget}>{propValue.bedrooms}</span><span>{Measurements.squareFeet}</span>

        </div>
        <div className={styles.priceInformation}>
            ${propValue.listPrice.toLocaleString()}
        </div>
        <div className={styles.propertyAddress}>
            {propValue.address}
        </div>
        <div className={styles.propertySubtext}>
            {propValue.listDate.toString()}
        </div>
   </div>
  );
}

 export default PropertyCard;