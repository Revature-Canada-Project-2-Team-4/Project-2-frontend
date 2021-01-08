import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";

export const CreateNewService: React.FunctionComponent<any> = (props) => {
  const [servicePrice, changeServicePrice] = useState("");
  const [serviceType, changeServiceType] = useState("");

  let history = useHistory();

  const handleServiceTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeServiceType(e.target.value);
  };

  // This will handle the password change and update state
  const handleServicePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeServicePrice(e.target.value);
  };
  // Synthetic event is from react for creating a standard event between different browsers
  const handleSubmitNewService = async (e: React.SyntheticEvent) => {
    // Prevent default html submit behaviour
    e.preventDefault();
    console.log("need to create a new service offering here");
  };

  return (
    <>
      <h1>Create a new service offering</h1>
      <form onSubmit={handleSubmitNewService} noValidate autoComplete="off">
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <TextField
              value={serviceType}
              onChange={handleServiceTypeChange}
              id="username-input"
              type="text"
              label="Username"
              variant="outlined"
              autoComplete="off"
            />
          </Grid>
          <Grid item>
            <TextField
              value={servicePrice}
              onChange={handleServicePriceChange}
              id="password-input"
              type="text"
              label="Password"
              variant="outlined"
              autoComplete="off"
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
