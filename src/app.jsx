import React, { useState, useEffect } from 'react';
import {
    Route,
    Switch,
    Redirect,
    withRouter,
} from 'react-router-dom';

// Pages
import Main from './pages/Main/index';
import HydroEnergy from './pages/HydroEnergy/index';
import WindEnergy from './pages/WindEnergy/index';
import SolarEnergy from './pages/SolarEnergy/index';
import GeothermalEnergy from './pages/GeothermalEnergy/index';
import Ctf from './pages/Ctf/index';

import Header from './components/Header/index';

const App = (props) => {
    const { history, location } = props;
    const pages = {
        name: [
            'главная',
            'Гидроэнергетика',
            'Ветроэнергетика',
            'Солнечная энергетика',
            'Геотермальная энергетика',
            'Управляемый термоядерный синтез',
        ],
        path: [
            '/',
            '/hydro-energy',
            '/wind-energy',
            '/solar-energy',
            '/geothermal-energy',
            '/ctf',
        ],
        components : [
            Main,
            HydroEnergy,
            WindEnergy,
            SolarEnergy,
            GeothermalEnergy,
            Ctf,
        ],
    };
    const [activePage, setActivePage] = useState(null);

    useEffect(() => {
        setActivePage(pages.path.indexOf(location.pathname) === -1 ? 0 : pages.path.indexOf(location.pathname));
    }, [location, pages, activePage]);

    return (
        <>
            <Header onClick={(i) => setActivePage(i)} activePage={activePage} pages={{
                name: pages.name,
                path: pages.path,
            }}/>
            <Switch>
                {pages.path.map((key, i) => {
                    return <Route key={i} history={history} path={key} component={pages.components[i]}/>
                })}
                <Redirect from='/' to={pages.path[0]}/>
            </Switch>
        </>
    );
};

export default withRouter(App);