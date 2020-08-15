import React from 'react';

// Components
import Title from '../../components/Title/index';
import TitleBg from '../../components/TitleBg/index';
import Content from '../../components/Content/index';
import Separation from '../../components/Separation/index';
import SeparationContent from '../../components/SeparationContent/index';
import SeparationImg from '../../components/SeparationImg/index';

// Img
import title from '../img/solar-energy.jpg';
import content1 from './content-1.jpg';

const SolarEnergy = () => {
    return (
        <>
            <Title>
                <h2>Солнечная<br/>энергетика</h2>
                <TitleBg bg={title}/>
            </Title>
            <Content>
                <i>Солнечная энергетика — направление альтернативной энергетики, основанное на непосредственном использовании солнечного излучения для получения энергии в каком-либо виде.</i>
                <Separation>
                    <SeparationContent>
                        <h3>Достоинства</h3>
                        <ul>
                            <li>Общедоступность и неисчерпаемость источника.</li>
                            <li>Теоретически, полная безопасность для окружающей среды.</li>
                        </ul>
                        <h3>Недостатки</h3>
                        <ul>
                            <li>Зависимость от погоды и времени суток.</li>
                            <li>Как следствие необходимость аккумуляции энергии.</li>
                            <li>Высокая стоимость конструкции, связанная с применением редких элементов.</li>
                            <li>Необходимость периодической очистки отражающей поверхности от пыли.</li>
                        </ul>
                    </SeparationContent>
                    <SeparationImg bg={content1}/>
                </Separation>
            </Content>
        </>
    );
};

export default SolarEnergy;