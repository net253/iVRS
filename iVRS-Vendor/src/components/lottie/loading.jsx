import Lottie from "lottie-react";
import loading from "./loading.json";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "83vh",
        width: "99vw",
        alignItems: "center",
      }}
    >
      <Lottie animationData={loading} style={{ width: "100px" }} />
    </div>
  );
};

export default Loading;
