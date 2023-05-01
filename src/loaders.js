const URL = "http://localhost:4000"

export const iceCreamsLoader = async () => {
  const response = await fetch(URL + "/icecreams")
  const icecreams = await response.json()
  return icecreams
}