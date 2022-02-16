import { useState } from 'react';
// import axios from 'axios';
import { Button ,Card } from 'react-bootstrap';
import ModalMovie from "../ModalMovie/ModalMovie";


// import Movie from '../Movie/Movie';
//import './favorite.css';


function Movie({mov}){
   const [cardInfo, setCardInfo] = useState({});
  const [show,setShow] = useState(false);

  const handleClose = ()=>setShow(false);

    return (
        <>
      
         


                <Card className="div-card">
                  <Card.Img
                    className="div-card-img"
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title className="div-card-title">
                      {mov.title}
                    </Card.Title>
                    <Card.Link className="div-card-link">
                      {mov.overview}
                    </Card.Link>
                    <div>
                      <Button
                        className="div-card-button"
                        variant="primary"
                        onClick={() => {
                          setCardInfo(mov);
                          setShow(true);
                        }}
                      >
                        Add To Favorite
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              
            )
  
      {<ModalMovie cardInfo={cardInfo} show={show} handleClose={handleClose} />}
 
                
            


 
</>

    )
}

export default Movie;