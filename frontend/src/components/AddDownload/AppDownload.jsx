import { assets } from '../../assets/assets'
import styles from './AppDownload.module.css'
import React from 'react'

const AppDownload = () => {
  return (
    <div className={styles.appDownload} id={styles.appDownloadId}>
      <p>For Better Experience Download <br /> FoodTiger App</p>
      <div className={styles.appDownloadPlatforms}>
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>

    </div>
  )
}

export default AppDownload