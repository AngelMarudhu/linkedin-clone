import styled from "styled-components";

const Main = (props) => {
  return (
    <Container>
      <ArtCard>Marudhupandiyan</ArtCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;
const ArtCard = styled.div`
  text-align: center;
`;

export default Main;
