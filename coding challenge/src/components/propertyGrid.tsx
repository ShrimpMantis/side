import { Property } from "models";
import PropertyCard from "./propertyCard";
import styles from './../styles/PropertyGrid.module.css';
import { removeFavoriteData, saveFavoriteData } from "services";

const PropertyGrid = (props:{properties:Array<Property> }) => {
   const propValues= props.properties;
  
   const favoriteCallBackHandler=(propertyObj:Property)=>{
       propertyObj.favorite?saveFavoriteData(propertyObj):removeFavoriteData(propertyObj);
    }  
 

   const propertyGrid= propValues.map((element:Property,index, props)=>{
        return (
             <div className={styles.cardWrapper} key={`propertyWrapper-${index}`}>
                   <PropertyCard  isFavoriteHandler={(id:Property)=>{ favoriteCallBackHandler(id)}} 
                   property={element} key={`propertyCard-${index}`}/>
             </div>
              
        );
    });

    return(
        <>
          <div className={styles.header}>
             <div className={styles.headerText}>Property Listings</div> 
          </div>
          <div className={styles.propertyGridWrapper}>
            {propertyGrid}
          </div>
        </> 
        );
}

export default PropertyGrid;