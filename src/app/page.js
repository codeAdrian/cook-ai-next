import React from "react";

import dynamic from "next/dynamic";

const Steps = dynamic(() => import("../components/Steps/Steps"), {
  ssr: false,
  loading: () => <div style={{ height: "1px" }} />,
});

const Home = () => {
  return (
    <div className="stretch-and-center">
      <Steps />
    </div>
  );
};

export default Home;
