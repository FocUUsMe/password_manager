    import styles from "@/components/molecules/navBar/styles.module.css";
    
    import NavItem from "../navItem/navItem";
    
    const NavBar = () => {
        return (
            <nav className={styles.nav_bar}>
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
            </nav>
        )
    }

    export default NavBar;