import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


const ExpandableText = ({ content,charLimit}) => {
  const [expandableText, setExpandText] = useState(false);

  const showText = () => setExpandText(true);
  const hideText = () => setExpandText(false);
  const shortText = content.length <= charLimit

  function test(e){
    console.log(e.target)
  }

  if (shortText) {
    return (
      <div>
        <p>
          {content}
        </p>
      </div>)
  }
  if (expandableText) {
    return (
      <div className="expandedText"> 
        <p>
          {content}&nbsp;
          <span>
            <button className="text-blue-600" onClick={hideText}>Read less <IoIosArrowUp className="inline expandTextIcon" /></button>
          </span>
        </p>
      </div>
    )
  }
  
  const text = content.substring(0, charLimit)

  return (
    <div> 
      <p>
        {text} 
        <button className="text-blue-600" onClick={showText}>...Read more <IoIosArrowDown className="inline expandTextIcon" /></button>
      </p>
    </div>
  )
}

const ExpandText = (props) => {

  return(
    <div className="min-h-max">
      <ExpandableText content={props.content} charLimit={250} /> 
    </div>
  )
}

export default ExpandText;


