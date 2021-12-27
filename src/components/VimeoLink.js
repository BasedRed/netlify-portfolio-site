import React from "react";
import Vimeo from "@u-wave/react-vimeo";

const VimeoLink = ({linkNumber}) => {
  return <Vimeo video={linkNumber} autoplay={false} responsive />;
};

export default VimeoLink;
