import { useEffect, useState } from 'react' 
 
/* Example console input that works: 
curl -d "grant_type=client_credentials&client_id=6Y4IftgsO8VzS5zou594eyFkvC16tspy0OX49l3aENaYu62LgE&client_secret=Q3twZATL1r6u4Mn2CRjiLFehMETe9aZdcDWuP8Sr" https://api.petfinder.com/v2/oauth2/token

cd c:/curl
curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2WTRJZnRnc084VnpTNXpvdTU5NGV5Rmt2QzE2dHNweTBPWDQ5bDNhRU5hWXU2MkxnRSIsImp0aSI6IjFkZjBjOTVmOWRiMzFjMTFkNGE3YzkyNTc4MWU5ODZmNWMxNzI0NWRjZDY0YTU5M2U2ZTk4NTE3ZWE5MTc4YTI1OTNlZjg2Y2M4NGI2NDc2IiwiaWF0IjoxNjY4NjY5MzIyLCJuYmYiOjE2Njg2NjkzMjIsImV4cCI6MTY2ODY3MjkyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.uBD1ZTGAtIMrGPPdTF_YwPv4xP96dEvvnXYdH0RGK2TCdk84ke1lhXK8IEif5p20BJaVeTHxjOY-n4x3bRouT53y--WJQ2Va93oQ8kD5-EN6ajpL30gZ0SIsKrtEVjlZ8opacwLoQdE8vNu1Pkt8AQiAy0DviD6as6IClc_U3wUhUBry5Vk_uqWwBTVEGUZeFGmpO9DIlMvcfLhhtqnsR8A22ygWzf84V-e9pqHDXdZCSsGDxEqYmLQfooQMrBEUKPmgf3KaZivQx0CEoCW2a9tN9nQwrPAkRkcKoOC_j9P0EfCfvoGxWjsMssSkEQD5msVzo2XARtqsheEPaztimg" https://api.petfinder.com/v2/animals?type=dog&page=2
*/
function GetRequest() {   
  const [data, setData] = useState(null)
  const [token, setToken] = useState(null) 

  useEffect(() => { 
    fetch('https://api.petfinder.com/v2/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=6Y4IftgsO8VzS5zou594eyFkvC16tspy0OX49l3aENaYu62LgE&client_secret=Q3twZATL1r6u4Mn2CRjiLFehMETe9aZdcDWuP8Sr'
    })
      .then(response => response.json())
      .then(token => setToken(token.access_token))
  }, [])

  useEffect(() => {  
    fetch('https://api.petfinder.com/v2/animals?type=dog&page=2', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json()) 
      .then(data => setData(data))
      .catch(error => console.log(error)) 
  }, [])   
  
  // type animal = {
  //   id: number,
  //   name: string,
  //   type: string,
  // };
  // const result = JSON.parse(JSON.stringify(data)) as animal;
  // alert(result)
 
  return ( 
    //jquery to display json data 
    <div>
      <h1>Get Request</h1> 
      <p>{typeof data} {JSON.stringify(data)}</p> 
    </div>
    // <div>{JSON.stringify(data)}</div>
  )
} 


export { GetRequest };
