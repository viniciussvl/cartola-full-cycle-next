import { Typography, TypographyProps } from "@mui/material";

type LabelProps = TypographyProps;

export default function Label(props: LabelProps) {
  return <Typography variant="h6" component="span" {...props} />;
}
