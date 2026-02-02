  'use client'

  import styles from "./page.module.css";
  import data from "@/data/data.json";
  import { Eye } from 'lucide-react';
  import { EyeOff } from "lucide-react";
  import { Red_Hat_Display } from "next/font/google";
  
  import Image from "next/image";
  import { useState } from "react";
  import { useEffect } from "react";
  import { useItems } from "@/context/context.jsx";
  import { useRef } from "react";

  import NavItem from "@/components/atoms/navItem/navItem";

  const red_hat_display = Red_Hat_Display({
    subsets: ['latin']
  });

  export default function Home() {
    const { selectItem,
            item_title, 
            item_login, 
            item_password, 
            isActive, 
            setIsActive,
            items,
            setItems
          } = useItems();

    const [isSelected, setIsSelected] = useState(false);
    const [code, setCode] = useState('');
    const [secs, setSecs] = useState(0);

    useEffect(() => {
      if(!data.cards){
        throw new Error('File is not defined');
      }

      console.log('Effect started');
      
      setItems( data.cards );

      console.log('Effect ended');
    }, []);
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const timerRef = useRef(null);

      useEffect(() => {
        timerRef.current = setInterval(() => {
          setSecs(prevSecs => {
            if(prevSecs >= 1){
              return prevSecs - 1;
            }else{
              let newCode = '';
              for(let i = 0; i < 6; i++){
                let random = Math.floor(Math.random() * chars.length);
                newCode += chars[random];
              }
              setCode(newCode);
              return 15;
            }
          });
        }, 1000);
  
        return () => clearInterval(timerRef.current);
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

                fn={ ()=>{ selectItem(item); setIsSelected(true);} }
              />
            )}
          </nav>

          <div className={styles.items_info}>
            <div style={{height: isSelected ? '50%' : '100%'}} className={styles.group_1}>
              <span className={red_hat_display.className} id={styles.info_title}> {item_title} </span>

              <div style={{width: '100%', display: 'flex', flexDirection: 'column', gap: '30px'}}>
                <div id={styles.login_group}>
                  <p className={red_hat_display.className}>Login:</p>
                  <input
                    type="text"
                    placeholder="Login"
                    value={item_login}
                    readOnly
                    className={red_hat_display.className}
                  />
                </div>

                <div id={styles.password_group}>
                  <p className={red_hat_display.className}>Password:</p>
                  <button 
                   onClick={()=>{
                     setIsActive( prev=>!prev );
                  }}
                   className={styles.psw_btn}>
                    {isActive ? <EyeOff/> : <Eye/>}
                  </button>
                  <input
                    type={isActive ? 'text' : 'password'}
                    placeholder="Password"
                    value={item_password}
                    readOnly
                    className={`${red_hat_display.className}`}
                  />
                </div>
              </div>
            </div>

            <div style={{display: isSelected ? 'block' : 'none'}} className={styles.group_2}>
              <h2 className={red_hat_display.className}>OTP code:</h2>

              <form className={styles.otp_code}>
                  <input type="text" readOnly id={styles.code} value={code}/>
                  
                  <div className={styles.timer}>
                    <span id={styles.min}>00</span>:
                    <span id={styles.sec}> {secs} </span>
                  </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    );
  }
