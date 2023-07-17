import React from 'react';
import styles from '../../scss/globals.module.scss';
import Header from '../header/Header';


const { mainLayout } = styles;

export default function MainLayout({children}) {
  return (
    <div className={mainLayout}>
    <Header/>
      {children}
    </div>
  )
}
