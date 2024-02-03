import { ReactVideoJs, VideoJsOptions } from "../";

function App() {
  const videoJsOptions: VideoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://imdb-video.media-imdb.com/vi4045260569/1434659607842-pgv4ql-1701709976592.mp4?Expires=1706945765&Signature=LCXNzkkze8AKWc8QYqL3BJQqPYp9Ta0tatv0XhH-Sr47~6tYjuRltOVRy8Cl0K7V8~HkocI9dwCnudUJEhThoWalFV9XnxtTZitFpl5GnnpUct2-sMiHtuCUL6SABSsoC7IIvDPM3A-ZlH7EVekRa9Z22uJszQbz3-qm5-AipemAow1Ogg-heGPbMF40WNSc9VJqiaRXdiNsT42m88668bhaMzBs6sB4pF2ZHAkxzc~SMf74391hpjbQGvt9CuNy6iQJRO0beV1Bc5y3QesAjU0RzLdKDGG-hKJ97F8AM-9hgnq7MgpdAqwrnBkRMBIW0DMxeVSChHjY~7YywI2wvg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        type: "video/mp4",
      },
    ],
    autoSetup: true,
  };

  const handlePlayerReady = (player) => {
    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
      }}
    >
      <ReactVideoJs options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default App;
