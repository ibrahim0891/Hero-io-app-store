import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";
import 'ldrs/react/Zoomies.css'
import { Zoomies } from 'ldrs/react'

import {TailChase} from 'ldrs/react'
import 'ldrs/react/TailChase.css'



const LoadingRing = ({color}) => {
    return (
        <div className="container-center flex items-center justify-center w-full aspect-square md:aspect-[2/1] cursor-progress ">
            <Ring
                size='40'
                stroke='5'
                bgOpacity='0'
                speed='2'
                color={color ?? '#863dfd'}
            />
        </div>
    );
};
const LoadingZoomie = ({color}) => {
    return (
        <div className="container-center flex items-center justify-center w-full aspect-square md:aspect-[2/1] cursor-progress ">
            <Zoomies
                size="150"
                stroke="5"
                bgOpacity="0.1"
                speed="1.4"
                color={color ?? '#863dfd'}
            />
        </div>
    );
};

const LoadingTailChase = ({color}) => {
    return (
        <div className="container-center flex items-center justify-center w-full aspect-square md:aspect-[2/1] cursor-progress ">
            <TailChase
                size="40"
                speed="1.75"
                color={color ?? '#863dfd'}
            />
        </div>
    );
};

let Loading = {
    LoadingRing , LoadingZoomie , LoadingTailChase
}
export default Loading;
