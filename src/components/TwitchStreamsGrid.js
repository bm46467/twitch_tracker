import React from 'react'
import TwitchStreamItems from './TwitchStreamItems'
import Spinner from './Spinner'

const TwitchStreamsGrid = ({items, isLoading}) => {
    return (
        isLoading ? <Spinner /> : (
            <div className="cards">
                {items.map(item => (
                    <TwitchStreamItems key={item.id} item={item} />
                ))}
            </div>
        )

        
    )
    
}

export default TwitchStreamsGrid