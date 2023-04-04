import React  from "react";
import { ReactDOM } from "react";

const test=(props)=>{
    const status=props.growth_status;
    return <div className="super-container">
        <div className="container">
            <div className="context-1">
                <div className="title">
                     {props.title}
                </div>
                <div className="growth">
                     {props.growth}
                     { status ? "^" :"-"}
                </div>
            </div>
            <div className="context-2">
                 <div>
                  {props.user_no}
                 </div>
            </div>
            <div className="context-3">
                <div className="link">
                    <a href={props.link}>users</a>
                </div>
                <div className="icon">
                    <img src={props.icon}/>
                </div>
            </div>
            

        </div>
    </div>
}

export default test