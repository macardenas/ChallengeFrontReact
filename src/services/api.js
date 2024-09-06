
export const getList = async () => {
    let resp = await fetch('http://localhost:3001/api/files/data', {
        'Content-Type': 'application/json',
        headers: { Authorization: 'Bearer estoesuntokenbearer' }
      })
      let data = await resp.json();
      return data;
}

export const FileList = async () => {
  let resp = await fetch('http://localhost:3001/api/files/list', {
      'Content-Type': 'application/json',
      headers: { Authorization: 'Bearer estoesuntokenbearer' }
    })
    let data = await resp.json();
    return data;
}

export const SearchFile = async (value) => {
  let resp = await fetch('http://localhost:3001/api/files/data/'+value, {
      'Content-Type': 'application/json',
      headers: { Authorization: 'Bearer estoesuntokenbearer' }
    })
    let data = await resp.json();
    return data;
}