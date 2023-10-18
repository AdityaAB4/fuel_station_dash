import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListCard = (props) => {
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Last Seen&nbsp;(g)</TableCell>
              <TableCell align="right">Humidity&nbsp;(g)</TableCell>
              <TableCell align="right">Temperature&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fuelStations.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.fs_id}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.last_seen}</TableCell>
                <TableCell align="right">{row.humidity}</TableCell>
                <TableCell align="right">{row.temperature}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            {props.fs_id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.status}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.humidity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.temperature}
          </Typography>
        </CardContent>
      </Card> */}
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

export default ListCard;
