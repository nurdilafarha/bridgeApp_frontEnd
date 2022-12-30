import React from 'react'
import './Profile.css'

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="profile">
        <div className="profileCover">
            <img src={`${PF}cover.jpeg`} alt="" className="profileCoverImg" />
            <img src={`${PF}guru2.jpg`} alt="" className="profileUserImg" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Ariana</h4>
        </div>
        <div className="profileDesc">
            <h4 className="profileDescTitle">User Information</h4>
            <div className="profilDescItem">
                <span className="profileDescKey">Alamat: </span>
                <span className="profilDescValue">Jl. Baru</span>
            </div>
        </div>
    </div>
  )
}
