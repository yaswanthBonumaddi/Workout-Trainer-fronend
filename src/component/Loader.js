import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }}
  >
    <InfinitySpin color="grey" />
  </div>
);

export default Loader;
