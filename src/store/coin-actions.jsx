import { coinActions } from './coin-slice';
import axios from 'axios';
import { SingleCoin } from '../config/api';

export const fetchCoin = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios(SingleCoin(id));

      if (!response.status === 200) {
        throw new Error('Could not fetch coin information');
      }

      const data = response.data;
      return data;
    };

    try {
      const data = await fetchData();
      dispatch(
        coinActions.setCoinData({
          id,
          data,
        })
      );
    } catch (e) {
      console.log(e);
    }
  };
};
