import React from 'react'
import './kontakt.css'

const Kontakt = () => {

  function isprati(){
    window.location.reload();
  }

  return (
    <div className="container pad" style={{backgroundColor: "rgb(245, 136, 136)", margin: "3%", padding: "4%"}}>
        <label for="name" value="name">Име:</label><br />
        <input type="text" id="name" className="st" /><br /><br />
        <label for="sname" value="sname">Презиме:</label><br />
        <input type="text" id="sname" className="st" /><br /><br />
        <label for="mail" value="mail">Емаил:
        </label><br />
        <input type="text" id="mail" className="st" /><br /><br />
        <input type="button" onClick={isprati} style={{padding: "10px", backgroundColor: "black", color: "white"}} value="Испрати" />
    </div>
  )
}

export default Kontakt