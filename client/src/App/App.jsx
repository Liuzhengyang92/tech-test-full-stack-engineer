import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import { Application, Container } from './styles';
import DisplayConsole from '../container/DisplayConsole/DisplayConsole';
import ControlConsole from '../container/ControlConsole/ControlConsole';
import { ReactComponent as Rocket } from '../assets/rocket.svg';

const App = () => (
    <Container>
        <DisplayConsole />
        <ControlConsole />
        {/* <Application >
            <Rocket />
            <span>"Space isn't remote at all. It's only an hour's drive away, if your car could go straight upwards."</span>
        </Application> */}
        <GlobalStyle />
    </Container>
);

export default hot(App);