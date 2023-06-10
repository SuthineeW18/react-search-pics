import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID T98HYkWgvROz89Kw-SsERZzAQI_D-fS0NvxDicUz30c',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
