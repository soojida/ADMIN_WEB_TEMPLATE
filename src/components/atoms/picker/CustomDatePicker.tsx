// 공통
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { transparentize } from "polished";

// 라이브러리
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
} from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Popper, TextField } from "@mui/material";

// 아이콘
import { RiCalendarFill } from "react-icons/ri";

type DatePickerProps = {
  className?: string;
  label?: string;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
} & Omit<DesktopDatePickerProps, "value" | "onChange">;
const CustomDatePicker = ({
  className,
  label,
  value,
  onChange,
  ...restProps
}: DatePickerProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DataPickerForm className={className}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label={label}
          value={value}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          onChange={() => {
            setOpen(false); // 선택 즉시 닫기
            if (onChange) onChange;
          }}
          format="yyyy.MM.dd"
          defaultValue={new Date("2022-04-17T15:30")}
          enableAccessibleFieldDOMStructure={false}
          {...restProps}
          slots={{
            openPickerIcon: RiCalendarFill,
            popper: (params) => (
              <Popper
                {...params}
                modifiers={[
                  {
                    name: "offset",
                    options: {
                      offset: [0, 8],
                    },
                  },
                ]}
                style={{ width: "auto" }}
                sx={{
                  "& .MuiDateCalendar-root": {
                    width: 290,
                    maxHeight: 300,
                  },
                  "& .MuiYearCalendar-root": {
                    width: 290,
                    maxHeight: 245,
                    "& .MuiYearCalendar-button": {
                      fontSize: "14px",

                      "&.Mui-selected": {
                        background: theme.color.primary,
                      },
                    },
                  },
                  "& .MuiButtonBase-root": {
                    "&.Mui-selected": {
                      background: transparentize(0.3, theme.color.primary),

                      "&:hover": {
                        background: theme.color.primary,
                      },
                    },
                  },
                }}
              />
            ),
            textField: (params) => (
              <TextField
                {...params}
                variant="outlined"
                fullWidth={true}
                onClick={() => setOpen(true)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: 38,
                    // hover 시 스타일
                    "&:hover fieldset": {
                      borderColor: theme.color.blueGray100,
                    },
                    // 포커스 시 스타일
                    "&.Mui-focused fieldset": {
                      borderWidth: 1,
                      borderColor: theme.color.blueGray100,
                      boxShadow: "none",
                    },
                  },
                  // 기본 선 스타일
                  "& .MuiOutlinedInput-notchedOutline": {
                    top: 0,
                    borderColor: theme.color.blueGray100,
                  },
                  // 포커스 시 선 스타일
                  ".Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderWidth: 1,
                  },
                  // 입력창 스타일
                  "& input": {
                    padding: "0 12px",
                    fontSize: "13px",
                    textAlign: "center",
                  },
                }}
              />
            ),
          }}
        />
      </LocalizationProvider>
    </DataPickerForm>
  );
};

export default React.memo(CustomDatePicker);

const DataPickerForm = styled.div`
  width: 100%;
  height: 38px;

  svg {
    font-size: 18px;
    fill: ${({ theme }) => theme.color.gray300};
  }
`;
