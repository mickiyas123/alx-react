import React from 'react'
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  AppHeader: {
    display: "flex",
    alignItems: "center",
    borderBottom: "4px solid red"
  },
  
  AppHeaderH1: {
    color: "red"
  },
  Applogo :{
    width:"400px",
    height: "400px"
  }
})

const Header = () => {
  return (
    <div className={css(styles.AppHeader)}>
          <img src={logo} className={css(styles.Applogo)} alt="logo" />
          <h1 className={css(styles.AppHeaderH1)}>School dashboard</h1>
    </div>
  )
}

export default Header
