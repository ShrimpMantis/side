import { Bath } from "./bath";
import { Photo } from "./photo";

export interface Property{
    address:string;
    area:number;
    baths:Bath;
    bedrooms:number;
    photos:Array<Photo>;
    listDate:string;
    listPrice:number;
    id:string;
    favorite:boolean;
   
}

