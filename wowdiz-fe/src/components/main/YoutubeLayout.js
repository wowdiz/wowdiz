import ReactPlayer from "react-player";

function YoutubeLayout() {
    return (
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=1wkcx_48Ph8"}
          style={{position:"relative",left:"0px", maxWidth:"440px", maxHeight:"250px", width:"fit-content"}}
          playing={true}
          muted={true}
          controls={true}
        />
    );
  }
  export default YoutubeLayout;