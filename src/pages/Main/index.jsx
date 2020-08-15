import React from 'react';

// Components
import Title from '../../components/Title/index';
import TitleBg from '../../components/TitleBg/index';
import Content from '../../components/Content/index';
import Slider from '../../components/Slider/index';
import Separation from '../../components/Separation/index';
import SeparationContent from '../../components/SeparationContent/index';
import SeparationImg from '../../components/SeparationImg/index';
import Img from '../../components/Img/index';

// Img
import slider1 from '../img/hydro-energy.jpg';
import slider2 from '../img/wind-energy.jpg';
import slider3 from '../img/solar-energy.jpg';
import slider4 from '../img/geothermal-energy.jpg';
import slider5 from '../img/ctf.jpg';
import content1 from './content-1.jpg';
import content2 from './content-2.jpg';
import content3 from './content-3.jpg';

const Main = () => {
    return (
        <>
            <Title>
                <h2>Альтернативные<br/>источники энергии</h2>
                <TitleBg>
                    <Slider slides={[
                            slider1,
                            slider2,
                            slider3,
                            slider4,
                            slider5,
                        ]}
                    />
                </TitleBg>
            </Title>
            <Content>
                <Separation>
                    <SeparationContent>
                        <h3>Введение</h3>
                        <p>Экологическая обстановка – пожалуй, самая актуальная проблема 21 века. В современном мире человечество нуждается в электрической энергии каждый день. Она нужна как большим предприятиям, так и в быту. На её выработку тратится много средств, поэтому счета за электроэнергию ежегодно растут.</p>
                    </SeparationContent>
                    <SeparationImg bg={content1}/>
                </Separation>
                <h3>Альтернативные источники энергии</h3>
                <p>Альтернативная энергетика — совокупность перспективных способов получения, передачи и использования энергии, которые распространены, не так широко, как традиционные, однако представляют интерес из-за выгодности их использования.</p>
                <Img img={[
                        content2,
                        content3,
                    ]}
                />
            </Content>
        </>
    );
};

export default Main;