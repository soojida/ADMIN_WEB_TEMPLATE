// 공통
import React, { useState } from "react";

// 라이브러리
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box } from "@mui/material";

// 컴포넌트
import CustomDatePicker from "@/components/atoms/picker/CustomDatePicker";

const CustomDatePickerRange = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex" alignItems="center" gap={1}>
        <CustomDatePicker
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          defaultValue={new Date("2022-04-17T15:30")}
        />
        <span>~</span>
        <CustomDatePicker
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          minDate={startDate || undefined} // 시작일 이후만 선택 가능
        />
      </Box>
    </LocalizationProvider>
  );
};

export default React.memo(CustomDatePickerRange);
