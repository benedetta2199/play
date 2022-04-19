import React from 'react'
import style from '../style/piano.module.css';
import useSound from 'use-sound';
import Link from 'next/link';
import classnames from 'classnames';

function Piano() {
    const [a] = useSound('./sound/ad.mp3',{volume: 0.25});
    const [c] = useSound('./sound/cd.mp3',{volume: 0.25});
    const [d] = useSound('./sound/dd.mp3',{volume: 0.25});
    const [f] = useSound('./sound/fd.mp3',{volume: 0.25});
    const [g] = useSound('./sound/gd.mp3',{volume: 0.25});
    return( 
        <div className={style.conteiner}>
            <ul className={style.piano + " set text-dark text-capitalize pl-5"}>      
                <li className={classnames(style.white, style.start) + " rounded-top"}><p className={style.cAnsia}>ansia</p></li>
                    <li className={style.black} onClick={c}></li>
                <li className={classnames(style.white, style.wb)}><p className={style.cBellezza}>bellezza</p></li>
                    <li className={style.black} onClick={d}></li>
                <li className={classnames(style.white, style.wb)}><p className={style.cCalma}>calma</p></li>
                    <li className={style.black} onClick={f}></li>
                <li className={classnames(style.white, style.wb)}><p className={style.cDivertimento}>divertimento</p></li>
                <li className={style.white}><p className={style.cEnergia}>energia</p></li>
                    <li className={style.black} onClick={g}></li>
                <Link href="./fastidio"><li className={classnames(style.white, style.wb)}><p className={style.cFastidio}>fastidio</p></li></Link>
                    <li className={style.black} onClick={a}></li>
                <li className={classnames(style.white, style.wb)}><p className={style.cGioia}>gioia</p></li>
                <Link href="./passione"><li className={style.white}><p className={style.cPassione}>passione</p></li></Link>
                    <li className={style.black} onClick={c}></li>
                <li className={classnames(style.white, style.wb)}><p className={style.cPaura}>paura</p></li>
                    <li className={style.black} onClick={d}></li>
                <Link href="./sfida"><li className={classnames(style.white, style.wb)}><p className={style.cSfida}>sfida</p></li></Link>
                    <li className={style.black} onClick={f}></li>
                <li className={classnames(style.white, style.wb)}><p className={style.cSogno}>sogno</p></li>
                <li className={style.white}><p className={style.cTrionfo}>trionfo</p></li>
                    <li className={style.black} onClick={g}></li>
                <Link href="./tristezza"><li className={classnames(style.white, style.wb) + " rounded-top"}><p className={style.cTristezza}>tristezza</p></li></Link>
            </ul>
        </div>
    )
}

export default Piano;