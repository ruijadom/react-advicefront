async function fetchData(url: string) {
  const apiurl = process.env.API_URL

  const response = await fetch(`${apiurl}${url}`)

  if (!response.ok) {
    throw new Error('Problem fetching data')
  }

  const dataFromServer = await response.json()

  return dataFromServer
}

export default fetchData
