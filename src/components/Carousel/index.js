import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import SpotifyCard from './components/SpotifyCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  isSpotifyPlaybutton,
  category,
}) {
  const isYoutubeLink = category.videos[0];
  const categoryTitle = category.title;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const elements = isYoutubeLink ? category.videos : category.spotify;
  console.log(elements);
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {elements.map((element, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }
          else if (isSpotifyPlaybutton){
            return (
              <SliderItem key={element.titulo}>
              <SpotifyCard
                songTitle="hello"
                songURL={element.url}
                categoryColor={categoryColor}
              />
              </SliderItem>
            )
          }

          return (
            <SliderItem key={element.titulo}>
              <VideoCard
                videoTitle={element.titulo}
                videoURL={element.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
