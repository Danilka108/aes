import React from 'react';

// Components
import Title from '../../components/Title/index';
import TitleBg from '../../components/TitleBg/index';
import Content from '../../components/Content/index';
import Separation from '../../components/Separation/index';
import SeparationContent from '../../components/SeparationContent/index';
import SeparationImg from '../../components/SeparationImg/index';

// Img
import title from '../img/ctf.jpg';
import content1 from './content-1.jpg';
import content2 from './content-2.jpg';

const Ctf = () => {
    return (
        <>
            <Title>
                <h2>Контролируемый термоядерный синтез</h2>
                <TitleBg bg={title}/>
            </Title>
            <Content>
                <i>Одним из наиболее перспективных инновационных источников энергии является управляемый термоядерный синтез (УТС). Реакторы термоядерного синтеза имитируют ядерный процесс внутри Солнца, сталкивая более легкие атомы вместе и превращая их в более тяжелые, и выделяя огромное количество энергии по пути.</i>
                <Separation>
                    <SeparationImg bg={content1}/>
                    <SeparationContent>
                        <h3>Достоинтсва</h3>
                        <ul>
                            <li>Единственными побочными продуктами термоядерного синтеза являются гелий-4, безвредный инертный газ, и тритий, который используется в качестве дополнительного топлива.</li>
                            <li>Лития более чем достаточно в земной коре.</li>
                            <li>Электростанция с термоядерным реактором не производит выбросов.</li>
                            <li>Работающий термоядерный реактор безопаснее атомного реактора. Если он поврежден, то расплавления не происходит, так как в земных условиях термоядерный синтез необходимо постоянно поддерживать, «подпитывая» реактор топливом и/или энергией.</li>
                        </ul>
                    </SeparationContent>
                </Separation>
                <Separation>
                    <SeparationImg bg={content2}/>
                    <SeparationContent>
                        <h3>Недостатки</h3>
                        <ul>
                            <li>Несмотря на то что непосредственно в процессе синтеза не образуется радиоактивных отходов, высвобождающиеся нейтроны со временем радиоактивно заражают защитную оболочку реактора.</li>
                            <li>Широкое распространение действующих термоядерных реакторов не ожидается раньше середины XXI века.</li>
                        </ul>
                    </SeparationContent>
                </Separation>
            </Content>
        </>
    );
};

export default Ctf;