import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from '../../dummyDta'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
export default function Home() {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData}  title="Patients Analytics" grid dataKey="Active User"/>
      <div className="homeWIdgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}