import { Paper, PaperProps } from "@mui/material";

type SectionProps = PaperProps;

export default function Section(props: SectionProps) {
  return (
    <Paper
      {...props}
      variant="outlined"
      sx={{ padding: (theme) => theme.spacing(2), ...props.sx }}
    />
  );
}
