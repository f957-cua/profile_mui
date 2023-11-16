import Card from "../component/Card";
import Accordion from "../component/Accordion";
import { Container } from "@mui/material";

export default function Main(props: any) {
  return (
    <Container sx={{ marginBottom: 1 }}>
      <Card />
      <Accordion />
    </Container>
  );
}
