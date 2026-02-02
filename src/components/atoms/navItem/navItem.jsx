    import styles from "@/components/atoms/navItem/styles.module.css";
    import Image from "next/image";

    import { useState } from "react";

    import { Chivo_Mono } from "next/font/google";

    const font = Chivo_Mono({
        subsets: ['latin']
    });
    
    const NavItem = ( props ) => {
        const { fn, title, img_src } = props;
        
        return (
            <div onClick={fn} className={`${styles.nav_item} ${font.className}`}>
                <Image 
                    src={img_src}
                    alt='item_icon'
                    width={40}
                    height={40}
                />

                <span className={styles.item_title}> {title} </span>
            </div>
        )             
    }

    export default NavItem;