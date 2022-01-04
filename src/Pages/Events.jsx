import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { FormControl, MenuItem, Select } from '@material-ui/core'

import leaderBoardDesktop from '../assets/images/header/event-booking/desktop.jpg'
import leaderBoardTablet from '../assets/images/header/event-booking/tablet.jpg'
import leaderBoardMobile from '../assets/images/header/event-booking/mobile.jpg'

// events data //
import events from '../assets/Data/EventsData'

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

const Events = () => {
  const [curTournaments, setCurTournaments] = useState([])

  const [currentTournament, setCurrentTournament] = useState('')
  const history = useHistory()

  const handleBookTournament = (tournament) => {
    setCurrentTournament(tournament)
    console.log(tournament)
    localStorage.setItem('tournament-name', tournament)
    history.push(`/event-booking?${tournament}`)
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

  const classes = useStyles()
  const [tourYear, setTourYear] = useState(2022)
  const handleTourYear = (e) => {
    setTourYear(e.target.value)
  }

  useEffect(() => {
    setCurTournaments(
      events.filter((t) => {
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
              <h4 className='main-title events-title'>
                {' '}
                Select the Tournament
              </h4>
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
            <div className='events-container'>
              {curTournaments.map((event) => (
                <div className='event-card'>
                  <div className='card-image'>
                    <img src={event.image} alt={event.title} />
                  </div>
                  <div className='card-content'>
                    <h4>{event.title}</h4>
                    <h5>{event.event}</h5>
                    <h5 style={{ marginBottom: 10 }}>{event.name}</h5>
                    {event.title === 'Event 1' ? null : <br />}
                    <h5>{event.date}</h5>
                  </div>
                  <div className='btn-group'>
                    <button className='btn btn-primary'>Learn More</button>
                    <button
                      disabled={event.disable}
                      className='btn btn-ghost'
                      onClick={(e) =>
                        handleBookTournament(
                          `${event.title} - ${event.event}, ${event.name}`
                        )
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Events
