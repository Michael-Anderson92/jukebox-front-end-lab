const BASE_URL = `${import.meta.env.VITE_API_URL}/tracks`

async function index(){
  try {
      const response = await fetch(BASE_URL)
      // parse the json (Opening the json box to get our array of objects)
      const data = await response.json()
      // return the data out of the function when we call it
      return data 
  } catch(err){
      console.log(err)
  }
}


async function create(trackData){
  try {
      const response = await fetch(BASE_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(trackData)
      })
      const data = await response.json()
      return data
  } catch(err){
      console.log(err)
  }
}

export { index, create }