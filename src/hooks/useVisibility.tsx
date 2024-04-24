import React,{useState} from 'react'



export const useVisibility = () => {
    const [isVisible, setIsVisible] = useState(false);
    return {
        isVisible,
        hide: () => setIsVisible(false), 
        show: () => setIsVisible(true)   
      };
    };