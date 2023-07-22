function ArticleYoutubeEmbed({ videoID }: { videoID: string }) {
  const url = `https://www.youtube.com/embed/${videoID}?modestbranding=1&disablekb=1&cc_lang_pref=ko&fs=0&hl=ko&rel=0&autoplay=0`;

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
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 1,
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <iframe width="100%" height="100%" src={url}></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleYoutubeEmbed;
