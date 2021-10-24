import React from "react";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="bottom">
      <Button
        startIcon={<GitHubIcon />}
        color="primary"
        // variant="outlined"
        target="_blank"
        href="https://github.com/basedvegan"
      >
        GitHub
      </Button>

      <Button
        startIcon={<LinkedInIcon />}
        color="primary"
        // variant="outlined"
        target="_blank"
        href="https://www.linkedin.com/in/amandaalburez/"
      >
        LinkedIn
      </Button>
    </div>
  );
}
