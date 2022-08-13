import axios from  'axios';


const axiosAPI = axios.create(
    {
      baseURL:"http://localhost:3006", 
    }
);

export default axiosAPI;