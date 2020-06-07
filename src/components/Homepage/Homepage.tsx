import React, { useState } from 'react'
import classNames from 'classnames'

const airplanes = [
    { brand: 'Airbus', adsCount: 7 },
    { brand: 'Beoing', adsCount: 6 },
    { brand: 'Bombardier', adsCount: 4 },
    { brand: 'Embraer', adsCount: 3 },
]

const Homepage = () => {
    const [newUsedToggle, setNewUsed] = useState('all')
    
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
            <h2>Airplanes on sale</h2>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" 
                    className={classNames('btn btn-light pl-4 pr-4', {active: newUsedToggle === 'all'})} 
                    onClick={()=> setNewUsed('all')}>All</button>
                <button type="button"  
                    className={classNames('btn btn-light pl-4 pr-4', {active: newUsedToggle === 'new'})} 
                    onClick={()=> setNewUsed('new')}>New</button>
                <button type="button" 
                    className={classNames('btn btn-light pl-4 pr-4', {active: newUsedToggle === 'used'})}
                    onClick={()=> setNewUsed('used')}>Used</button>
            </div>
            <div style={{border: '1px solid #ccc', borderRadius: '5px', height:'150px'}}>Brands here</div>
            
        </div>
    )
}

export default Homepage