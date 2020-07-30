import React from 'react';
import { SpotifyCardContainer } from './styles';

function getSpotifyEmbed(spotifyURL) {
  let embedCode = spotifyURL.split('/');
  embedCode.splice(3, 0, "embed");
  let newEmbedCode = embedCode.join('/')
  return newEmbedCode;
}
// let embedCode = this.props.src.split('/')
// embedCode.splice(3, 0, "embed")
// //console.log(embedCode)
// let newEmbedCode = embedCode.join('/')
// //console.log(newEmbedCode)


function SpotifyCard({ songTitle, songURL, categoryColor }) {
  return (
    <SpotifyCardContainer
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
    >
      <iframe src={getSpotifyEmbed(songURL)}
        width="300" height="380"
        allowtransparency="true"
        allow="encrypted-media" title={songTitle}
      >
      </iframe>
    </SpotifyCardContainer>
  );
}

export default SpotifyCard;
