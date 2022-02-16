
import { Container, Row } from 'react-bootstrap';
import Movie from '../Movie/Movie';
//import './favorite.css';


function Movielist({data}){
 

    return (
        <>
        <Container className='div-container'>
        <Row md={3}>
            {
                data.length && data.map((mov) => (
                   
                   <Movie mov ={mov}/>
                ))
            }
        </Row>
    </Container>

  

</>

    )
}

export default Movielist;