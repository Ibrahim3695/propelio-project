import React from 'react'
import "./DashBoardLandLord.css"

const DashBoardLandLord = () => {
    return (
        <div className='dashBoardMain'>
            <section className='main-top'>
                <article className='token-div'></article>
                <article className='total-div'></article>
            </section>

            <section className='main-bottom'>
                <article className='sales-analytics-div'></article>
                <article className='numberOfProperty-div'></article>
            </section>
        </div>
    )
}

export default DashBoardLandLord