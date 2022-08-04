import { getFooterCopy, getFullYear } from '../utils/utils';
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  )
}

export default Footer
