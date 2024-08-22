
import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Row } from 'react-bootstrap'

class BookList extends Component {
 

  render() {
    return (
      <>
      
        <Row className="g-2 mt-3">
          {this.props.books.map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </>
    )
  }
}

export default BookList