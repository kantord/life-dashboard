
import { Box, Card, CardContent, Grid, Typography, Button, AppBar, Toolbar } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Navbar
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default function Dashboard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'rgba(211, 211, 211, 1)' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5">Full Width Card</Typography>
                <Typography variant="body1">Hello World</Typography>
                <Button variant="contained" sx={{ mt: 1 }}>Button</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5">Half Width Card 1</Typography>
                <Typography variant="body1">Hello World</Typography>
                <Button variant="contained" sx={{ mt: 1 }}>Button</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5">Half Width Card 2</Typography>
                <Typography variant="body1">Hello World</Typography>
                <Button variant="contained" sx={{ mt: 1 }}>Button</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">One Third Width Card 1</Typography>
                <Typography variant="body1">Hello World</Typography>
                <Button variant="contained" sx={{ mt: 1 }}>Button</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">One Third Width Card 2</Typography>
                <Typography variant="body1">Hello World</Typography>
                <Button variant="contained" sx={{ mt: 1 }}>Button</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">One Third Width Card 3</Typography>
                <Typography variant="body1">Hello World</Typography>
                <Button variant="contained" sx={{ mt: 1 }}>Button</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

