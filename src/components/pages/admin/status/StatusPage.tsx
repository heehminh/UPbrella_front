import React from "react";
import condition from "./mock/condition.json";
import improvement from "./mock/improvement.json";
import { Typography } from "@mui/material";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const StatusPage = () => {
  // TODO - api 연결
  // 신고 내역 조회
  const improvementReports = improvement.data.improvementReports;

  // 개선 요청 내역 조회
  const conditionReports = condition.data.conditionReports;

  // TODO - UI 연결
  return (
    <div>
      <div>
        <Typography>신고 내역 조회</Typography>
        <DataTable value={improvementReports}>
          <Column field="id" header="ID" />
          <Column field="umbrellaUuid" header="umbrellaUuid" />
          <Column field="content" header="content" />
          <Column field="etc" header="etc" />
        </DataTable>
      </div>

      <div>
        <Typography>개선 요청 내역 조회</Typography>
        {/* MAP */}
        <DataTable value={conditionReports}>
          <Column field="id" header="ID" />
          <Column field="umbrellaUuid" header="umbrellaUuid" />
          <Column field="content" header="content" />
          <Column field="etc" header="etc" />
        </DataTable>
      </div>
    </div>
  );
};

export default StatusPage;
