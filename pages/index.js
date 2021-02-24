import Head from 'next/head'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <h1>Home page</h1>
        <p>My first page with strapi and Mongo DB</p>
      </div>
    </motion.div>
  )
}
