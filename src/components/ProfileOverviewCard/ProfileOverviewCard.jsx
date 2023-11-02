import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Grid
} from "@mui/material";

export default function ProfileOverviewCard({ user }) {
  if (user)
    return (
      <Card>
        <CardContent>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* Avatar */}
            <Grid item xs={3} sx={{ textAlign: "center" }}>
              <Avatar
                alt={user.firstName + " " + user.lastName}
                src={user.pictureUrl}
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxWidth: "100%"
                }}
              />
            </Grid>
            {/* Separator */}
            <Grid item xs={1}>
              <Divider
                orientation="vertical"
                variant="middle"
                sx={{ height: "240px" }}
              />
            </Grid>
            <Grid item xs={8} sx={{ textAlign: "center" }}>
              {/* Text Info Section */}
              <Typography variant="h5">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {user.position}
              </Typography>
              <Typography color="text.secondary">{user.ssn}</Typography>
              <Typography color="text.secondary">
                Date of birth: {user.dob}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
}
