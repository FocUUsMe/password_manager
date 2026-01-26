'use client'

import styles from "./page.module.css";
import Card from "@/components/molecules/card/card";

import { useState } from "react";

import { Search } from "lucide-react";

export default function Home() {


  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Passwords</h1>
        <form className={styles.search}>
          <input id={styles.search_inp} type="search" autoComplete="off" spellCheck="true"/>
          <Search size={32} strokeWidth={1} color="#292929"/>
        </form>
      </header>
      <main className={styles.main}>
        
      </main>
    </div>
  );
}
