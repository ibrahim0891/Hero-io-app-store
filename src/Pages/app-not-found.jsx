import React from "react";
import SectionHeading from "./Global-components/SectionHeading";
import Button from "./Global-components/Button";
import { Link, useNavigate } from "react-router";

const AppNotFound = () => {
  
    return (
        <div className='py-16 flex-1'>
            <img src='/assets/App-Error.png' alt='' className='m-auto' />
            <SectionHeading
                heading={"OPPS!! APP NOT FOUND"}
                subHeading={
                    "The App you are requesting is not found on our system.  please try another apps."
                }
            />
            <Link to={'/apps'}>
            <Button className={"m-auto block"} > Go Back! </Button>
            </Link>
        </div>
    );
};

export default AppNotFound;
