import API from "@/app/services/api";

export async function GET(
  request: Request,
  { params }: { params: { name: string } }
) {
  const { data: ubigeoData } = await API.all();
  const paramsProvincias = params.name.toLocaleLowerCase();

  const distritos = ubigeoData
    .filter((distrito: any) => distrito.provincia_inei === paramsProvincias)
    .map((distrito: any) => ({
      name: distrito.distrito,
      ubigeo_reniec: distrito.ubigeo_reniec,
      ubigeo_inei: distrito.ubigeo_inei
    }));

  const body = {
    data: distritos,
    total: distritos.length,
  };
  return Response.json(body);
}
