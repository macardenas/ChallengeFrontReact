
export const getList = async () => {
    let resp = await fetch('http://localhost:3001/api/files/data', {
        'Content-Type': 'application/json',
      })
      let data = await resp.json();
      return data;
}