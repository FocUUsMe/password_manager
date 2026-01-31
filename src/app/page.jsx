  'use client'

  import styles from "./page.module.css";
  import data from "@/data/data.json";
  
  import Image from "next/image";
  import { useState } from "react";
  import { useEffect } from "react";

  import NavItem from "@/components/atoms/navItem/navItem";

  export default function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
      if(!data.cards){
        throw new Error('File is not defined');
      }

      console.log('Effect started');
      
      setItems( data.cards );

      console.log('Effect ended');
    }, []);

    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <nav className={styles.nav_bar}>
            {items.map((item, index) => <NavItem
                key={item.id}
                id={item.id}
                title={item.title}
                img_src={item.icon}
              />
            )}
          </nav>

          <div className={styles.items_info}>

          </div>
        </main>
      </div>
    );
  }
