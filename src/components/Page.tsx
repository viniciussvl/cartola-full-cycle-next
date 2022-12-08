import { Container } from "@mui/material";
import { PropsWithChildren } from "react";

export default function Page(props: PropsWithChildren) {
  return (
    <Container sx={{ paddingTop: (theme) => theme.spacing(3) }}>
      {props.children}
    </Container>
  );
}
