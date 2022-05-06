import React from 'react'
import './hotelcard.scss'
import { FiShare2 } from 'react-icons/fi'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const HotelCard = ({ hotel }) => {
  return (
    <section className='hotelcard'>
      <div className='hotelcard__container'>
        <div className='hotelcard__container__data'>
          <div className='hotelcard__container__data__title'>
            <h3 className='hotelcard__container__data__title__text'>{hotel.name}</h3>
            <div className='hotelcard__container__data__title__anchors'>
              <a className='hotelcard__container__data__title__anchors__a'><FiShare2 />Compartir</a>
              <a className='hotelcard__container__data__title__anchors__a'><MdFavoriteBorder />Favoritos</a>
            </div>
          </div>
          <div className='hotelcard__container__data__sec'>
            <p className='hotelcard__container__data__sec__span'>Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet, Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea diam amet</p>
            <div className='hotelcard__container__data__sec__buttons'>
              <p className='hotelcard__container__data__sec__span'>{hotel.stars} ★ {hotel.city}, {hotel.country}</p>
              {/*     <button className='hotelcard__container__data__sec__buttons__btn'>Compartir</button>
              <button className='hotelcard__container__data__sec__buttons__btn'>Agregar a Favoritos</button> */}
            </div>
          </div>
        </div>
        <div className='hotelcard__container__images'>
          <img className='hotelcard__container__images__main' src={hotel.mainImage} alt='mainImg' />
          <img className='hotelcard__container__images__amenities' src={hotel.amenitiesImage} alt='amenitiesImg' />
          <img className='hotelcard__container__images__bar' src={hotel.barImage} alt='barImg' />
          <img className='hotelcard__container__images__room' src={hotel.roomImage} alt='roomImg' />
          <img className='hotelcard__container__images__other' src={hotel.otherImage} alt='otherImg' />
        </div>
      </div>
    </section>
  )
}

export default HotelCard
