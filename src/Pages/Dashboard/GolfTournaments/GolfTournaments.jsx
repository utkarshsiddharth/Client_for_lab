import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import leaderBoardDesktop from '../../../assets/images/header/event-booking/desktop.jpg'
import leaderBoardTablet from '../../../assets/images/header/event-booking/tablet.jpg'
import leaderBoardMobile from '../../../assets/images/header/event-booking/mobile.jpg'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import { useTheme } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import TournamentCard from '../../../Components/TournamentCard/TournamentCard'

/////////// Image /////////////////////////
import img1 from '../../../assets/images/chandigarh-golf-course-1-1.jpeg'
import img2 from '../../../assets/images/chandigarh-golf-course-2.jpeg'
import img3 from '../../../assets/images/chd-golf-club-2.jpg'
import img4 from '../../../assets/images/jp-golf-club.jpg'
import img5 from '../../../assets/images/jp-golf-club-2.jpg'

// tournament images //
// import Tour1Image from '../../../assets/images'

// css //
import './GolfTournament.css'
// tournament data //

const arrowVariants = {
  initial: {
    x: -1,
  },
  animate: {
    x: 1,
    transition: {
      yoyo: Infinity,
    },
  },
}

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  formControl: {
    minWidth: 150,
    color: '#fff',
  },
  selectEmpty: {
    marginTop: '1rem',
  },
}))

const GolfTournaments = ({ tournaments }) => {
  const theme = useTheme()
  const classes = useStyles()
  const [tourYear, setTourYear] = useState(2022)
  const [curTournaments, setCurTournaments] = useState([])
  const history = useHistory()

  const handleTourYear = (e) => {
    setTourYear(e.target.value)
  }

  useEffect(() => {
    setCurTournaments(
      tournaments.filter((t) => {
        return t.tour_year == tourYear
      })
    )
    console.log(curTournaments)
  }, [tourYear])

  return (
    <>
      <div className='dashboard-area events-area'>
        <div className='dasboard-slider'>
          <picture>
            <source
              className='image'
              srcSet={leaderBoardMobile}
              className='image'
              media='(max-width: 600px)'
            />
            <source
              className='tab-image'
              srcSet={leaderBoardTablet}
              className='image'
              media='(max-width: 1200px)'
            />
            <img className='image' src={leaderBoardDesktop} alt='' />
          </picture>
        </div>
        <div className='dashboard-header-bar'>
          <div className='bar-container'>
            <div className='bar-main-content '>
              <h4 className='main-title events-title'> Tour Schedule </h4>
              <FormControl className={classes.formControl}>
                <Select
                  labelId='age'
                  id='age'
                  value={tourYear}
                  name='age'
                  onChange={handleTourYear}
                >
                  <MenuItem value={'2021'}>2021</MenuItem>
                  <MenuItem value={'2022'}>2022</MenuItem>
                  {/* <MenuItem value={'2023'}>2023</MenuItem> */}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        <div className='main-container blur-bg'>
          <motion.div
            variants={arrowVariants}
            initial='initial'
            animate='animate'
            className='go-back-arrow'
            onClick={() => history.goBack()}
          >
            <ArrowBackIcon fontSize='large' style={{ color: 'white' }} />
          </motion.div>
          <div className='main-content'>
            <div className='events-container golf_container'>
              {curTournaments.map((t) => (
                <Fragment>
                  <TournamentCard
                    key={t.tour_name}
                    tName={t.tour_name}
                    tYear={t.tour_year}
                    tDate={t.tour_date}
                    tWinner={t.tour_winner}
                    tVenue={t.tour_venue}
                    logoimg={t.image}
                    concluded={t.concluded}
                  />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

GolfTournaments.defaultProps = {
  tournaments: [
    {
      image: img1,
      tour_year: 2021,
      tour_name: 'Bogey Sport NCR Open',
      tour_venue: 'Jaypee Greens Wishtown  Golf Club, Noida',
      tour_date: '13th August',
      concluded: true,
    },
    {
      image: img2,
      tour_year: 2021,
      tour_name: 'Bogey Sport Chandigarh Open',
      tour_venue: 'Chandigarh Golf Club',
      tour_date: '27th August',
      concluded: true,
    },
    {
      image: img3,
      tour_year: 2021,
      tour_name: 'Bogey Sport Chandigarh Open',
      tour_venue: ' Chandigarh Golf Club',
      tour_date: '8th October',
      concluded: true,
    },
    {
      image: img4,
      tour_year: 2021,
      tour_name: 'Bogey Sport NCR Open',
      tour_venue: 'Jaypee Greens Wishtown  Golf Club, Noida',
      tour_date: '15th November',
      concluded: true,
    },
    {
      image: img5,
      tour_year: 2021,
      tour_name: 'Bogey Sport Final Tour Championship',
      tour_venue: 'Panchkula Golf Club',
      tour_date: '28th December',
      concluded: false,
    },
    {
      image: img1,
      tour_year: 2022,
      tour_name: 'Bogey Sport World Championship',
      tour_venue: 'AbuDhabi City Golf Club,UAE',
      tour_date: '8th-10th October',
      concluded: false,
    },
  ],
}

export default GolfTournaments
