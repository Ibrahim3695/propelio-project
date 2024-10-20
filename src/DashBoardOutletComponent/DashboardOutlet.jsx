import React from 'react'
import "./DashboardOutlet.css"
import { Outlet } from 'react-router-dom'
const DashboardOutlet = () => {
    return (
        <div className='Main-dashboard-div'>
            <section className='dashboard-header'></section>

            <article className='aside-main-div'>
                <section className='dashboard-aside-left'>
                    <div className='dash-div'>
                        <p>DashBoard</p>
                        <p>Properties</p>
                        <p>Wallet</p>
                        <p>Payments</p>
                    </div>

                    <div className='sup-div'></div>
                </section>

                <section className='dashboard-aside-right'>
                    <Outlet />
                </section>
            </article>

        </div>
    )
}

export default DashboardOutlet