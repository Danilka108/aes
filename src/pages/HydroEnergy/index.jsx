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
import title from '../img/hydro-energy.jpg';
import content1 from './content-1.jpg';
import content2 from './content-2.jpg';
import content3 from './content-3.jpg';


const HydroEnergy = () => {
    return (
        <>
            <Title>
                <h2>Гидроэнергетика</h2>
                <TitleBg bg={title}/>
            </Title>
            <Content>
                <i>Гидроэнергетика — использование энергии естественного движения, т.е. течения, водных масс в русловых водотоках и приливных движениях.</i>
                <Separation>
                    <SeparationImg bg={content1}/>
                    <SeparationContent>
                        <h3>Достоинства</h3>
                        <ul>
                            <li>Использование возобновляемой энергии.</li>
                            <li>Очень дешевая электроэнергия.</li>
                            <li>Работа не сопровождается вредными выбросами в атмосферу.</li>
                            <li>Быстрый (относительно ТЭЦ/ТЭС) выход на режим выдачи рабочей мощности после включения станции.</li>
                            <li>Смягчение климата вблизи крупных водохранилищ.</li>
                        </ul>
                    </SeparationContent>
                </Separation>
                <h3>Недостатки</h3>
                <ul>
                    <li>Затопление пахотных земель.</li>
                    <li>Строительство ведётся там, где есть большие запасы энергии воды.</li>
                    <li>На горных реках опасны из-за высокой сейсмичности районов.</li>
                    <li>Сокращенные и нерегулируемые попуски воды из водохранилищ по 10-15 дней приводят к перестройке уникальных пойменных экосистем по всему руслу рек.</li>
                </ul>
                <Img img={[
                    content2,
                    content3,
                ]}/>
            </Content>
        </>
    );
};

export default HydroEnergy;