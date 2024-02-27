"use client";
import React, { useEffect, useState } from "react";
import API from "../services/api";

export default function Filters() {
  const [departamentos, setDepartamentos] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [distritos, setDistritos] = useState([]);

  useEffect(() => {
    API.getDepartments().then(({ data }) => setDepartamentos(data));
  }, []);

  const handleChangeDepartamentos = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const departmentSelected = e.target.value;
    if (departmentSelected === "") {
      setProvincias([]);
      setDistritos([]);
      return;
    }

    const { data: provinciesData } = await API.getProvincias(
      departmentSelected
    );
    setProvincias(provinciesData);
  };
  const handleChangeProvincias = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinciaSelected = e.target.value;
    if (provinciaSelected === "") {
      setDistritos([]);
      return;
    }

    const { data: distritosData } = await API.getDistritos(
      provinciaSelected
    );
    setDistritos(distritosData);
  };

  return (
    <div className="flex justify-center gap-x-5 py-7">
      <select onChange={handleChangeDepartamentos}>
        <option value="">Departamento...</option>
        {departamentos.map((departamento: any) => (
          <option
            key={departamento.name}
            value={departamento.departamento_inei}
          >
            {departamento.name}
          </option>
        ))}
      </select>
      <select onChange={handleChangeProvincias}>
        <option value="selecciones">Provincia...</option>
        {provincias.map((provincia: any) => (
          <option key={provincia.name} value={provincia.provincia_inei}>
            {provincia.name}
          </option>
        ))}
      </select>
      <select>
        <option value="selecciones">Distrito..</option>
        {distritos.map((distrito: any) => (
          <option key={distrito.name} value={distrito.ubigeo_reniec}>
            {distrito.name}
          </option>
        ))}
      </select>
    </div>
  );
}
