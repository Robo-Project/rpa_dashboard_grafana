import axios from 'axios';

const backToken = 'BACKTOKEN';
const URL = 'http://localhost:4000';

const getAllJobs = async () => {
  const res = await axios.get(`${URL}/jobs`);
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
