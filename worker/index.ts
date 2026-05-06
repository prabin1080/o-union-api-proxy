const BACKENDS = {                                        
    'api.oshounion.com':     'o-union-backend-prod-HASH-el.a.run.app',
    'api.dev.oshounion.com': 'o-union-backend-dev-jww7mjzjkq-el.a.run.app',                                                                                                                                                  
  };                                                                                                                                                                                                                         
                                                                                                                                                                                                                             
  export default {                                                                                                                                                                                                           
    async fetch(request) {                                  
      const url = new URL(request.url);
      const backend = BACKENDS[url.hostname];
      if (!backend) return new Response('Not Found', { status: 404 });                                                                                                                                                       
  
      const target = new URL(request.url);                                                                                                                                                                                   
      target.hostname = backend;                            
                                                                                                                                                                                                                             
      return fetch(new Request(target, request));
    }                                                                                                                                                                                                                        
  };
