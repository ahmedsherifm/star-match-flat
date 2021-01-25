import React from "react";

import utils from "../../utils/utils";

const StarsDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.count).map((starId) => (
        <div key={starId} className="star"></div>
      ))}
    </>
  );
};

export default StarsDisplay;
