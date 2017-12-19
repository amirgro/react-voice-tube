import React from "react";

import VoiceTube from "./voiceTube"

class Player extends React.Component {
  
//
  constructor(props) {
    super(props);
    this.state = { showMic: false }
  }

  render() {

    const micStyle = {
      width: '45px',
      height: '45px',
      padding: '5px',
      display: this.state.showMic ? 'block' : 'none'
    }

    const playerStyle = {
      display:'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
    
    const sidebarStyle = {

    }
    return (
      <div style={playerStyle}>
        <VoiceTube 
          videoId="2g811Eo7K8U" 
          onSoundStart={() => this.setState({ showMic: true })}
          onSoundEnd={() => this.setState({ showMic: false })}
        />
        <div style={sidebarStyle}>
          <img alt="mic" style={micStyle} src={'https://media.giphy.com/media/AheiBsf6UlLqw/source.gif'} />
        </div>
      </div>
    );
  }
}

export default Player;
