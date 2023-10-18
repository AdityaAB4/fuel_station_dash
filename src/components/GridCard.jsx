import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const GridCard = (props) => {
  const [listViewOn, setListViewOn] = useState(true);
  const [fuelStations, setFuelStations] = useState([]);
  const [activeFuelStations, setActiveFuelStations] = useState([]);

  const changeView = () => {
    if (listViewOn) {
      setListViewOn(false);
    } else {
      setListViewOn(true);
    }
  };

  useEffect(() => {
    // Define the URL for your Express server
    const apiUrl = "http://localhost:5000/fuel-stations"; // Update with your server URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setFuelStations(data))
      .catch((error) =>
        console.error("Error fetching fuel stations: " + error)
      );
    console.log(fuelStations);
  }, []);

  useEffect(() => {
    // Define the URL for your Express server
    const apiUrl = "http://localhost:5000/active-fuel-stations"; // Update with your server URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setActiveFuelStations(data))
      .catch((error) =>
        console.error("Error fetching fuel stations: " + error)
      );
    console.log(activeFuelStations);
  }, []);

  useEffect(() => {}, [listViewOn]);
  return (
    <div>
      {" "}
      <Grid container spacing={12} marginTop={4}>
        {fuelStations.map((single) => {
          const {
            fs_id,
            status,
            last_seen,
            last_updated_timestamp,
            temperature,
            humidity,
          } = single;
          return (
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {fs_id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {status}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {humidity}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {temperature}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {last_seen}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
      {/* <div className="card">
        <div className="card-header">{props.fs_id}</div>
        <div className="card-body">
          <h5 className="card-title">{props.status}</h5>
          <h5 className="card-title">{props.humidity}</h5>
          <h5 className="card-title">{props.temperature}</h5>
          <p className="card-text">{props.last_seen}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default GridCard;
