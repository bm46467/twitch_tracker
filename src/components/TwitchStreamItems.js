import React from 'react'

const TwitchStreamItems = ({item}) => {
    return (
        <div className="col-md-4 mx-auto my-3">
            <div className="card">
                {item.game_name} {item.user_login}
            </div>
            {/* <h5> {item.game_name} </h5>
            <h5> {item.user_login} </h5> */}
        </div>
    )
}

export default TwitchStreamItems
