import API from "@/app/services/api";

export async function GET(request: Request, { params }: { params: { name: string } }){

  const {data: ubigeoData} = await API.all()
  const paramsDepartment = params.name.toLocaleLowerCase()

  const filterProvincias = ubigeoData.filter((region: any) => (region.departamento_inei.toLocaleLowerCase() === paramsDepartment ))

  const provincias: any = {}

  filterProvincias.forEach((provincia: any) => {
    provincias[provincia.provincia] ??= {
      name: provincia.provincia,
      provincia_inei: provincia.provincia_inei,     
    }
  })

  const formatProvincias = Object.values(provincias)

  const body = {
    data: formatProvincias,
    total: formatProvincias.length,
  }
  return Response.json(body)
}