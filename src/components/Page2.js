import React from 'react'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import im from '../components/1_fyBJqy7fK6o-94yZQR2jFQ.jpg';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

function Page2() {
  const [cards, setcards] = useState([]);
  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=b4064b0e3a2344c398442001475851c9')
      .then((res) => {
        console.log(res.data.articles);
        setcards(res.data.articles)
      })
  }, []);
  return (
    <div>

      <MDBRow className='row-cols-1 row-cols-md-3 g-4 mt-3'>
        {
          cards.map((el) => {
            return (
              <>

                <MDBCol>
                  <MDBCard className='h-100'>
                    <MDBCardImage
                      src={el.urlToImage ? el.urlToImage : im}
                      height='400px'
                      alt='image'
                      position='top'
                    />

                    <MDBCardBody>
                      <MDBCardTitle> Author = {el.author ? el.author : 'no author'}</MDBCardTitle>
                      <MDBCardTitle>{el.title}</MDBCardTitle>
                      <MDBCardText className='p-3 bg-primary text-white'>
                        Publish Time = {el.publishedAt}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>



              </>
            )
          })
        }

      </MDBRow>
    </div>
  )
}

export default Page2