import React from 'react';
import styles from '../../scss/globals.module.scss'


const { mainLayout } = styles;

export default function MainLayout({children}) {
  return (
    <div className={mainLayout}>
      {children}
    </div>
  )
}
