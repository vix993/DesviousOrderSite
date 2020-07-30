import React from 'react';
import { SpotifyCardContainer } from './styles';

function getSpotifyEmbed(spotifyURL) {
  const embedCode = spotifyURL.split('/');
  embedCode.splice(3, 0, 'embed');
  const newEmbedCode = embedCode.join('/');
  return newEmbedCode;
}

function SpotifyCard({ songTitle, songURL, categoryColor }) {
  return (
    <SpotifyCardContainer
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
    >
      <iframe
        src={getSpotifyEmbed(songURL)}
        width="300"
        height="380"
        allowtransparency="true"
        allow="encrypted-media"
        title={songTitle}
       />
    </SpotifyCardContainer>
  );
}

export default SpotifyCard;
