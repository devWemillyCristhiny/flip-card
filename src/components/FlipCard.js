import React from 'react'
import './FilpCard.css'
import suicideboys from '../imagens/suicideboys6.jpg'
import lilpeep from '../imagens/lilpeep2.jpg'
import michaeljackson from '../imagens/michaeljackson1.jpg'
import yungblud from '../imagens/Y1 (1).jpg'
import nickiminaj from '../imagens/nickiminaj1.jpg'
import dragonboys from '../imagens/dragonBoys1.jpg'

export default function FlipCard() {
    return (
        <div className="container">
            <div className="card">
                <div className="imgBox">
                    <img src={suicideboys}/>
                </div>
                <div className="details">
                <h2>Suicideboy$</h2>
            <p>Suicideboys é uma dupla americana de hip hop de Nova Orleans, 
                Louisiana , fundada em 2014 pelos primos Ruby da Cherry e Scrim. 
                Através da plataforma de compartilhamento de música SoundCloud, a 
                dupla ganhou popularidade por suas batidas abrasivas e autoproduzidas, 
                bem como seu conteúdo lírico áspero e temas com destaque para transtorno 
                de uso de substâncias e ideação suicida. Eles possuem e operam seu 
                próprio selo, G * 59 Records, sob o qual todas as suas músicas são 
                distribuídas pela Caroline Distribution .</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBox">
                    <img src={lilpeep}/>
                </div>
                <div className="details">
                <h2>Lil peep</h2>
            <p>Gustav Elijah Åhr, mais conhecido pelo nome artístico Lil Peep, foi um 
                músico norte-americano que atuou em sua carreira como rapper, cantor, 
                compositor e modelo. Ele fez parte como um dos principais membros do grupo 
                coletivo de emo rap GothBoiClique, no qual fez diversos trabalhos notáveis 
                com os rappers Lil Tracy e HorseHead. Suas canções "Awful Things", "Benz Truck", 
                entre outras ganharam muita fama no SoundCloud e YouTube.</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBox">
                    <img src={michaeljackson}/>
                </div>
                <div className="details">
                <h2>Michael Jackson</h2>
            <p>Michael Joseph Jackson foi um cantor, compositor, dançarino, filantropo e humanitário 
                estadunidense. Apelidado de "Rei do Pop", ele é um dos ícones culturais mais importantes 
                e influentes de todos os tempos e um dos maiores artistas da história da música. Suas 
                contribuições para a música, a dança e a moda juntamente com a divulgação de sua vida pessoal, 
                fizeram dele uma figura global na cultura popular por mais de quatro décadas.</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBox">
                    <img src={yungblud}/>
                </div>
                <div className="details">
                <h2>Yungblud</h2>
            <p>Dominic Richard Harrison, conhecido como Yungblud, é um cantor, compositor e ator britânico.
                Nascimento: 5 de agosto de 1997 (idade 23 anos), Doncaster, Reino Unido
                Formação: Arts Educational Schools London
                Nome completo: Dominic Richard Harrison
                Gravadora(s): Locomotion; Interscope; Geffen; Polydor
                Programas de TV: The Lodge: Mistério a Todo o Ritmo
                Prêmios: MTV Europe Music Award para Melhor Artista Push, Prêmio NME para Melhor Clipe</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBox">
                    <img src={nickiminaj}/>
                </div>
                <div className="details">
                <h2>Nicki Minaj</h2>
            <p>Onika Tanya Maraj, conhecida por seu nome artístico Nicki Minaj, é uma rapper, cantora, compositora, 
                modelo e atriz trinidiana radicada nos Estados Unidos.
                Nome completo	Onika Tanya Maraj;
                Nascimento	8 de dezembro de 1982 (37 anos);
                Saint James, Porto de Espanha, Trinidad e Tobago;
                Estatura	1,57m;
                Progenitores Mãe: Carol Maraj;
                Pai: Robert Maraj;
                Cônjuge	Kenneth Petty (c. 2019);
                Filho(s)	1;
                Ocupação: Rapper, cantora, compositora, modelo e atriz</p>
                </div>
            </div>
            <div className="card">
                <div className="imgBox">
                    <img src={dragonboys}/>
                </div>
                <div className="details">
                <h2>Dragon boy$</h2>
            <p>Gênero: Hip-hop/Rap
                Álbuns: Catatonia, Subconsciente, Subconsciente Sessions, Coma, A Bailar
                Gravadoras: Ava Records Mexico, Dragon Boys, Dragon Boy$</p>
                </div>
            </div>
        </div>
    )
}