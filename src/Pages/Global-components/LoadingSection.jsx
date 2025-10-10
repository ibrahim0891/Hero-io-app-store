import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";
import 'ldrs/react/Zoomies.css'
import { Zoomies } from 'ldrs/react'

import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'



const LoadingRing = ({ color, size, label, className }) => {
    return (
        <div className={`${className} container-center flex flex-col items-center justify-center my-80 backdrop-blur-md w-full cursor-progress `}>
            <Ring
                size={size ?? 40}
                stroke='5'
                bgOpacity='0'
                speed='2'
                color={color ?? '#863dfd'}
            />
            <p className="my-6 text-center"> {label ?? 'Loading...'} </p>
        </div>
    );
};
const LoadingZoomie = ({ color, size, label, className }) => {
    return (
        <div className={`${className} container-center flex flex-col items-center justify-center my-80 backdrop-blur-md w-full cursor-progress `}>
            <Zoomies
                size={size ?? 150}
                stroke="5"
                bgOpacity="0.1"
                speed="1.4"
                color={color ?? '#863dfd'}
            />
            <p className="my-6 text-center"> {label ?? 'Loading..'}.</p>
        </div>
    );
};

const LoadingTailChase = ({ color }) => {
    return (
        <div className="container-center flex items-center justify-center my-80 backdrop-blur-md w-full cursor-progress ">
            <TailChase
                size="40"
                speed="1.75"
                color={color ?? '#863dfd'}
            />
        </div>
    );
};

let Loading = {
    LoadingRing, LoadingZoomie, LoadingTailChase
}
export default Loading;
