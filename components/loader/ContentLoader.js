import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const ContentLoader = () => {
  return (
    <>
      <div className="contentLoader">
        <img src="/assets/img/Aqare-Finder-Logo.png" className="img-sppiner" />
        <div className="spinners">
          <ClipLoader color="#fff" loading="true" size={100} />
        </div>
      </div>
    </>
  );
};

export default ContentLoader;
