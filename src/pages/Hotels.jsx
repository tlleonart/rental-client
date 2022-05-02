import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { HotelsContainer } from '../containers/HotelsContainer/HotelsContainer'
import { getHotels, getHotelsStatus, selectAllHotels } from '../redux/slices/hotelSlice'

export const Hotels = () => {
    const hotelStatus = useSelector(getHotelsStatus);
    const hotels = useSelector(selectAllHotels);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (hotelStatus === 'idle') {
          dispatch(getHotels());
        }
      }, [hotelStatus, dispatch]);
      
  return (
    <div className='hotels'>
        <Header />
        <HotelsContainer />
        <Footer />
    </div>
  )
}
