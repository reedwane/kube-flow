import styled from "@emotion/styled";
import { Masonry } from "@mui/lab";
import { Box, Container, Card, Typography, Divider } from "@mui/material";

interface ICardsProps {}

const SpaceDiv = styled(Box)`
  height: 5em;
`;

const StyledCard = styled(Card)`
  font-weight: bold;
  border-radius: 5px;
  padding: 1em;
`;

const textStyles = {
  fontSize: "1rem",
  fontWeight: 500,
  minHeight: "2em",
};

const Cards: React.FunctionComponent<ICardsProps> = () => {
  return (
    <>
      <Container>
        <SpaceDiv />
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
          <StyledCard>
            <Typography variant="h5" color="initial" sx={textStyles}>
              Quick shortcuts
            </Typography>
            <Divider />
          </StyledCard>

          <Masonry columns={1} spacing={2}>
            <StyledCard>
              <Typography variant="h5" color="initial" sx={textStyles}>
                Recent Notebooks
              </Typography>
              <Divider />
              <Typography variant="body2" color="initial" fontStyle={"italic"}>
                Choose a namespace to see Notebooks
              </Typography>
            </StyledCard>

            <StyledCard>
              <Typography variant="h5" color="initial" sx={textStyles}>
                Recent Pipeline
              </Typography>
              <Divider />
              <Typography variant="body2" color="initial" fontStyle={"italic"}>
                Error retrieving Pipelines
              </Typography>
            </StyledCard>

            <StyledCard>
              <Typography variant="h5" color="initial" sx={textStyles}>
                Recent Pipeline Runs
              </Typography>
              <Divider />
              <Typography variant="body2" color="initial" fontStyle={"italic"}>
                Error retrieving Pipeline Runs
              </Typography>
            </StyledCard>
          </Masonry>

          <StyledCard>
            <Typography variant="h5" color="initial" sx={textStyles}>
              Documentation
            </Typography>
            <Divider />
          </StyledCard>
        </Masonry>
      </Container>
    </>
  );
};

export default Cards;
