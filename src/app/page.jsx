  'use client'

  import styles from "./page.module.css";
  import Image from "next/image";
  import data from "@/data/data.json";
  import { useState } from "react";

  import NavBar from "@/components/molecules/navBar/navBar";

  import { Roboto_Mono } from 'next/font/google';
      
  const font = Roboto_Mono({
      subsets: ['latin']
  });

  export default function Home() {


    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <NavBar />

          <div className={styles.info}>
              <span>
                
              </span>
          </div>
        </main>
      </div>
    );
  }
