// 공통
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";

// 라이브러리
import {
  DesktopTimePicker,
  DesktopTimePickerProps,
} from "@mui/x-date-pickers/DesktopTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Popper, TextField } from "@mui/material";

// 아이콘
import { RiTimeFill } from "react-icons/ri";
import { transparentize } from "polished";

type TimePickerProps = {
  className?: string;
  label?: string;
  value?: Date | null;
  onChange?: (time: Date | null) => void;
} & Omit<DesktopTimePickerProps, "value" | "onChange">;

const CustomTimePicker = ({
  className,
  label,
  value,
  onChange,
  ...restProps
}: TimePickerProps) => {
  const theme = useTheme();
  const [time, setTime] = useState(() => {
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    return now;
  });
  const [open, setOpen] = useState<boolean>(false);

  return (
    <TimePickerForm className={className}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopTimePicker
          label={label}
          value={value !== undefined ? time : value}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          onChange={(val: any) => {
            setTime(val);
            setOpen(false); // 선택 즉시 닫기
            if (onChange) onChange;
          }}
          defaultValue={new Date("2022-04-17T15:30")}
          enableAccessibleFieldDOMStructure={false}
          {...restProps}
          slots={{
            actionBar: () => null,
            openPickerIcon: RiTimeFill,
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
                  "& .MuiButtonBase-root": {
                    fontSize: "13px",

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
                      cursor: "pointer",
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
      </LocalizationProvider>{" "}
    </TimePickerForm>
  );
};

export default React.memo(CustomTimePicker);

const TimePickerForm = styled.div`
  position: relative;
  width: 100%;
  height: 38px;

  svg {
    font-size: 18px;
    fill: ${({ theme }) => theme.color.gray300};
  }
`;
