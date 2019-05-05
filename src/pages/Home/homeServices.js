import api from '../../services/api';

const HomeServices = {
  addRepository: async (repositoryName) => {
    const response = await api.get(`repos/${repositoryName}`);
    return response;
  },
};

export default HomeServices;
