import React from 'react'
import TwitchStreamItems from './TwitchStreamItems'
import Spinner from './Spinner'
import utils from '../utils';

const TwitchStreamsGrid = ({items, isLoading}) => {

    test('if utils mocked automatically', () => {
        // Public methods of `utils` are now mock functions
        expect(utils.authorize.mock).toBeTruthy();
        expect(utils.isAuthorized.mock).toBeTruthy();
      
        // You can provide them with your own implementation
        // or pass the expected return value
        utils.authorize.mockReturnValue('mocked_token');
        utils.isAuthorized.mockReturnValue(true);
      
        expect(utils.authorize()).toBe('mocked_token');
        expect(utils.isAuthorized('not_wizard')).toBeTruthy();
      });
      
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