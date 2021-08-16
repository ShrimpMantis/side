import { Property } from "models";
import { Photo } from "models/photo";

export const massageData=(data:Array<any>):Array<Property>=>{

    const massagedData= data.map((currElement, index, data)=>{
        let address= `${currElement.address.unit || ""} ${currElement.address.streetName ||""}, ${currElement.address.city || ""},${currElement.address.state || ""}`;
        let listPrice =currElement.listPrice;
        let givenListedDate= currElement.listDate ? new Date(currElement.listDate): new Date();
        let listDate= `${givenListedDate.getMonth()}/${givenListedDate.getDate()}/${givenListedDate.getFullYear()}`;
        let bedrooms= currElement.property.bedrooms;
        let baths= {full: currElement.property.bathsFull ,half: currElement.property.bathsHalf}
        let area= currElement.property.area;
        let photos:Array<Photo>=[];
         currElement.photos.forEach((photo:string, index:number)=>{
           const isInside= photo.includes("inside");
           const photoData:Photo= {
                    description: isInside? `inside ${currElement.address.city} house`:`outside ${currElement.address.city} house`,
                    path: photo
            }
            photos.push(photoData);
        });
        let id= currElement.listingId;
        const propertyData:Property={
            address:address,
            area:area,
            baths:baths,
            bedrooms:bedrooms,
            listDate:listDate,
            listPrice:listPrice,
            photos:photos,
            id: id,
            favorite:false
        }

        return propertyData;
    });

    return massagedData;

}