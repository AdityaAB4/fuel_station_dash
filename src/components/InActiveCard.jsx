import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const InActiveCard = () => {
  const [inactiveFuelStations, setInActiveFuelStations] = useState([]);

  useEffect(() => {
    // Define the URL for your Express server
    const apiUrl = "http://localhost:5000/inactive-fuel-stations"; // Update with your server URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setInActiveFuelStations(data))
      .catch((error) =>
        console.error("Error fetching fuel stations: " + error)
      );
    console.log(inactiveFuelStations);
  }, []);

  return (
    <div>
      {inactiveFuelStations.map((single) => {
        const {
          fs_id,
          status,
          last_seen,
          last_updated_timestamp,
          temperature,
          humidity,
        } = single;
        return (
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
                {inactiveFuelStations.map((row) => (
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
          //   <Card>
          //     <CardContent>
          //       <Typography variant="h6" component="div">
          //         Id: {fs_id}
          //       </Typography>
          //       <Typography variant="body2" color="text.secondary">
          //         Stauts: {status}
          //       </Typography>
          //       <Typography variant="body2" color="text.secondary">
          //         Humidity: {humidity}
          //       </Typography>
          //       <Typography variant="body2" color="text.secondary">
          //         Temperature: {temperature}
          //       </Typography>
          //       <Typography variant="body2" color="text.secondary">
          //         Last Seen: {last_seen}
          //       </Typography>
          //       <Typography variant="body2" color="text.secondary">
          //         Last Updated Timestamp: {last_updated_timestamp}
          //       </Typography>
          //     </CardContent>
          //   </Card>
        );
      })}
    </div>
  );
};

export default InActiveCard;
