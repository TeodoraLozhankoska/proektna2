import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Interesi = () => {
  return (
    <>
      <Container>
        <Row className="card-columns" style={{margin: "1%"}}>
          <Row className="card" style={{margin: "1%", backgroundColor: "lightblue", padding: "2%", textAlign: "center"}}>
            <div className="card-body text-center">
              <p className="card-text" style={{fontWeight: "bolder", fontSize: "x-large"}}>Омилен филм: <a style={{color:"black"}} href="https://www.imdb.com/title/tt0926084/?fbclid=IwAR2I_oQyCte1s6X2oUOkXkV4wV3kfcd0ljk4KRfzqohC6LZ7mYREI4y4PtE">Harry Potter</a></p>
            </div>
          </Row>
          <Row className="card" style={{margin: "1%",  backgroundColor: "lightpink", padding: "2%", textAlign: "center"}}>
            <div className="card-body text-center">
              <p className="card-text"style={{fontWeight: "bolder", fontSize: "x-large"}}>Омилена серија: <a style={{color:"black"}}href="https://www.imdb.com/title/tt0944947/?fbclid=IwAR0PvcJ5n67LFkDMzBhEG33bEY87FwWSPGGBlbjhINFIfg3eAW2bKkwI0UA">Game of Thrones</a></p>
            </div>
          </Row>
          <Row className="card" style={{margin: "1%",  backgroundColor: "lightgreen", padding: "2%", textAlign: "center"}}>
            <div className="card-body text-center">
              <p className="card-text"style={{fontWeight:"bolder", fontSize: "x-large"}}>Омилена книга: <a style={{color:"black"}} href="https://en.wikipedia.org/wiki/The_Alchemist_(novel)?fbclid=IwAR0RFY2omoW6fkCu7LYMRrUdOET9TRQtHwkBcQdR85DJVf0KBin2lrLMWsI">'Алхемичарот'- Пауло Коељо</a></p>
            </div>
          </Row>
          <Row className="card" style={{margin: "1%",  backgroundColor: "lightblue", padding: "2%", textAlign: "center"}}>
            <div className="card-body text-center">
              <p className="card-text"style={{fontWeight:"bolder", fontSize: "x-large"}}>Омилена Храна: <a style={{color:"black"}} href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fpizza-margherita-4-easy-steps%3Ffbclid%3DIwAR0REoCDR_6a_DAFMC9Nmj7RusT68WTMdF32jWnRdCatc65RMZktlePiELg&h=AT21QsRrUR7dfgZsrMOxdjkLBfsvlvbQ12FNLFlPSg41Y6RO9pLaK19vYXpBiQ4bapsOGyCJEmiAzlZJZxm6dMPdGek8D_q5vQGfJSfvBH43iwLoIW0jNcVCk6vndZ-VQhbUfA">Пица</a> </p>
            </div>
          </Row>  
          <Row className="card" style={{margin: "1%",  backgroundColor: "lightpink", padding: "2%", textAlign: "center"}}>
            <div className="card-body text-center">
              <p className="card-text"style={{fontWeight:"bolder", fontSize: "x-large"}}>Омилена дестинација што ја имам посетено: <a style={{color:"black"}} href="https://mk.wikipedia.org/wiki/%D0%88%D0%B0%D1%88">Јаш, Романија</a></p>
            </div>
          </Row>
          <Row className="card" style={{margin: "1%", backgroundColor: "lightgreen", padding: "2%", textAlign: "center"}}>
            <div className="card-body text-center">
              <p className="card-text"style={{fontWeight:"bolder", fontSize: "x-large"}}>Дестинација што сакам да ја посетам: <a style={{color:"black"}} href="https://en.wikipedia.org/wiki/Tokyo">Токио, Јапонија</a></p>
            </div>
          </Row>
         
        </Row>
      </Container>
    </>
  )
}

export default Interesi