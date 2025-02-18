export default () => ({
  port: process.env.PORT,
  apiBaseUrl: process.env.API_BASE_URL,
  populationApiUrl: process.env.POPULATION_API_URL,
  flagApiUrl: process.env.FLAG_API_URL,
});
