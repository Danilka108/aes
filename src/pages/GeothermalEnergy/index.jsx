import React from 'react';

// Components
import Title from '../../components/Title/index';
import TitleBg from '../../components/TitleBg/index';
import Content from '../../components/Content/index';
import Separation from '../../components/Separation/index';
import SeparationContent from '../../components/SeparationContent/index';
import SeparationImg from '../../components/SeparationImg/index';
import Img from '../../components/Img/index';

// Img
import title from '../img/geothermal-energy.jpg';
import content1 from './content-1.jpg';
import content2 from './content-2.jpg';
import content3 from './content-3.jpg';

const GeothermalEnergy = () => {
    return (
        <>
            <Title>
                <h2>Геотермальная<br/>энергетика</h2>
                <TitleBg bg={title}/>
            </Title>
            <Content>
                <i>Геотермальная энергетика — Направление энергетики, основанное на использовании тепловой энергии  недр Земли для производства электрической энергии на геотермальных электростанциях.</i>
                <Separation>
                    <SeparationImg bg={content1}/>
                    <SeparationContent>
                        <h3>Достоинтсва</h3>
                        <ul>
                            <li>Возобновляемый источник энергии.</li>
                            <li>Геотермальная электростанция для работы не требует поставок топлива из внешних источников.</li>
                            <li>Эксплуатация геотермальной электростанции не требует дополнительных расходов.</li>
                            <li>Геотермальные электростанции не портят пейзаж и не требуют значительного землеотвода.</li>
                            <li>Обычная геотермальная электростанция может применяться и для опреснения воды.</li>
                            <li>Не зависит от времени года и времени суток.</li>
                        </ul>
                    </SeparationContent>
                </Separation>
                <h3>Недостатки</h3>
                <ul>
                    <li>Необходимо найти подходящее место для строительства геотермальной электростанции.</li>
                    <li>Иногда действующая геотермальная электростанция может остановиться в результате естественных изменений в земной коре, плохого выбора места.</li>
                    <li>Через эксплуатационную скважину могут выделяться горючие или токсичные газы или минералы.</li>
                    <li>Стоимость установки геотермальной электростанции велика.</li>
                </ul>
                <Img img={[
                    content2,
                    content3,
                ]}/>
            </Content>
        </>
    );
};

export default GeothermalEnergy;