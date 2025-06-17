// 공통
import React, { useState } from "react";

// 라이브러리
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box } from "@mui/material";
import CustomTimePicker from "@/components/atoms/picker/CustomTimePicker";

const CustomTimePickerRange = () => {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box display="flex" alignItems="center" gap={1}>
        <CustomTimePicker
          value={startTime}
          onChange={(newValue) => setStartTime(newValue)}
          defaultValue={new Date("2022-04-17T15:30")}
        />
        <span>~</span>
        <CustomTimePicker
          value={endTime}
          onChange={(newValue) => setEndTime(newValue)}
          minTime={startTime ?? undefined} // 시작 시간 이후만 선택 가능
        />
      </Box>
    </LocalizationProvider>
  );
};

export default React.memo(CustomTimePickerRange);
