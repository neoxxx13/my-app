import style from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div className={style.fon}>
                <img src="https://static8.depositphotos.com/1324256/813/i/600/depositphotos_8130924-stock-photo-snowbound-mountains-panorama.jpg" alt="фото" />
            </div>
            <div className={style.discriptionBlock}>
                <img className={style.foto} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUHrF5r1BPz2WsSKiNAvNiv1FqtiAmAp0Mw&usqp=CAU" alt="foto" />
                <div className={style.username}>Gudkov V.</div>
                <div className={style.informations}>
                    <div className={style.elem}>Date of Birth: 13 may</div>
                    <div className={style.elem}>Country: Ukraine</div>
                    <div className={style.elem}>City: ZP</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;