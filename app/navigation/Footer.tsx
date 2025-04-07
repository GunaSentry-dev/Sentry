import { Container, Stack, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <footer className="text-white bg-gray-900">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className="text-sm"
        >
          <Typography variant="body2" className="text-gray-300">
            © {new Date().getFullYear()} ExpressExtension.com,
            <span className="ml-2 mr-2">
            <Link href="http://www.spanenterprises.com" target="_blank" className="text-blue-400 hover:text-blue-500">
             SPAN Enterprises LLC.
            </Link>
            </span>
            <span>
            All rights reserved.
            </span>
          </Typography>

          <Link href="https://www.expressextension.com/terms-use/" target="_blank" className="text-blue-400 hover:text-blue-500">
            Terms of Use |
          </Link>

          <Link href="https://www.expressextension.com/privacy-policy/" target="_blank" className="text-blue-400 hover:text-blue-500">
            Privacy Policy | 
          </Link>

          <Link href="https://support.expressextension.com/" className="text-blue-400 hover:text-blue-500">
          Support |
          </Link>

          <Link href="#" target="_blank" className="text-blue-400 hover:text-blue-500">
          Contact Us
          </Link>

        </Stack>
      </Container>
    </footer>
  );
}
