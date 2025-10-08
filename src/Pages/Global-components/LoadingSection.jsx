import { Ring } from "ldrs/react";
import "ldrs/react/Ring.css";

import React from "react";

const Loading = () => {
    return (
        <div className="container-center flex items-center justify-center aspect-square md:aspect-[3/1] ">
            <Ring
                size='40'
                stroke='5'
                bgOpacity='0'
                speed='2'
                color='#863dfd'
            />
        </div>
    );
};

export default Loading;
