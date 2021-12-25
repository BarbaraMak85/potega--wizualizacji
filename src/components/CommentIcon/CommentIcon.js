import React from "react";
import { FaRegComment } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import styles from "./CommentIcon.module.scss";
const CommentIcon = () => {
  return (
    <div>
      <Tooltip title="Dodaj komentarz">
        <Button>
          <FaRegComment className={styles.buttonComment} />
        </Button>
      </Tooltip>
    </div>
  );
};

export default CommentIcon;
