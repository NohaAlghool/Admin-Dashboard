import React from 'react'
import FeaturedInfo  from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import './Home.css'
import {userData} from '../../dummyData'
import WidgetSm from '../../components/widgetSm/widgetSm'
import WidgetLg from '../../components/widgetLg/widgetLg'
const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
        </div>
    </div>
  )
}

export default Home