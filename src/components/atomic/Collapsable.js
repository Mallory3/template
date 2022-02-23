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
        <div className="grid grid-cols-3">
          <div className="p-1">
            <Header key={props.index} text={props.title} size="5"/ >
          </div>
          <div className="grid content-center px-2 bg-blue-500 justify-self-center rounded">
            <Header key={props.index} text={props.price} size="6" color="light" / >
          </div>
          <button 
            className="p-1 justify-self-end header" 
            {...getToggleProps()}
          >
            {isExpanded ? expandIcon : collapseIcon}
          </button>
        </div>
        <div {...getCollapseProps()}>
          <div className="flex bg-gray-100 mt-4 p-6">
            <IoIosInformationCircle className="infoIcon mr-2" />
            <p key={props.index}>{props.description}</p>
          </div>
        </div>
      </div>
    );
}

export default Collapsable;
