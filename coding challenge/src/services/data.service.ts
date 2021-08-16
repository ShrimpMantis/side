import { url } from "inspector";
import { Property } from "models";

export const  getData= async ()=>{
    const url="https://api.simplyrets.com/properties";
    const customheaders= new Headers()
    customheaders.append('Content-Type','application/json');
    customheaders.append('Accept','application/json');
    customheaders.append('Authorization',`Basic ${btoa('simplyrets:simplyrets')}`);

    const response=  await fetch(url,{
        method:"GET",
        headers: customheaders,
    });

    return response.json();
}

export const cachePropertyData=(property:Property)=>{
    localStorage.setItem("response", JSON.stringify(property));
}

export const getCacheData=()=>{
    let cacheData= localStorage.getItem("response");
    return cacheData?JSON.parse(cacheData): null;
}

export const saveFavoriteData=(property:Property)=>{
    localStorage.setItem(`favProperty-${property.id}`,  JSON.stringify(property));
}

export const removeFavoriteData=(property:Property)=>{
    localStorage.removeItem(`favProperty-${property.id}`);
}