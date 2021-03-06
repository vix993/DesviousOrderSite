import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import spotifyRepository from '../../../repositories/spotify';
import categoriesRepository from '../../../repositories/categories';


function RegisterVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  const { handleChange, values } = useForm({
    title: 'Hurt - Johnny Cash',
    url: 'https://open.spotify.com/track/28cnXtME493VX9NOw9cIUh',
    category: 'Spotify',
    platform: 'spotify',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);
  console.log(categories);
  return (
    <PageDefault>
      <h1>Register Content</h1>
      <form onSubmit={(event) => {
        event.preventDefault();

        const chosenCategory = categories.find((category) => {
          return category.title === values.category;
        });
        if (values.platform === 'spotify') {
          spotifyRepository.create({
            categoryId: chosenCategory.id,
            title: values.title,
            url: values.url,
          })
            .then(() => {
              console.log('Succesfully created');
              history.push('/');
            });
        } else if (values.platform === "videos") {
          videosRepository.create({
              categoryId: chosenCategory.id,
              title: values.title,
              url: values.url,
        })
          .then(() => {
        console.log('Succesfully created');
            history.push('/');
          });
        } else {
        console.log('That platform is not compatible.');
        }
      }}
      >
        <FormField
        value={values.title}
        onChange={handleChange}
        label="title"
        field="title"
      />
      <FormField
        value={values.url}
        onChange={handleChange}
        label="link"
        field="url"
      />
      <FormField
        value={values.platform}
        onChange={handleChange}
        label="Platform"
        field="platform"
      />
      <FormField
        value={values.category}
        onChange={handleChange}
        label="Category"
        field="category"
        suggestions={categoryTitles}
      />
      <Button type="submit">
        Register
        </Button>
      </form>
    <Link to="/register/category">
      Register Category
      </Link>
    </PageDefault >
  );
}

export default RegisterVideo;