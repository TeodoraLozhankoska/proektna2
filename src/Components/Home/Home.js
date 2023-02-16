import React from 'react'
import Slika from './profil.jpg'


const Home = () => {
    return (
        <div>
            <div>
                <div id="position">
                    <div>
                        <img style={{width: "300px", height: "350px", marginLeft: "40%", marginTop: "3%"}} className="card-img-top" src={Slika} alt="Card" />
                        <div>
                            <h4 style={{textAlign: "center", marginTop: "1%"}}><strong>Теодора Ложанкоска</strong></h4>
                            <p style={{textAlign: "center"}}>Студент</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div style={{textAlign: "center", backgroundColor: "#333", color: "white", borderRadius: "1em", margin: "3%"}}>
                    <h3 style={{textAlign: "center"}}>CV</h3>
                    <p>Име и презиме: Теодора Ложанкоска</p>
                    <p>Датум на раѓање: 03.03.2001, Струга, Република Македонија</p>
                    <p>Адреса на живеење: Мирче Ацев бр.4</p>
                    <p>Емаил адреса: lozhankoska.t@gmail.com</p><br />
                    <p>Тековна професија: Студент на ФЕИТ</p>
                    <p>Насока: Телекомуникации и информациско инженерство</p><br />
                    <p>Јазици: македонски, англиски, турски</p>
                </div>
            </div>
        </div>
    )
}

export default Home