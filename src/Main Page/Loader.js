import React from "react";

function Loader() {
  return (
    <>
      <div className="loading-container" id="cont">
        {setTimeout(() => {
          document.querySelector(".loading-container").style.opacity = "0";
          document.querySelector(".loading-container").style.zIndex = "0";
          document.querySelector(".contactDetails").style.zIndex = "1";
          document.querySelector(".info").style.opacity = "1";
        }, 3000)}
      </div>
    </>
  );
}

export default Loader;
