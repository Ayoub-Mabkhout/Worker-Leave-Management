import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import leaves from "../../data/leaves.json";
import { useState } from "react";
import Button from "@mui/material/Button";

function LeavesTable() {
  const getDurationInDays = (startDate, endDate) => {
    const start = new Date(startDate);
    console.log("start date", startDate);
    const end = new Date(endDate);
    return Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
  };

  const statusColorMap = {
    pending: "orange",
    approved: "lime",
    consumed: "green",
    rejected: "red"
  };

  const [open, setOpen] = useState(false);
  const [selectedLeaveId, setSelectedLeaveId] = useState(null);

  const handleCancel = (leaveId) => {
    setSelectedLeaveId(leaveId);
    setOpen(true);
  };

  const handleClose = (confirm) => {
    if (confirm) {
      // Perform cancellation logic here
      console.log(`Cancelled leave with ID: ${selectedLeaveId}`);
    }
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bolder", fontSize: "1.2em" }}>
                ID
              </TableCell>
              <TableCell style={{ fontWeight: "bolder", fontSize: "1.2em" }}>
                Start Date
              </TableCell>
              <TableCell style={{ fontWeight: "bolder", fontSize: "1.2em" }}>
                End Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                Duration
              </TableCell>
              <TableCell style={{ fontWeight: "bolder", fontSize: "1.2em" }}>
                Type
              </TableCell>
              <TableCell style={{ fontWeight: "bolder", fontSize: "1.2em" }}>
                Status
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", fontSize: "1.2em" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaves.map((leave) => (
              <TableRow hover key={leave.id} style={{ height: "50px" }}>
                <TableCell style={{ fontWeight: "bold" }}>{leave.id}</TableCell>
                <TableCell>{leave.startDate}</TableCell>
                <TableCell>{leave.endDate}</TableCell>
                <TableCell>
                  {getDurationInDays(leave.startDate, leave.endDate)}
                </TableCell>
                <TableCell>{leave.type}</TableCell>
                <TableCell
                  style={{
                    color: statusColorMap[leave.status] || "black",
                    fontWeight: "bold"
                  }}
                >
                  {leave.status}
                </TableCell>
                <TableCell style={{ width: "25px" }}>
                  {(leave.status === "pending" ||
                    leave.status === "approved") && (
                    <IconButton
                      color="secondary"
                      aria-label="cancel leave"
                      onClick={() => handleCancel(leave.id)}
                    >
                      <CancelIcon />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={() => handleClose(false)}>
        <DialogTitle>{"Cancel Leave?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to cancel this leave?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            No
          </Button>
          <Button onClick={() => handleClose(true)} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LeavesTable;
