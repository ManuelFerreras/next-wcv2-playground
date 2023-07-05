"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'
import { createWeb3Wallet } from '@/lib/WalletConnect'

export default function Home() {
  useEffect(() => {
    console.debug("Initing Web3Wallet SDK...")

    createWeb3Wallet('')

    console.debug("Web3Wallet SDK Inited.")
  }, [])

  return (
    <main className={styles.main}>
      <h1>Testing if WC v2 Web3Wallet SDK Works...</h1>
      <h2>Debugging in the inspector console.</h2>
    </main>
  )
}
