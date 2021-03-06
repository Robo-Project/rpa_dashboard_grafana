import axios from 'axios';

const backToken = 'BACKTOKEN';
const URL = 'BACKURL';

const getAllJobs = async () => {
  const res = await axios.get(`${URL}/jobs`, {
    headers: {
      authorization: backToken,
    },
  });
  return res.data;
};

const build = async (job: any, parameters: any, branch: any = 'master') => {
  const res = await axios.post(`${URL}/build/${job}/${branch}`, {
    parameters: parameters,
    token: backToken,
  });
  return res.data;
};

export default { getAllJobs, build };
