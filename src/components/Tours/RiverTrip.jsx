import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Button from '@mui/material/Button';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import GroupsIcon from '@mui/icons-material/Groups';
import AvTimerIcon from '@mui/icons-material/AvTimer';

function RiverTrip() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>River Trip & Baobab Safari itinerary</h1>
      <div className="row">
        <div className="col price-itinerary"><Button className='BtnBookNow ' variant="contained"><MonetizationOnIcon /> Price 584$</Button> </div>
        <div className="col"> <Button variant="contained" className='BtnBookNow' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><EventAvailableIcon /> BOOK NOW</Button></div>
      </div>

      <hr />
      <div className='row text-center '>
        <div className="col"><span className="badge text-dark"> <MyLocationIcon />East</span></div>
        <div className="col"> <span className="badge text-dark"><AvTimerIcon /> 4 Days</span> </div>
        <div className="col"><span className="badge text-dark"><MonetizationOnIcon /> From $450/person</span></div>
        <div className="col"><span className="badge text-dark"><GroupsIcon /> 4 persons</span></div>
      </div>
      <hr />
      
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 1"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', borderBlockColor: '#000' }}
          icon={<FlightLandIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA (ARRIVAL)</h3>
          <p className='text-justify'>
          Landed on Ivato international airport, you will be welcomed by one of our members representing our company who will show you to your private car transferring you to your hotel for check-in. <br /> Overnight: Chalet des Roses
          </p>


        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 2"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA - ANTSIRABE</h3>
          <p className='text-justify'>
          We set off southwards heading to Antsirabe following the national route 7. You shall have optional stop at Ambatolampy to see aluminum pot casting. When arriving at Antsirabe, visit the surrounding areas and various workshops of semi and precious stones. <br /> Overnight: Couleur Café
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 3"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANTSIRABE - MIANDRIVAZO</h3>
          <p className='text-justify'>
          This morning after breakfast, we depart to Miandrivazo located roughly 220 km west of Antsirabe. This is the starting point for boat trip along the Tsiribihina River. There will be stops en route contemplating nice viewpoint, encounter with the locals and other stops arranged by your guide. <br /> Overnight: Princesse de Tsiribihina
                    </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 4"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">MIANDRIVAZO - MASIAKAMPY - WATERFALL</h3>
          <p className='text-justify'>
          This morning, we will drive to Masekapy. When arriving at Masekapy, board on a boat going to the waterfall. We shall have a window of opportunities along this river trip expecting to see not only the landscapes but also animals like birds, chameleons, various species of lemurs including the sifakas and the brown lemurs <br /> Overnight: Camping
                    </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 5"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">WATERFALL - BELO SUR TSIRIBIHINA</h3>
          <p className='text-justify'>
          After breakfast, back to the barge sailing down the Tsiribihina while passing several traditional villages. We shall stop by Berevo village in hope to learn about their daily life and cultures. When we get by the small port of Belo Sur Tsiribihina, we get off and then drive to Belo Tsiribihina, the cultural capital of the Sakalava tribe. <br /> Overnight: Karibo Hotel
                    </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 6"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">BELO SUR TSIRIBIHINA - TSINGY</h3>
          <p className='text-justify'>
          This morning, we drive to Bekopaka with stops en route. Bekopaka is the village just by the national park of Bemaraha where the picturesque view of the limestone pinnacles will surprise visitors because of its natural beauty and the exceptional biodiversity it possesses. <br /> Overnight: Orchidée de Bemaraha
                    </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 7"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">TSINGY VISIT</h3>
          <p className='text-justify'>
          Explore both the Petit Tsingy and Grand Tsingy. The whole protected area, comprising a surface of 1.575 km square was designated a UNESCO World Heritage Site in 1990. While hiking in the park, you will observe the beauty of these limestone pinnacles, a hike leading you through narrow gauge, climbing on top (harness is a must), walking on a suspended bridge, and toward the cathedral where you may spot lemurs, the Giant rat, the Giant coua, Madagascar green pigeon, and many more. <br /> Overnight: Orchidée de Bemaraha
                    </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 8"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">TSINGY - MORONDAVA</h3>
          <p className='text-justify'>
          After breakfast, we depart back to Morondava. There will be stops though at the ‘amorous baobab’, the Baobab Alley where you can have a nice photo at sunset time. Baobabs are distinctive trees adapted to thrive in harsh conditions. <br /> Overnight: Chez Maggie
                    </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 9"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">MORONDAVA - TANA</h3>
          <p className='text-justify'>
          Transfer to the airport for flight back to Tana. On arrival you will be met and transferred to your hotel. <br /> Overnight: Chalet des Roses
           </p>
        </VerticalTimelineElement>



        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 10"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">DEPARTURE BACK HOME</h3>
          <p className='text-justify'>
          City tour exploring the capital to learn a lot about its colorful culture, palaces, huge cathedral and a time to go shopping at the famous Digue market for crafts, stones, raffia, and so forth. Then, transfer to the airport for flight heading back home
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<KeyboardDoubleArrowDownIcon />}
        />

        
      </VerticalTimeline>

      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="card text-white mb-3 included incluD">
            <div class="card-header"><h4><CheckCircleIcon /> Included to the offer</h4></div>
            <div class="card-body">
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet. <br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.<br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.<br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.<br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="card text-white mb-3 excluded">
            <div class="card-header text-dark"><h4><DoNotDisturbOnTotalSilenceIcon /> Excluded to the offer </h4></div>
            <div class="card-body text-dark">
              <DoNotDisturbOnIcon /> Lorem ipsum dolor sit amet. <br />
              <DoNotDisturbOnIcon /> Lorem ipsum dolor sit amet.<br />
              <DoNotDisturbOnIcon /> Lorem ipsum dolor sit amet.<br />
              <DoNotDisturbOnIcon /> Lorem ipsum dolor sit amet.<br />
              <DoNotDisturbOnIcon /> Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>

      </div>

      <div className="row mb-3">
        <div className="col price-itinerary"><Button className='BtnBookNow ' variant="contained"><MonetizationOnIcon /> Price 584$</Button> </div>
        <div className="col"> <Button variant="contained" className='BtnBookNow' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><EventAvailableIcon /> BOOK NOW</Button></div>
      </div>

    </div>
  )
}

export default RiverTrip