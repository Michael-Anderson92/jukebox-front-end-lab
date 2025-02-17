const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;
console.log(BASE_URL);

async function index() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function create(formData){

  const response = await fetch(BASE_URL, {
      // specify http method
      method: 'POST',
      // specify headers to tell the express server
      // we are sending json
      headers: {
          'Content-Type': 'application/json'
      },
      // body is the data we are sending to the server
      // wrap it in json
      body: JSON.stringify(formData)
  })
  console.log(response)
    try {

        // opening up the json (parse the json)
        const data = await response.json()
        return data

    } catch(err){
        console.log(err)
    }
}

async function deleteTrack(trackId) {
  try {
    const response = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default { index, create, delete: deleteTrack };
export { deleteTrack };