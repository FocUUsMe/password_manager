    import styles from '@/components/molecules/card/styles.module.css';
    import Image from 'next/image';
    
    const Card = (props) => {
        const { img_src } = props;
        const { children } = props;
        
        return (
            <div>
                <Image 
                 width={32}
                 height={32}
                 src={img_src}
                />
                <span className={styles.service_name}></span>

                <span className={styles.login}></span>
                <span className={styles.password}></span>
            </div>
        )
    }

    export default Card;