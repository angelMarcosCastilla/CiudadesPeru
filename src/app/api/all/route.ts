import Papa from "papaparse"

export async function GET(request: Request) {
  const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vREsVf5qEUgRQI1uyLqohAC9_Q_kCcWcViWa6-mG0nYcLWoVksjYD_QYDIOStCxtnWfAKsZhAEOpspb/pub?output=csv")

  const responseText = await response.text();
  const data = await new Promise((resolve, reject) => {
    Papa.parse(responseText, {
      header: true,
      complete: results => {
        return resolve(results.data)
      }
    })
  })
  return Response.json({data})
}
