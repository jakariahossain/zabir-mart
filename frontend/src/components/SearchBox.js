import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push("/")
    }
  }

  return (
    <Form onSubmit={submitHandler} inline className='justify-content-md-center'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='search_main'
      ></Form.Control>
      <Button type='submit' className='btn-custom search_btn'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
