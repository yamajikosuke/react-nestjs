import React from "react";
import {
  Slider,
  Button,
  MenuItem,
  MenuList,
  ListItemIcon,
  ListItemText,
  Typography,
  TextField,
  alpha,
  styled,
  FormControlLabel,
  Switch,
} from "@mui/material";
import ContentCut from "@mui/icons-material/ContentCut";
import { SliderProps } from "@mui/material/Slider";

import "./customize.css";

const SuccessSlider = styled(Slider)<SliderProps>(({ theme }) => ({
  width: 300,
  color: theme.palette.success.main,
  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    },
    "&.Mui-active": {
      boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    },
  },
}));

interface StyledSliderProps extends SliderProps {
  error?: boolean;
}

const StyledSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== "error",
})<StyledSliderProps>(({ error, theme }) => ({
  ...(error && {
    // the overrides added when the new prop is used
    color: theme.palette.error.main,
    "& .MuiSlider-thumb": {
      "&:hover, &.Mui-focusVisible": {
        boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.error.main, 0.16)}`,
      },
      // https://mui.com/customization/how-to-customize/
      "&.Mui-focused": {
        boxShadow: `0px 0px 0px 14px ${alpha(
          theme.palette.success.main,
          0.16
        )}`,
      },
    },
  }),
}));

const CustomSlider = styled(Slider)({
  width: 300,
  color: "var(--color)",
  "& .MuiSlider-thumb": {
    [`&:hover, &.Mui-focusVisible`]: {
      boxShadow: "0px 0px 0px 8px var(--box-shadow)",
    },
    [`&.Mui-active`]: {
      boxShadow: "0px 0px 0px 14px var(--box-shadow)",
    },
  },
});

const successVars = {
  "--color": "#4caf50",
  "--box-shadow": "rgb(76, 175, 80, .16)",
} as React.CSSProperties;

const defaultVars = {
  "--color": "#1976d2",
  "--box-shadow": "rgb(25, 118, 210, .16)",
} as React.CSSProperties;

export const Customize: React.FC = () => {
  const [vars, setVars] = React.useState<React.CSSProperties>(defaultVars);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVars(event.target.checked ? successVars : defaultVars);
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Customize</h1>
        <div className="content">
          <div className="field">
            <a
              href="https://mui.com/customization/how-to-customize/"
              target="_blank"
              rel="noreferrer"
            >
              https://mui.com/customization/how-to-customize/
            </a>
          </div>
          <div className="field">
            <a
              href="https://mui.com/customization/color/#color"
              target="_blank"
              rel="noreferrer"
            >
              https://mui.com/customization/color/#color
            </a>
          </div>
          <hr />
          <Slider
            defaultValue={30}
            // sx={{
            //   width: 300,
            //   color: "success.main",
            // }}
            sx={{
              width: 300,
              color: "success.main",
              "& .MuiSlider-thumb": {
                borderRadius: "1px",
              },
            }}
          />
          <hr />
          <div>https://mui.com/api/button/</div>
          <Button className="Button" disabled variant="contained">
            Button
          </Button>
        </div>
        <hr />
        <div>https://mui.com/components/menus/</div>
      </div>
      <MenuList>
        <MenuItem selected className="MenuItem">
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
      </MenuList>
      <hr />
      <div>https://mui.com/components/text-fields/</div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        color="error"
        error={true}
      />
      <hr />
      Reusable style overrides
      <div>
        https://mui.com/customization/how-to-customize/#2-reusable-style-overrides
      </div>
      <SuccessSlider defaultValue={30} />
      <hr />
      Dynamic variation
      <div>
        https://mui.com/customization/how-to-customize/#3-dynamic-variation
      </div>
      <div>Dynamic CSS</div>
      <StyledSlider error />
      <div>CSS variables</div>
      <div>https://mui.com/system/the-sx-prop/</div>
      <div>https://mui.com/system/spacing/</div>
      <FormControlLabel
        control={
          <Switch
            checked={vars === successVars}
            onChange={handleChange}
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Success"
      />
      <CustomSlider style={vars} defaultValue={30} sx={{ mt: 1 }} />
    </section>
  );
};
