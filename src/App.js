import React from 'react';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

import './App.css';


import MenuIcon from '@material-ui/icons/Menu';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';


import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: '300px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SiteTitle = styled.div`
  display: flex;
  flex-direction: row;
`

const PageHeading = styled.div`
  font-family: Roboto;
  font-size: 2rem;
  color: red;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledCard = styled(Card)`
  margin: 20px;
`
function App() {

  const classes = useStyles();

  return (
    <div className="App">
        <SiteMenu/>
        <Container>
          <PageHeading>Maths Materials</PageHeading>
          
          <CardContainer>

          <StyledCard className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Number
              </Typography>
              <Typography variant="h5" component="h2">
                Surds
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Level 7
              </Typography>
              <Typography variant="body2" component="div">
                <p>mr-salih resources</p>
                <ul>
                    <li><a target="_new" href="https://youtu.be/Uc8CizADmhs">Mr Salih: How To Video</a></li>
                    
                </ul>
                

                <p>Maths Genie Questions</p>
                <ul>
                  <li><a href="https://mathsgenie.co.uk/resources/7-surds.pdf" target="new">Maths Genie Questions</a></li>
                  <li><a href="https://mathsgenie.co.uk/resources/7-surdsans.pdf" target="new">Maths Genie Solutions</a></li>
                  <li></li>
                </ul>

                <p>Exam Questions</p>
                <ul>
                  <li><a target="new" href="https://www.dropbox.com/s/w2ywk7zxigccqa5/Surds-Questions.pdf?dl=0">Exam Questions</a></li>
                  <li><a target="new" href="https://www.dropbox.com/s/7vtcxwqgqcgm2l5/Surds-Answers.pdf?dl=0">Exam Answers</a></li>
                  <li></li>
                </ul>
              </Typography>
            </CardContent>
          </StyledCard>
 
         
          <StyledCard className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Algebra
              </Typography>
              <Typography variant="h5" component="h2">
                Quadratic - Completing the Square
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Level 8/9
              </Typography>
              <Typography variant="body2" component="div">
                <p>mr-salih questions</p>
                <ul>
                    <li><a target="_new" href="https://www.dropbox.com/s/95rpdrpruiaz6el/mr-salih-complete-the-square-questions.pdf?dl=0">Mr Salih Questions</a></li>
                    <li><a target="_new" href="https://www.dropbox.com/s/wsr61x0ymor6jkb/mr-salih-completing-the-square-solutions%20.pdf?dl=0">Mr Salih Answers</a></li>
                    <li><a target="_new" href="https://youtu.be/Y_Sb0iyQZ98">Mr Salih Video Solutions</a></li>
                </ul>
                

                <p>Maths Genie Questions</p>
                <ul>
                  <li><a href="https://mathsgenie.co.uk/resources/9-completing-the-square.pdf">Maths Genie Questions</a></li>
                  <li><a href="https://mathsgenie.co.uk/resources/9-completing-the-squareans.pdf">Maths Genie Solutions</a></li>
                  <li></li>
                </ul>

                <p>Exam Questions</p>
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </Typography>
            </CardContent>
          </StyledCard>

          <StyledCard className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Algebra
              </Typography>
              <Typography variant="h5" component="h2">
                Algebraic Fractions
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Level 8/9
              </Typography>
              <Typography variant="body2" component="div">
                <p>mr-salih questions</p>
                <ul>
                    <li><a target="_new" href="https://www.dropbox.com/s/wfv86t60z31dplo/mr-salih-questions.pdf?dl=0">Mr Salih Questions</a></li>
                    <li><a target="_new" href="https://www.dropbox.com/s/n957q9v9rel18xy/AlgebraicFractions-Solutions.pdf?dl=0">Mr Salih Answers</a></li>
                    <li><a target="_new" href="https://youtu.be/xG-oOQ4MNFY">Mr Salih Video Solutions</a></li>
                </ul>
                

                <p>Maths Genie Questions</p>
                <ul>
                  <li><a target="_new" href="https://mathsgenie.co.uk/resources/7-algebraic-fractions.pdf">Maths Genie questions</a></li>
                  <li><a target="_new" href="https://mathsgenie.co.uk/resources/7-algebraic-fractionsans.pdf">Maths Genie answers</a></li>
                  <li><a target="_new" href="https://youtu.be/Dr5jmSGv-u0">Maths Genie Video Walk Through</a></li>
                </ul>

                <p>Exam Questions</p>
                <ul>
                  <li><a target="_new" href="https://www.dropbox.com/s/wclffgcog552l0j/igcse-algebraic-fractions.pdf?dl=0">Exam Questions</a></li>
                  <li><a target="_new" href="https://www.dropbox.com/s/uhr2zbs9riclmyc/igcse-algebraic-fractions.solutions.pdf?dl=0">Exam Solutions.</a></li>
                </ul>
                
                
              </Typography>
            </CardContent>
          </StyledCard>


          </CardContainer>
        </Container>
    </div>
  );
}


const SiteMenu = () => (
  <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className="" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <SiteTitle>
          mrsalih-maths
        </SiteTitle>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
)

export default App;
