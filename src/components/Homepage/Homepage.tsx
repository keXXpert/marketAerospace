import React from 'react'

const airplanes = [
    { brand: 'Airbus', adsCount: 7 },
    { brand: 'Beoing', adsCount: 6 },
    { brand: 'Bombardier', adsCount: 4 },
    { brand: 'Embraer', adsCount: 3 },
]

const Homepage = () => {
    return (
        <div className="container pt-4">
            {/* <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active pl-4 pr-4">
                    <input type="radio" name="options" id="option1" autoComplete="off" checked />All
                </label>
                <label className="btn btn-secondary pl-4 pr-4">
                    <input type="radio" name="options" id="option2" autoComplete="off" />New
                </label>
                <label className="btn btn-secondary pl-4 pr-4">
                    <input type="radio" name="options" id="option3" autoComplete="off" />Used
                </label>
            </div> */}
            <h1>MarketPlace</h1>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary active pl-4 pr-4">All</button>
                <button type="button" className="btn btn-secondary pl-4 pr-4">New</button>
                <button type="button" className="btn btn-secondary pl-4 pr-4">Used</button>
            </div>
            
        </div>
    )
}

export default Homepage