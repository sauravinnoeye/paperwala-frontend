export const environment = {
  production: true,
  URL:'http://localhost',
  port:'8080',
  api_url:'http://localhost:8080'
};
export class Environment{
  getUrl(){
    return environment.URL + ':'+environment.port;
  }
}