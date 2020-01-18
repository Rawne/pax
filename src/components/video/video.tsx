import React from 'react'
import PaxMp4 from '../../media/pax-web.mp4';
import PaxOgv from '../../media/pax-web.ogv';
import PaxWebm from '../../media/pax-web.webm';
import PaxJpg from '../../media/pax-web.jpg';
import './video.scss'

interface VideoProps {
}

export default class Video extends React.Component<VideoProps> {
  
  render() {
    const { } = this.props;
    return (
      <div className="fullscreen-bg">
        <video className="fullscreen-bg__video" loop muted autoPlay poster={PaxJpg}>
          <source src={PaxMp4} type="video/mp4" />
          <source src={PaxOgv} type="video/mp4" />
          <source src={PaxWebm} type="video/mp4" />
          <p>This browser does not support the video element.</p>
        </video>
      </div>
    );
  }
}
