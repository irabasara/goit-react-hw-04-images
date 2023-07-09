const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '36518003-e50cc2d75c5794a64cca810ae';

const getGallery = async (searchText, page) => {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );

  if (response.ok) {
    return response.json();
  }

  return await Promise.reject(new Error(`Oops... that's all `));
};

const api = {
  getGallery,
};

export default api;
