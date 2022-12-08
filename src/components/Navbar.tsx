import { AppBar, Avatar, Box, Button, Chip, Toolbar } from "@mui/material";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

type NavbarItemProps = LinkProps & { showUnderline: boolean };

function NavbarItem(props: PropsWithChildren<NavbarItemProps>) {
  const { showUnderline, ...linkProps } = props;
  return (
    //@ts-expect-error
    <Button
      component={Link}
      sx={{
        color: "white",
        display: "inline-block",
        textAlign: "center",
        "&::after": (theme) => ({
          content: '""',
          borderBottom: showUnderline
            ? `4px solid ${theme.palette.primary.main}`
            : "4px solid transparent",
          width: "100%",
          display: "block",
        }),
      }}
      {...linkProps}
    />
  );
}

export default function NavBar() {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "none", boxShadow: "none" }}>
        <Toolbar>
          <Image
            src="/img/logo.png"
            width={315}
            height={58}
            alt="Logo"
            priority={true}
          />
          <Box sx={{ flexGrow: 1, ml: (theme) => theme.spacing(4) }}>
            <NavbarItem href="/" showUnderline={router.pathname === "/"}>
              Home
            </NavbarItem>
            <NavbarItem
              href="/players"
              showUnderline={router.pathname === "/players"}
            >
              Escalação
            </NavbarItem>
            <NavbarItem
              href="/matches"
              showUnderline={["/matches", "/matches/[id]"].includes(
                router.pathname
              )}
            >
              Jogo
            </NavbarItem>
          </Box>

          <Chip
            label={"300"}
            color="secondary"
            avatar={<Avatar>C$</Avatar>}
          ></Chip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
