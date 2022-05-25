import styled from "@emotion/styled";
import { Masonry } from "@mui/lab";
import { Box, Container, Card, CardHeader } from "@mui/material";

interface ICardsProps {}

const SpaceDiv = styled(Box)`
  height: 5em;
`;

const StyledCard = styled(Card)`
  font-weight: bold;
  border-radius: 10px;
`;

const Cards: React.FunctionComponent<ICardsProps> = () => {
  return (
    <>
      <Container>
        <SpaceDiv />
        <Masonry columns={3} spacing={2}>
          <StyledCard>
            <CardHeader title="Quick shortcuts" />
          </StyledCard>

          <StyledCard>
            <CardHeader title="Recent Notebooks" />
          </StyledCard>

          <StyledCard>
            <CardHeader title="Recent Pipeline" />
          </StyledCard>

          <StyledCard>
            <CardHeader title="Recent Pipeline Runs" />
          </StyledCard>

          <StyledCard>
            <CardHeader title="Documentation" />
          </StyledCard>
        </Masonry>
      </Container>
    </>
  );
};

export default Cards;
