import React, { useState } from 'react'

// css //
import './TournamentCard.css'

const TournamentCard = ({ tName, tDate, tYear, tWinner, tVenue, logoimg, concluded }) => {
  const [tourYear, setTourYear] = useState(tYear)
  return (
    <div className='tour_card'>
      <div className='tour_container'>
        <div className='tour_image'>
          <img src={logoimg} alt='image' />
        </div>
        <div className='text_container'>
          {concluded  ? (
            <div className='con_wrap'>
              {' '}
              <p className='conclude'>Concluded</p>
            </div>
          ) : (
            ''
          )}

          <h1 className='tour_col tour_name'>
            {' '}
            <span className='tour_field'>Tournament Name </span>
            <span>{tName}</span>
          </h1>
          <h1 className='tour_col tour_venue'>
            {' '}
            <span className='tour_field'>Tournament Venue </span>
            <span>{tVenue}</span>
          </h1>
          <p className='tour_date'>
            <h1 className='tour_col'>
              <span className='tour_field'>Date </span>
              <span>{tDate}</span>
            </h1>
          </p>
          {/* <p className='tour_win_con'>
            <h1 className='tour_col'>
              <span className='tour_field'>Tourname Winner: </span>
              <span className='tour_won'> {tWinner}</span>
            </h1>
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default TournamentCard
