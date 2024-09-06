
export const getList = async () => {
    try {
        let resp = await fetch('http://localhost:3001/api/files/data', {
            'Content-Type': 'application/json',
            headers: { Authorization: 'Bearer estoesuntokenbearer' }
          })
          let data = await resp.json();
          return data;
    } catch (error) {
        console.error(error);
    }
    
}

export const FileList = async () => {
    try {
        let resp = await fetch('http://localhost:3001/api/files/list', {
            'Content-Type': 'application/json',
            headers: { Authorization: 'Bearer estoesuntokenbearer' }
          })
          let data = await resp.json();
          return data;
    } catch (error) {
        console.error(error)
    }
  
}

export const SearchFile = async (value) => {
    try {
        let resp = await fetch('http://localhost:3001/api/files/data/'+value, {
            'Content-Type': 'application/json',
            headers: { Authorization: 'Bearer estoesuntokenbearer' }
          })
          let data = await resp.json();
          return data;
    } catch (error) {
        console.error(error);
    }
 
}