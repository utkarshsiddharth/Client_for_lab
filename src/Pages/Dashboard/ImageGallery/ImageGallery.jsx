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

// images //
import ImageOne from '../../../assets/images/gallery-images/1.jpg'
import ImageTwo from '../../../assets/images/gallery-images/2.jpg'
import ImageThree from '../../../assets/images/gallery-images/3.jpg'
import ImageFour from '../../../assets/images/gallery-images/4.jpg'
import ImageFive from '../../../assets/images/gallery-images/5.jpg'
import ImageSix from '../../../assets/images/gallery-images/6.jpg'

// youtube embed //
import YoutubeEmbed from '../../../Components/YoutubeEmbed/YoutubeEmbed'

// component //
import TournamentCard from '../../../Components/TournamentCard/TournamentCard'

// css //
import './ImageGallery.css'

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
  const imageGalleryData = [
    {
      year: 2021,
      date: "Aug 13",
      type: 'img',
      image: ImageOne,
      text: 'lorem ipsum dolor sit amet, lorem ipsum dolor site amet 1',
    },
    {
      year: 2021,
      date: "Aug 27",
      type: 'img',
      image: ImageTwo,
      text: 'lorem ipsum dolor sit amet, lorem ipsum dolor site amet 2',
    },
    {
      year: 2021,
      date: "Oct 8",
      type: 'img',
      image: ImageThree,
      text: 'lorem ipsum dolor sit amet, lorem ipsum dolor site amet 3',
    },
    {
      year: 2021,
      date: "Nov 15",
      type: 'img',
      image: ImageFour,
      text: 'lorem ipsum dolor sit amet, lorem ipsum dolor site amet 4',
    },
    {
      year: 2021,
      date: "Nov 30",
      type: 'img',
      image: ImageFive,
      text: 'lorem ipsum dolor sit amet, lorem ipsum dolor site amet 5',
    },
    {
      year: 2021,
      date: "Dec 11",
      type: 'img',
      image: ImageSix,
      text: 'lorem ipsum dolor sit amet, lorem ipsum dolor site amet 6',
    },
    {
      year: 2022,
      date: "Feb 18",
      image: ImageSix,
      type: 'img',
      text: 'lorem ipsum dolor sit amet, lorem ipsum dolor site amet 3',
    },
  ]
  const videoData = [
    {
      year: 2021,
      type: 'vedio',
      video: 'mRknA-YtRuM',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Temporibus, facilis.',
    },
    {
      year: 2021,
      type: 'vedio',
      video: '99nN7WWNF1Q',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.      Temporibus, facilis.',
    },
    {
      year: 2022,
      type: 'vedio',
      video: '99nN7WWNF1Q',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Temporibus, facilis.',
    },
  ]
  const theme = useTheme()
  const classes = useStyles()
  const [tourYear, setTourYear] = useState(2022)
  const [newsType, settype] = useState('News')

  const [curTournaments, setCurTournaments] = useState([])
  const history = useHistory()

  const handleTourYear = (e) => {
    setTourYear(e.target.value)
  }

  const handleNewsImages = () => {
    settype('News')
  }

  const handleNewsVedios = () => {
    settype('Media News')
  }

  useEffect(() => {
    const children = imageGalleryData.concat(videoData)

    console.log(children)
    setCurTournaments(
      children.filter((t) => {
        return t.year == tourYear
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
              <h4 className='main-title events-title'>News</h4>
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
            <div className=' image_gallery_container'>
              <Fragment>
                <h1
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '42px',
                    paddingBottom: '10px',
                  }}
                >
                  News
                </h1>

                <div className='twoPart'>
                  <a onClick={handleNewsImages}>
                    {
                      newsType == 'News' ?(
                        <h3
                    className='newsImages'
                    name='newsImages'
                    style={{
                      color:'#ffad01'
                    }}

                  > Images </h3>
                      ):(
                        <h3
                    className='newsImages'
                    name='newsImages'

                  > Images </h3>
                      )
                    }
                  </a>

                  <a onClick={handleNewsVedios}>
                    {
                      newsType =='Media News' ? (
                        <h3
                    className='newsVedios'
                    name='newsVedios'
                    style={{
                      color:'#ffad01'

                    }}

                    
                  >Videos</h3>
                      ):(
                        <h3
                        className='newsVedios'
                    name='newsVedios'
                    
                  >Videos</h3>
                      )
                    }

                  </a>
                  
                </div>

                <div className='images_gallery'>

                  {
                    newsType == 'News' ? (
                      <>
                        {curTournaments.map((img) => {
                          if (img.type == 'img') {
                            return (
                              <Fragment>
                                <div className='image_card'>
                                  <div className='img_div'>
                                    <img
                                      src={img.image}
                                      alt=''
                                      className='img_news'
                                    />
                                  </div>
                                  <div className='date_box'>{img?.date}</div>
                                  <div className='img_text'>
                                    <p>{img.text}</p>
                                  </div>
                                </div>
                              </Fragment>
                            )
                          }
                        })}
                      </>
                    ) : (
                      <>
                        {curTournaments.map((vdo) => {
                          if (vdo.type == 'vedio') {
                            return (
                              <div className='image_card'>
                                <YoutubeEmbed embedId={vdo.video} />
                                <p>{vdo.text}</p>
                              </div>
                            )
                          }
                        })}</>

                    )
                  }



                </div>
              </Fragment>
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
      tour_year: 2021,
      tour_name: 'Bogey Sport NCR Open',
      tour_venue: 'Jaypee Greens Wishtown  Golf Club, Noida',
      tour_date: '13th August - 15th August',
    },
    {
      tour_year: 2021,
      tour_name: 'Bogey Sport Chandigarh Open',
      tour_venue: 'Chandigarh Golf Club',
      tour_date: '133th August - 15th August',
    },
    {
      tour_year: 2021,
      tour_name: 'Bogey Sport Chandigarh Open',
      tour_venue: ' Chandigarh Golf Club',
      tour_date: '313th August - 15th August',
    },
    {
      tour_year: 2021,
      tour_name: 'Bogey Sport NCR Open',
      tour_venue: 'Jaypee Greens Wishtown  Golf Club, Noida',
      tour_date: '313th August - 15th August',
    },
    {
      tour_year: 2021,
      tour_name: 'Bogey Sport Final Tour Championship',
      tour_venue: 'Panchkula Golf Club',
      tour_date: '313th August - 15th August',
    },
    {
      tour_year: 2022,
      tour_name: 'No Data Found',
      tour_venue: 'No Data Found',
      tour_date: 'No Data Found',
    },
  ],
}

export default GolfTournaments
