import {
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { StyledButton } from "../pages/RegisterStyles";
  
  const UpdateBlogForm = ({blogUpdate, setBlogUpdate, handleSubmit}) => {
    return (
      <div>
        <Typography
          variant="h4"
          component="h1"
          fontFamily={"Girassol"}
          marginTop="2rem"
          color={"darkblue"}
        >
          ── New Blog ──
        </Typography>
        <CssBaseline/>
        <Container maxWidth="sm">
          <Grid container spacing={3} padding="10px">
            <Grid item xs={12}>
              <TextField
                id="outlined-text-input"
                label="Title"
                type="text"
                style={{ width: "20rem" }}
                required
                onChange={(e) => setBlogUpdate({ ...blogUpdate, title: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-url-input"
                label="Image URL"
                type="url"
                style={{ width: "20rem" }}
                required
                onChange={(e) => setBlogUpdate({ ...blogUpdate, image: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-text-input"
                label="Description"
                type="text"
                style={{ width: "20rem" }}
                multiline
                rows={8}
                required
                onChange={(e) => setBlogUpdate({ ...blogUpdate, description: e.target.value })}
              />
            </Grid>
          </Grid>
          <StyledButton type="submit" onClick={handleSubmit}>Submit</StyledButton>
        </Container>
      </div>
    );
  };
  
  export default UpdateBlogForm;
  