import API from "@/app/services/api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { data } = await API.all();

  const departmens: any = {};

  data.forEach((region: any) => {
    departmens[region.departamento] ??= {
      name: region.departamento,
      macroregion_inei: region.macroregion_inei,
      macroregion_minsa: region.macroregion_minsa,
      departamento_inei: region.departamento_inei
    };
  });

  const formatDepartmens = Object.values(departmens)

  const body = {
    total: formatDepartmens.length,
    data: formatDepartmens,
  }
  return NextResponse.json(body);
}
