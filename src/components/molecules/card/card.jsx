    import styles from '@/components/molecules/card/styles.module.css';
    import Image from 'next/image';

    import { Chivo_Mono } from 'next/font/google';

    const font = Chivo_Mono({
        subsets: ['latin']
    });


    const Card = (props) => {
        const { img_src, title, login, password } = props;
        const { children } = props;
        
        return (
            <div className={styles.card}>
                <div className={styles.group_1}>
                    <Image 
                    width={48}
                    height={48}
                    src="/globe.svg"
                    alt=''
                    />
                    <span className={styles.service_name}>
                        {title}
                        GitHub
                    </span>
                </div>

                <div className={styles.group_2}>
                    <input type='text' className={`${styles.login} ${font.className}`}>
                        {login}
                    </input>
                    <input type='password' className={styles.password}>
                        {password}
                    </input>
                </div>
            </div>
        )
    }

    export default Card;