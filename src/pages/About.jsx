import "./About.css";
import { Box, Typography } from "@mui/material";
import Navbar from "../comps/Navbar";
import Info from "../data/people.json";
import StickyFooter from "../comps/StickyFooter";
// import Contact from "../comps/Contact";

export default function About() {
  return (
    <Box className="about-page">
      <Box className="navbar">
        <Navbar {...{ page: "About" }} />
      </Box>

      <Box className="content" sx={{ flex: 1 }}>
        <Box className="presidents">
          <Typography className="title-typography" variant="h1">Co-Presidents</Typography>
          <Box className="box-item">
            <Box className="sub-box">
              <img
                src={Info.Presidents[0].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography className="name-typography" variant="h4" sx={{ textAlign: "center" }}>
                {Info.Presidents[0].name}
              </Typography>
              <Typography  className="typography" variant="body1" sx={{ textAlign: "center" }}>
                {Info.Presidents[0].bio}
              </Typography>
            </Box>
            <Box className="sub-box">
              <img
                src={Info.Presidents[1].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography  className="name-typography" variant="h4" sx={{ textAlign: "center" }}>
                {Info.Presidents[1].name}
              </Typography>
              <Typography  className="typography"  variant="body1" sx={{ textAlign: "center" }}>
                {Info.Presidents[1].bio}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="chiefStaff">
          <Typography className="title-typography"  variant="h1">Chief of Staff</Typography>
          <Box className="box-item">
            <Box className="sub-box">
              <img
                src={Info.chiefOfStaff[0].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography className="name-typography"  variant="h4" sx={{ textAlign: "center" }}>
                {Info.chiefOfStaff[0].name}
              </Typography>
              <Typography  className="typography"  variant="body1" sx={{ textAlign: "center" }}>
                {Info.chiefOfStaff[0].bio}
              </Typography>
            </Box>
            <Box className="sub-box">
              <img
                src={Info.chiefOfStaff[1].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography className="name-typography"  variant="h4" sx={{ textAlign: "center" }}>
                {Info.chiefOfStaff[1].name}
              </Typography>
              <Typography  className="typography"  variant="body1" sx={{ textAlign: "center" }}>
                {Info.chiefOfStaff[1].bio}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="events">
          <Typography className="title-typography"  variant="h1">Events</Typography>
          <Box className="box-item">
            <Box className="sub-box">
              <img
                src={Info.Events[0].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography className="name-typography"  variant="h4" sx={{ textAlign: "center" }}>
                {Info.Events[0].name}
              </Typography>
              <Typography  className="typography"  variant="body1" sx={{ textAlign: "center" }}>
                {Info.Events[0].bio}
              </Typography>
            </Box>
            <Box className="sub-box">
              <img
                src={Info.Events[1].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography  className="name-typography" variant="h4" sx={{ textAlign: "center" }}>
                {Info.Events[1].name}
              </Typography>
              <Typography  className="typography"  variant="body1" sx={{ textAlign: "center" }}>
                {Info.Events[1].bio}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="internals">
          <Typography className="title-typography"  variant="h1">Internals</Typography>
          <Box className="box-item">
            <Box className="sub-box">
              <img
                src={Info.Internals[0].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography className="name-typography"  variant="h4" sx={{ textAlign: "center" }}>
                {Info.Internals[0].name}
              </Typography>
              <Typography  className="typography"  variant="body1" sx={{ textAlign: "center" }}>
                {Info.Internals[0].bio}
              </Typography>
            </Box>
            <Box className="sub-box">
              <img
                src={Info.Internals[1].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography  className="name-typography" variant="h4" sx={{ textAlign: "center" }}>
                {Info.Internals[1].name}
              </Typography>
              <Typography  className="typography"  variant="body1" sx={{ textAlign: "center" }}>
                {Info.Internals[1].bio}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="it">
          <Typography className="title-typography"  variant="h1">I/T</Typography>
          <Box className="box-item">
            <Box className="sub-box">
              <img
                src={Info.IT[0].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography className="name-typography"  variant="h4" sx={{ textAlign: "center" }}>
                {Info.IT[0].name}
              </Typography>
              <Typography  className="typography"  variant="body1" sx={{ textAlign: "center" }}>
                {Info.IT[0].bio}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="finance">
          <Typography className="title-typography"  variant="h1">Finance</Typography>
          <Box className="box-item">
            <Box className="sub-box">
              <img
                src={Info.Finance[0].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography className="name-typography"  variant="h4" sx={{ textAlign: "center" }}>
                {Info.Finance[0].name}
              </Typography>
              <Typography  className="typography"  variant="body1" sx={{ textAlign: "center" }}>
                {Info.Finance[0].bio}
              </Typography>
            </Box>
            <Box className="sub-box">
              <img
                src={Info.Finance[1].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography  className="name-typography" variant="h4" sx={{ textAlign: "center" }}>
                {Info.Finance[1].name}
              </Typography>
              <Typography   className="typography" variant="body1" sx={{ textAlign: "center" }}>
                {Info.Finance[1].bio}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="graphics">
          <Typography className="title-typography"  variant="h1">Graphics</Typography>
          <Box className="box-item">
            <Box className="sub-box">
              <img
                src={Info.Graphics[0].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography  className="name-typography" variant="h4" sx={{ textAlign: "center" }}>
                {Info.Graphics[0].name}
              </Typography>
              <Typography   className="typography" variant="body1" sx={{ textAlign: "center" }}>
                {Info.Graphics[0].bio}
              </Typography>
            </Box>
            <Box className="sub-box">
              <img
                src={Info.Graphics[1].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography  className="name-typography" variant="h4" sx={{ textAlign: "center" }}>
                {Info.Graphics[1].name}
              </Typography>
              <Typography   className="typography" variant="body1" sx={{ textAlign: "center" }}>
                {Info.Graphics[1].bio}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="outreach">
          <Typography className="title-typography" variant="h1">Outreach</Typography>
          <Box className="box-item">
            <Box className="sub-box">
              <img
                src={Info.Outreach[0].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography  className="name-typography" variant="h4" sx={{ textAlign: "center" }}>
                {Info.Outreach[0].name}
              </Typography>
              <Typography   className="typography" variant="body1" sx={{ textAlign: "center" }}>
                {Info.Outreach[0].bio}
              </Typography>
            </Box>
            <Box className="sub-box">
              <img
                src={Info.Outreach[1].img}
                style={{ width: "100%", height: "auto" }}
              />
              <Typography className="name-typography"  variant="h4" sx={{ textAlign: "center" }}>
                {Info.Outreach[1].name}
              </Typography>
              <Typography   className="typography" variant="body1" sx={{ textAlign: "center" }}>
                {Info.Outreach[1].bio}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Spacer to prevent footer overlap */}
      <Box sx={{height: "180px"}} />

      <Box className="footer">
        <StickyFooter />
      </Box>
    </Box>
  );
}
