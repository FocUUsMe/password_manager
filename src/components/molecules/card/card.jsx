    import styles from '@/components/molecules/card/styles.module.css';
    import Image from 'next/image';


    const Card = (props) => {
        const { img_src, title, login, password } = props;
        const { children } = props;
        
        return (
            <div>
                <Image 
                 width={32}
                 height={32}
                 src={img_src}
                 alt=''
                />
                <span className={styles.service_name}>
                    {title}
                </span>

                <span className={styles.login}>
                    {login}
                </span>
                <span className={styles.password}>
                    {password}
                </span>
            </div>
        )
    }

    export default Card;