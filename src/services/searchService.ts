import request from '../utils/request';

export const search = async (q: string, type: string = 'less') => {
  console.log(request);
  try {
    const res = await request.get('/users/search', {
      params: {
        q,
        type,
      },
    });

    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
