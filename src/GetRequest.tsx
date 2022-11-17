import { useEffect, useState } from 'react' 
 
/* Example console input that works:
cd c:/curl
curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2WTRJZnRnc084VnpTNXpvdTU5NGV5Rmt2QzE2dHNweTBPWDQ5bDNhRU5hWXU2MkxnRSIsImp0aSI6IjFkZjBjOTVmOWRiMzFjMTFkNGE3YzkyNTc4MWU5ODZmNWMxNzI0NWRjZDY0YTU5M2U2ZTk4NTE3ZWE5MTc4YTI1OTNlZjg2Y2M4NGI2NDc2IiwiaWF0IjoxNjY4NjY5MzIyLCJuYmYiOjE2Njg2NjkzMjIsImV4cCI6MTY2ODY3MjkyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.uBD1ZTGAtIMrGPPdTF_YwPv4xP96dEvvnXYdH0RGK2TCdk84ke1lhXK8IEif5p20BJaVeTHxjOY-n4x3bRouT53y--WJQ2Va93oQ8kD5-EN6ajpL30gZ0SIsKrtEVjlZ8opacwLoQdE8vNu1Pkt8AQiAy0DviD6as6IClc_U3wUhUBry5Vk_uqWwBTVEGUZeFGmpO9DIlMvcfLhhtqnsR8A22ygWzf84V-e9pqHDXdZCSsGDxEqYmLQfooQMrBEUKPmgf3KaZivQx0CEoCW2a9tN9nQwrPAkRkcKoOC_j9P0EfCfvoGxWjsMssSkEQD5msVzo2XARtqsheEPaztimg" https://api.petfinder.com/v2/animals?type=dog&page=2
*/

function GetRequest() {   
  const [data, setData] = useState(null)

  useEffect(() => {  
    fetch('https://api.petfinder.com/v2/animals?type=dog&page=2', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2WTRJZnRnc084VnpTNXpvdTU5NGV5Rmt2QzE2dHNweTBPWDQ5bDNhRU5hWXU2MkxnRSIsImp0aSI6IjFkZjBjOTVmOWRiMzFjMTFkNGE3YzkyNTc4MWU5ODZmNWMxNzI0NWRjZDY0YTU5M2U2ZTk4NTE3ZWE5MTc4YTI1OTNlZjg2Y2M4NGI2NDc2IiwiaWF0IjoxNjY4NjY5MzIyLCJuYmYiOjE2Njg2NjkzMjIsImV4cCI6MTY2ODY3MjkyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.uBD1ZTGAtIMrGPPdTF_YwPv4xP96dEvvnXYdH0RGK2TCdk84ke1lhXK8IEif5p20BJaVeTHxjOY-n4x3bRouT53y--WJQ2Va93oQ8kD5-EN6ajpL30gZ0SIsKrtEVjlZ8opacwLoQdE8vNu1Pkt8AQiAy0DviD6as6IClc_U3wUhUBry5Vk_uqWwBTVEGUZeFGmpO9DIlMvcfLhhtqnsR8A22ygWzf84V-e9pqHDXdZCSsGDxEqYmLQfooQMrBEUKPmgf3KaZivQx0CEoCW2a9tN9nQwrPAkRkcKoOC_j9P0EfCfvoGxWjsMssSkEQD5msVzo2XARtqsheEPaztimg`,
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json()) 
      .then(data => setData(data))
      .catch(error => console.log(error)) 
  }, []) 

          
  return (
    <div>{JSON.stringify(data)}</div>
  )
} 

export { GetRequest };
