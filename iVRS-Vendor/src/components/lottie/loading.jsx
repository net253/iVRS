import Lottie from "lottie-react";
import loading from "./loading.json";
import React from "react";

const style = {
  height: "50vh",
  width: "100%",
};

const Loading = () => {
  return <Lottie animationData={loading} style={style} />;
};

export default Loading;
