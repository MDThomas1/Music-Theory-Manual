import React from 'react'

import RhythmSymbolCard from './Rhythm-Symbol-Card'

import { QUERY_KEY_SIGNATURES } from '../utils/queries';
import { useQuery } from '@apollo/client';

const KeySignatureList = () => {
    const { data } = useQuery(QUERY_KEY_SIGNATURES)

    const keySignatures = data?.keySignatures

    return (
        <div className='information'>
            {keySignatures.map((keySignature) => (
                <RhythmSymbolCard image={keySignature.image} name={keySignature.name} description={keySignature.description}/>
            ))}
        </div>
    )
}

export default KeySignatureList