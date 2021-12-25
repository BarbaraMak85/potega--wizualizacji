import React from "react";
import { BiCalendar } from "react-icons/bi";
import Button from "@mui/material/Button";
import styles from "./DataIcon.module.scss";
import { Tooltip } from "@mui/material";
const DataIcon = () => {
  return (
    <div>
      <Tooltip title="data postu">
        <Button>
          <BiCalendar className={styles.buttonComment} />
        </Button>
      </Tooltip>
    </div>
  );
};

export default DataIcon;
