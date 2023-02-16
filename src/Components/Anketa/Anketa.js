import React from 'react'

const Anketa = () => {

  function isprati(){
    window.location.reload();
  }

  return (
    <>
      <div className="container pad" style={{textAlign: "center", backgroundColor: "rgb(245, 136, 136)", margin: "3%", padding: "4%"}}>
        <label for="ocenka" value="ocenka">Како би ја оцениле оваа страна?</label><br />
        <select name="cars" id="cars">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select><br /><br />
        <label for="povtorno" value="povtorno">Дали би ја посетиле повторно?</label><br />
        <input type="radio" id="da" name="group" value="da" />
        <label for="da" style={{marginRight: "2%"}}>Да!</label>
        <input type="radio" id="ne" name="group" value="ne" />
        <label for="ne">Не.</label><br /><br />

        <label for="dodadi" value="dodadi">Што би промениле?</label><br />
        <input type="text" id="dodadi" className="st" /><br /><br />

        <input type="button" onClick={isprati} style={{padding: "10px", backgroundColor: "black", color: "white"}} value="Испрати" />
    </div> 
    </>
  )
}

export default Anketa