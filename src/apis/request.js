const API_ENT_POINT = 'https://jsonplaceholder.typicode.com';

const request = async (url, options = {}) => {
  try {
    const response = await fetch(`${API_ENT_POINT}/${url}`, options);

    if (response.ok) {
      const json = await response.json();
      return json;
    }

    throw new Error('요청 실패');
  } catch (error) {
    throw new Error(`이슈: ${error.mess}`);
  }
};

export default request;
