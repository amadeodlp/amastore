import React, { useState, useEffect } from "react";
import { Container, LinearProgress } from "@mui/material";

type Props = {};

const Progress: React.FC<Props> = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress): number => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        paddingX: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ top: 300 }}
      />
    </Container>
  );
};

export default Progress;
