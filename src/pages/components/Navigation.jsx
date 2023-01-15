import React from 'react'
import styles from '../../styles/Navigation.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image 
        src={"/images/recetas.png"} 
        alt={'logo-image-recipes-app'} 
        width={60} 
        height={60} 
        
        />
      </div>
      <ul className={styles.optionscontainer}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/recipes"}>Recipes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation