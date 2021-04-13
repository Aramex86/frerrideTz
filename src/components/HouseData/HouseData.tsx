import React, { useEffect, useState } from "react";
import { getCompanies } from "../../Api/api";
import { CompaniesType } from "../../Types/Types";

import { Select } from "antd";
import TableData from "../Table/Table";
import Advice from "../common/Advice";

const HouseData = () => {
  const [companyList, setCompanyList] = useState<Array<CompaniesType>>();
  const [companyId, setCompanyId] = useState<number>();

  useEffect(() => {
    getCompanies.companies('').then((res) => setCompanyList(res.data));
  }, []);

  function handleChange(value: number) {
    setCompanyId(value);
  }

  return (
    <div>
      <h1>House Data</h1>
      {!companyId ? <Advice /> : null}
      <Select
        style={{ width: 250, position: "absolute", left: "42px", top: "42px" }}
        onChange={handleChange}
      >
        {companyList?.map(({ id, shortName }) => (
          <Select.Option key={id} value={id}>
            {shortName}
          </Select.Option>
        ))}
      </Select>

      <TableData companyId={companyId} />
    </div>
  );
};

export default HouseData;
