'use client'

import { createContext, useContext, useState, useEffect } from "react";
import data from "@/data/data.json";

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState({
        login: '',
        password: '',
        title: 'Title',
    });

    useEffect(() => {
          if(!data.cards){
            throw new Error('File is not defined');
          }
    
          console.log('Effect started');
          
          setItems( data.cards );
    
          console.log('Effect ended');
    }, []);

    const selectItem = ( item ) => {
        setSelectedItem({
            login: item.login,
            password: item.password,
            title: item.title,
        });
    }

    return (
        <ItemsContext.Provider value={{
            items,
            setItems,
            selectItem,
            item_title: selectedItem.title,
            item_login: selectedItem.login,
            item_password: selectedItem.password,
            isActive,
            setIsActive,
        }}>
            {children}
        </ItemsContext.Provider>
    )
}

export const useItems = () => useContext( ItemsContext );