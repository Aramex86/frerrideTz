import React, { FC, useEffect, useState } from "react";
import { Table } from "antd";
import { getHouses } from "../../Api/api";
import { Housetype } from "../../Types/Types";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Адрес ",
    dataIndex: "address",
  },
  {
    title: "Кол-во квартир",
    dataIndex: "reestrFlatCount",
  },
  {
    title: "Дату добавления",
    dataIndex: `createdAt`,
    render: (date: string) => getNewDateFormat(date),
  },
];

const getNewDateFormat = (date: string) => {
  return new Date(date).toLocaleDateString().replaceAll("/", ".");
};

type PropsType = {
  companyId?: number;
};

const TableData: FC<PropsType> = ({ companyId }) => {
  const [houseData, setHouseData] = useState<Housetype>();

  useEffect(() => {
    if (!companyId) {
      console.log(`Please select Company`);
    } else {
      getHouses.houses(companyId).then((res) => setHouseData(res));
    }
  }, [companyId]);

  return (
    <>
      <Table
        columns={columns}
        dataSource={houseData?.data}
        rowKey="id"
        pagination={{
          pageSizeOptions: ["5", "10", "25"],
          showSizeChanger: true,
        }}
      />
    </>
  );
};

export default TableData;
