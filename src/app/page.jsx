  'use client'

  import styles from "./page.module.css";
  import Image from "next/image";
  import Card from "@/components/molecules/card/card";

  import data from "@/data/data.json";
  import { useState } from "react";

  import { Roboto_Mono } from 'next/font/google';
      

  const font = Roboto_Mono({
      subsets: ['latin']
  });

  import { Search } from "lucide-react";

  export default function Home() {


    return (
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={font.className}>Password Manager</h1>
          <form className={styles.search}>
            <input id={styles.search_inp} type="search" autoComplete="off" spellCheck="true"/>
            <Search size={32} strokeWidth={1} color="#292929"/>
          </form>
        </header>
        <main className={styles.main}>
          <div className={styles.card_box}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </main>
      </div>
    );
  }
