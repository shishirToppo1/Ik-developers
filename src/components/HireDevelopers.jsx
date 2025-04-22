import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

function HireDevelopers() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          // border: "1px solid red",
          padding: "40px",
          justifyContent: "space-between",
          alignItems: "center",
          background:
            "linear-gradient(25deg,rgba(155, 181, 191, 0.27),rgb(215, 214, 207))",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            // border: "1px solid red",
            width: "50%",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Hire the best developers and designers around!
          </Typography>
        </Box>
        {/* <Typography variant='h4'sx={{ fontWeight: "bold" }}></Typography> */}

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100px",
              //   border: "1px solid red",
              margin: "auto",
              marginBottom: "20px",
            }}
          >
            <Box
              sx={{
                height: "20px",
                border: "1px solid red",
                width: 0,
                rotate: "-45deg",
              }}
            />
            <Box
              sx={{
                height: "20px",
                border: "1.5px solid red",
                width: 0,
                // marginBottom: "-20px",
                marginTop: "-5px",
              }}
            />
            <Box
              sx={{
                height: "20px",
                border: "1px solid red",
                width: 0,
                rotate: "45deg",
              }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              padding: "0px 20px",
              height: "40px",
              background:
                "linear-gradient(25deg,rgb(198, 94, 10),rgb(237, 204, 55))",
            }}
          >
            Hire Top Developers
          </Button>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100px",
              //   border: "1px solid red",
              margin: "auto",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                height: "20px",
                border: "1px solid red",
                width: 0,
                rotate: "45deg",
              }}
            />
            <Box
              sx={{
                height: "20px",
                border: "1.5px solid red",
                width: 0,
                // marginBottom: "-20px",
                marginTop: "5px",
              }}
            />
            <Box
              sx={{
                height: "20px",
                border: "1px solid red",
                width: 0,
                rotate: "-45deg",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{mt:'50px',display:"flex",justifyContent:"space-around"}}>
        <Box sx={{width:"300px"}}>
            <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    // width:'200px',
                    // justifyContent: 'space-between',
                    alignItems: 'center',


                }}>
            <Typography variant="body1">
            <img src={"./Logo.png"} />
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "black",
              paddingLeft: "20px",
              fontFamily: "Inspiration",
            }}
          >
            Ik developers
          </Typography>
            </Box>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>

          <Typography variant="body1">
          <img src={"./googlepage.png"} />
          </Typography>
        </Box>

        <Box>
            <Typography sx={{mb:"10px"}}>Links</Typography>
            <Typography>About</Typography>
            <Typography>Services</Typography>
            <Typography>case Studies</Typography>
            <Typography>How it works</Typography>
            <Typography>Blogs</Typography>
            <Typography>Careers</Typography>
            <Typography>Areas We Serve</Typography>
        </Box>

        <Box>
          <Typography>Contact us </Typography>
          <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</Typography>
          <Typography>+92318356921</Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default HireDevelopers;
