import { Property } from 'models';
import React from 'react';
import { removeFavoriteData, saveFavoriteData } from 'services';
import styles from './../styles/SideNavigation.module.css';
import PropertyCard from './propertyCard';

const SideNavigation = (props: { listings: Array<Property> | undefined }) => {
  const favoriteCallBackHandler = (propertyObj: Property) => {
    if (propertyObj.favorite) {
      saveFavoriteData(propertyObj);
    } else {
      removeFavoriteData(propertyObj);
    }
  };

  const propertyListings = props.listings?.map((currElement, index) => {
    return (
      <div className={styles.listingWrapper} key={`listingWrapper-${index}`}>
        <PropertyCard
          isFavoriteHandler={(id) => {
            favoriteCallBackHandler(id);
          }}
          property={currElement}
        />
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>Property Listings</div>
      <div className={styles.listings}>{propertyListings}</div>
    </div>
  );
};

export default SideNavigation;
