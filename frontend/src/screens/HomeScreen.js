import React, { useEffect } from "react"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import Product from "../components/Product"
import Message from "../components/Message"
import Loader from "../components/Loader"
import SearchBox from "../components/SearchBox"
import { listProducts } from "../actions/productActions"

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword))
  }, [dispatch, keyword])

  return (
    <>
      <Row className='my-5'>
        <Col className='text-center'>
          <Route render={({ history }) => <SearchBox history={history} />} />
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row className='align-items-center justify-content-center'>
            {products.map((product) => (
              <Col
                key={product._id}
                className='col col-md-6 col-lg-4 col-sm-12 col-xs-12'
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default HomeScreen
