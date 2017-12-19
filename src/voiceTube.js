import React from "react";
import annyang from "annyang";
import YouTube from "react-youtube"

class VoiceTube extends React.Component {

  componentDidMount() {
    if (annyang) {
      debugger
      // Let's define our first command. First the text we expect, and then the function it should call
      var commands = {
        'play': () => {
          this.youtubeControl.playVideo()
        },
        'pause': () => {
          console.log('ppp')
          this.youtubeControl.pauseVideo()
        }

      };

      // Add our commands to annyang
      annyang.addCommands(commands);
      annyang.setLanguage('en-US');
      annyang.addCallback('soundstart', this.props.onSoundStart)
      annyang.addCallback('result', this.props.onSoundEnd)
      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start({ continuous: false });
      annyang.debug()
    }
  }

  render() {
    const opts = {
      height: '200',
      width: '300',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        autohide: 1
      }
    };

    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={(event) => { this.youtubeControl = event.target; }}
      />
    );
  }
}

export default VoiceTube;
