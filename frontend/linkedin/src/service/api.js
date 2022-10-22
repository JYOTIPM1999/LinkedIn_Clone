import axios from "axios";

const api_Url = "http://localhost:8080";
const axiosInstance = axios.create({
  baseURL: api_Url,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    //stop global loader here if you have;
    return processResponse(response);
  },
  function (error) {
    //stop global loader here if you have;
    return Promise.reject(processError(error));
  }
);

// If success -> returns { isSuccess: true, data: object }
// If fail -> returns { isFailure: true, status: string, msg: string, code: int }

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};

const processError = (error) => {
  if (error.response) {
    // Request made and server responded with a status code
    // that falls out of the range of 2xx
  } else if (error.request) {
    //Request made but no response was received
  } else {
    //something happend in setting up request that triggers an error
  }
};
