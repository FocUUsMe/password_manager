    import styles from "@/components/molecules/navItem/styles.module.css";
    import Image from 'next/image';

    import { Chivo_Mono } from 'next/font/google';

    const font = Chivo_Mono({
        subsets: ['latin']
    });


    const NavItem = (props) => {
        const { img_src, title, login, password } = props;
        const { children } = props;
        
        return (
            <div className={styles.nav_item}>
                <Image 
                    width={32}
                    height={32}
                    alt=''
                    src='/card_icons/github_icon.png'
                />

                <span className={`${styles.item_title} ${font.className}`}>
                    {title}
                    GitHub
                </span>
            </div>
        )
    }

    export default NavItem;