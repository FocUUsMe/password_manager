    import styles from '@/components/molecules/card/styles.module.css';
    import Image from 'next/image';


    const Card = (props) => {
        const { img_src, title, login, password } = props;
        const { children } = props;
        
        return (
            <div className={styles.card}>
                <Image 
                 width={32}
                 height={32}
                 src="/globe.svg"
                 alt=''
                />
                <span className={styles.service_name}>
                    {title}
                </span>

                <input type='text' className={styles.login}>
                    {login}
                </input>
                <input type='password' className={styles.password}>
                    {password}
                </input>
            </div>
        )
    }

    export default Card;