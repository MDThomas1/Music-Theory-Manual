import React from 'react';

import PerfectIntervalList from '../components/PerfectIntervalList'
import MajorIntervalList from '../components/MajorIntervalList'
import MinorIntervalsList from '../components/MinorIntervalList'

const Intervals = () => {
    return (
        <div id='intervals'>
            <h3>Intervals</h3>
            <p></p>
            <div id='perfect-intervals'>
                <h4>Perfect Intervals</h4>
                <PerfectIntervalList />
            </div>
            <div id='major-intervals'>
                <h4>Major Intervals</h4>
                <MajorIntervalList />
            </div>
            <div id='minor-intervals'>
                <h4>Minor Intervals</h4>
                <MinorIntervalsList />
            </div>
            <div id='tritone'>
            </div>
        </div>
    )
}

export default Intervals

