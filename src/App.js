import "./App.css";
import * as React from "react";
import { API } from "aws-amplify";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { BoxProps } from "@mui/material/Box";
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";

const myAPI = "api426c55e3";
const path = "/validate";

const Container = styled("div")({
  display: "flex",
  justifyContent: "center",
  flexFlow: "column",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100vh",
});

const temperatures = ["kelvin", "celsius", "fahrenheit", "rankine"];

const volumes = [
  "liters",
  "tablespoons",
  "cubic inches",
  "cups",
  "cubic feet",
  "gallons",
];

function App() {
  const [initialProblemUnit, setInitialProblemUnit] = React.useState();
  const [studentProblemUnit, setStudentProblemUnit] = React.useState();
  const [initialValue, setInitialValue] = React.useState();
  const [studentValue, setStudentValue] = React.useState();

  const handleInitalValueChange = (event) =>
    setInitialValue(event.target.value);
  const handleInitialProblemChange = (event) =>
    setInitialProblemUnit(event.target.value);

  const handleStudentValueChange = (event) =>
    setStudentValue(event.target.value);
  const handleStudentChange = (event) =>
    setStudentProblemUnit(event.target.value);

  const handleCalculate = () => {
    const payload = {
      initialProblem: {
        value: parseInt(initialValue),
        unitOfMeasure: initialProblemUnit,
      },
      studentResponse: {
        value: parseInt(studentValue),
        unitOfMeasure: studentProblemUnit,
      },
    };

    console.log(payload);
    validate(payload);
  };

  const validate = (payload) => {
    const endpoint = `${path}/`;
    const myInit = { body: payload };
    API.post(myAPI, endpoint, myInit)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getInitialProblemOptions = () => {
    const options = [...temperatures, ...volumes];
    const menuItems = options.map((option) => {
      return (
        <MenuItem value={option}>{capitalizeFirstLetter(option)}</MenuItem>
      );
    });

    return menuItems;
  };

  const getStudentProblemOptions = () => {
    const options = [...temperatures, ...volumes];
    const menuItems = options.map((option) => {
      return (
        <MenuItem value={option}>{capitalizeFirstLetter(option)}</MenuItem>
      );
    });

    return menuItems;
  };
  return (
    <>
      <Container>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h3" component="h2">
            Unit Conversion Validator
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }} mt={8}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
            <Box mr={3}>
              <TextField
                label="Value"
                variant="standard"
                onChange={handleInitalValueChange}
              />
            </Box>
            <Box>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-unit-1">Select Unit</InputLabel>
                <Select
                  labelId="select-unit-1"
                  value={initialProblemUnit}
                  label="Select Unit"
                  onChange={handleInitialProblemChange}
                >
                  {getInitialProblemOptions()}
                </Select>
              </FormControl>
            </Box>
            <Box>
              <EastIcon fontSize={"large"} color={"primary"} />
            </Box>
            <Box>
              <TextField
                label="Value"
                variant="standard"
                onChange={handleStudentValueChange}
              />
            </Box>
            <Box>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-unit-2">Select Unit</InputLabel>
                <Select
                  labelId="select-unit-2"
                  value={studentProblemUnit}
                  label="Select Unit"
                  onChange={handleStudentChange}
                >
                  {getStudentProblemOptions()}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box mt={8}>
          <Button
            variant={"contained"}
            disableElevation={true}
            onClick={handleCalculate}
          >
            Calculate
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
