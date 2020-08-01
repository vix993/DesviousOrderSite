import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithContent()
      .then((categoriesWithContent) => {
        console.log(categoriesWithContent);
        setInitialData(categoriesWithContent);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>

      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[1].videos[0].title}
                url={initialData[1].videos[0].url}
                videoDescription={"Water Walking, a song by Desvious Order off of their upcoming EP 'Afraid at 27'. “I love this song and if anything, I hope the message gets across so that anyone that listens can relieve themselves of the fear to move towards their growth.” - Victor"}
              />

              <Carousel
                isSpotifyPlaybutton
                category={initialData[0]}
              />

            </div>
          );
        }
        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
        {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Water Walking, a song by Desvious Order off of their upcoming EP 'Afraid at 27'. “I love this song and if anything, I hope the message gets across so that anyone that listens can relieve themselves of the fear to move towards their growth.” - Victor"}
      />

      <Carousel
        isSpotifyPlaybutton
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      
      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Carousel
        category={dadosIniciais.categorias[6]}
        />       */}

    </PageDefault>
  );
}

export default Home;