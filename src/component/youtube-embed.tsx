"use client";

import { useEffect, useState } from "react";
import React from "react";

function YoutubeEmbed({ videoID }: { videoID: string }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    setPlay(false);
  }, [videoID]);

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "0",
          paddingTop: "56.25%",
        }}
      >
        <div
          id="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 1,
          }}
          onClick={() => setPlay(true)}
        >
          {!play && (
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(https://img.youtube.com/vi/${videoID}/mqdefault.jpg)`,
                backgroundSize: "cover",
              }}
            ></div>
          )}
          {play && (
            <div style={{ width: "100%", height: "100%" }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoID}?modestbranding=1&disablekb=1&cc_lang_pref=ko&fs=0&hl=ko&rel=0&autoplay=1`}
                style={{ border: "none" }}
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default React.memo(YoutubeEmbed);
