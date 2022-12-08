import { Box, BoxProps, Typography } from "@mui/material";
import Image from "next/image";
import Label from "./Label";

type TeamLogoProps = BoxProps;

export default function TeamLogo(props: TeamLogoProps) {
  return (
    <Box
      {...props}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...props.sx,
      }}
    >
      <Image
        src="/img/my-team-logo.svg"
        width={84.5}
        height={88.5}
        alt="my logo"
        priority={true}
      />

      <Label>Meu time FC</Label>
    </Box>
  );
}
