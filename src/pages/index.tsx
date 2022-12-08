import { Groups } from "@mui/icons-material";
import { Button, Divider, Grid, styled } from "@mui/material";
import Link from "next/link";
import Label from "../components/Label";
import Page from "../components/Page";
import Section from "../components/Section";
import TeamLogo from "../components/TeamLogo";

const BudgetContainer = styled(Section)(({ theme }) => ({
  width: "800px",
  height: "300px",
  marginTop: theme.spacing(8),
  display: "flex",
  alignItems: "center",
}));

export default function Home() {
  return (
    <Page>
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: (theme) => theme.spacing(3),
        }}
      >
        <Grid item>
          <TeamLogo
            sx={{ position: "absolute", left: 0, right: 0, m: "auto" }}
          />
          <BudgetContainer>
            <Grid container>
              <Grid
                item
                xs={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Label>Última pontuação</Label>
                <Label>99.94</Label>
              </Grid>

              <Grid
                item
                xs={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Divider
                  orientation="vertical"
                  sx={{ height: "auto" }}
                ></Divider>
              </Grid>

              <Grid
                item
                xs={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Label>Patrimonio</Label>
                <Label>300</Label>
              </Grid>
            </Grid>
          </BudgetContainer>
        </Grid>

        <Grid item>
          <Button
            component={Link}
            href="/players"
            variant="contained"
            startIcon={<Groups />}
          >
            Escalar jogadores
          </Button>
        </Grid>
      </Grid>
    </Page>
  );
}
