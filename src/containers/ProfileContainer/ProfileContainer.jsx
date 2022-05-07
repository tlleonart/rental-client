import React from 'react'
import './profileContainer.scss'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail'

const ProfileContainer = ({ user }) => {
  return (
    <section className='profileContainer'>
      <ProfileCard user={user} />
      <ProfileDetail user={user} />
      <button>Publica tu alojamiento!</button>
    </section>
  )
}

export default ProfileContainer
