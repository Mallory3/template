import React from 'react';
import useCollapse from 'react-collapsed';
import Header from "./Header"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";


const Collapsable = (props) => {

    // Icons
    const collapseIcon = <IoIosArrowDown className="collapseIcon" />;
    const expandIcon = <IoIosArrowUp className="collapseIcon" />;

    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return (
      <div key={props.index} className="border border-b-0 last:border rounded p-3 collapsible">
        <div className="flex">
          <div className="grow p-1">
            <p key={props.index}>{props.title}</p>
          </div>
          <div className="flex-none grid content-center px-2 bg-green-500 justify-self-end sm:justify-self-center rounded">
            <Header className="subHeader" key={props.index} text={props.price} size="6" color="light" / >
          </div>
          <button 
            className="flex-none p-1 justify-self-end header" 
            {...getToggleProps()}
          >
            {isExpanded ? expandIcon : collapseIcon}
          </button>
        </div>
        <div {...getCollapseProps()}>
          <div className="flex p-1 sm:py-3 sm:px-2 rounded bg-blue-100 mt-4">
            <IoIosInformationCircle className="infoIcon mr-2" />
            <p key={props.index}>{props.description}</p>
          </div>
        </div>
      </div>
    );
}

export default Collapsable;
