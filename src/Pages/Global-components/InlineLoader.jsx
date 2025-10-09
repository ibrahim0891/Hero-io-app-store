import { Waveform } from 'ldrs/react'
import 'ldrs/react/Waveform.css'

// Default values shown
let InLineLoader = ({color , size}) => {
    return <Waveform
        size={size ?? '14'}
        stroke="1.5"
        speed="1"
        color={color ?? 'indigo'}
    />
}

export default InLineLoader