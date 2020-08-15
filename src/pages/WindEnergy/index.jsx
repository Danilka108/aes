import React from 'react';

// Components
import Title from '../../components/Title/index';
import TitleBg from '../../components/TitleBg/index';
import Content from '../../components/Content/index';
import Separation from '../../components/Separation/index';
import SeparationContent from '../../components/SeparationContent/index';
import SeparationImg from '../../components/SeparationImg/index';

// Img
import title from '../img/wind-energy.jpg';
import content1 from './content-1.jpg';
import content2 from './content-2.jpg';

const WindEnergy = () => {
    return (
        <>
            <Title>
                <h2>Ветроэнергетика</h2>
                <TitleBg bg={title}/>
            </Title>
            <Content>
                <i>Ветроэнергетика  —  отрасль энергетики, специализирующаяся на преобразовании кинетической энергии воздушных масс в атмосфере в электрическую, механическую, тепловую или в любую другую форму энергии, удобную для использования в народном хозяйстве.</i>
                <Separation>
                    <SeparationContent>
                        <h3>Достоинтсва</h3>
                        <ul>
                            <li>Экологически-чистый вид энергии.</li>
                            <li>Эргономика.</li>
                            <li>Возобновляемая энергия (энергия ветра, в отличие от ископаемого топлива, неистощима).</li>
                            <li>Ветровая энергетика - лучшее решение для труднодоступных мест.</li>
                        </ul>
                    </SeparationContent>
                    <SeparationImg bg={content1}/>
                </Separation>
                <Separation>
                    <SeparationContent>
                    <h3>Недостатки</h3>
                    <ul>
                        <li>Нестабильность (нет гарантии получения необходимого количества   электроэнергии).</li>
                        <li>Относительно невысокий выход электроэнергии.</li>
                        <li>Высокая стоимость.</li>
                        <li>Опасность для дикой природы.</li>
                        <li>Шумовое загрязнение может причинять беспокойство диким животным и людям, проживающим поблизости.</li>
                    </ul>
                    </SeparationContent>
                    <SeparationImg bg={content2}/>
                </Separation>
            </Content>
        </>
    );
};

export default WindEnergy;