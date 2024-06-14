import server from './axios';

const http = {
  get: (url: string, params: any) => {
    return new Promise((resolve, reject) =>{        
      server.get(url, {            
          params: params        
      }).then(res => {
          resolve(res.data);
      }).catch(err =>{
          reject(err.data)  
    })      
  }) 
  },
  post: (url: string, params: any) => {
    return new Promise((resolve, reject) =>{        
      server.post(url, params).then(res => {
          resolve(res.data);
      }).catch(err =>{
          reject(err.data)  
      })
    }) 
  },
  put: (url: string, params: any) => {
    return new Promise((resolve, reject) =>{        
      server.put(url, {            
          params: params        
      }).then(res => {
          resolve(res.data);
      }).catch(err =>{
          reject(err.data)  
      })
    }) 
  },
  delete: (url: string, params: any) => {
    return new Promise((resolve, reject) =>{        
      server.delete(url, {            
          params: params        
      }).then(res => {
          resolve(res.data);
      }).catch(err =>{
          reject(err.data)  
      })
    }) 
  },
}

export default http