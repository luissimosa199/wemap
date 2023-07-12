import React from 'react';
import styles from '../../scss/globals.module.scss';

const {styledHeader} = styles;

export default function Header() {
  return (
    <div className={styledHeader}> Soy un Header, dentro del Layout con estilo! </div>
  )
}
