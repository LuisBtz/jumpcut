import React from 'react'
import styled from 'styled-components'
import addToMailchimp from "gatsby-plugin-mailchimp"


class Newsletter extends React.Component {

    constructor() {
        super()
        this.state = {
          message: "Know about our latest stories directly in your inbox",
          name: "",
          email: "",
          result: null,
        }
      }
    
      handleSubmit = e => {
        e.preventDefault()
        addToMailchimp(this.state.email, {
          FNAME: this.state.name,
        }) // listFields are optional if you are only capturing the email address.
          .then(data => {
    
            this.setState({ message: data.msg })
            // I recommend setting data to React state
            // but you can do whatever you want (including ignoring this `then()` altogether)
            console.log(data)
          })
          .catch(() => {
            // unnecessary because Mailchimp only ever
            // returns a 200 status code
            // see below for how to handle errors
          })
        this.setState({ email: "", name: "" })
      }
    
      handleEmailChange = event => {
        this.setState({ email: event.target.value })
      }
    
      handleNameChange = event => {
        this.setState({ name: event.target.value })
      }

    render() {

      console.log(this.state.result)
const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 850px) {
      grid-template-columns: repeat(1, 1fr);
    }
`

const Izquierda = styled.div`
    background-color: #7647A8 ;
    width: 50vw;
    padding: 40px;
    border-right: solid 4px black;
    a {
      font-family: var(--gt);
      text-transform: uppercase;
      text-decoration: underline;
    }
    @media (max-width: 850px) {
      width: 100%;
      border-right: none;
      border-bottom: solid 4px black;
      h2 {
        font-size: 2.5rem;
      }
    }
`

const Derecha = styled.div`
    width: 50vw;
    height: 100%;
    form {
      display: flex;
      flex-direction: column;
      input {
        height: 50px;
        width: 100%;
        border-bottom: solid 4px black;
        display: block;
        background: none;
        outline: none;
        border: none;
        padding: 60px 40px;
        font-size: 2rem;
        color: black;
        font-family: var(--gt);
        &::placeholder {
          font-size: 2rem;
          color: black;
          font-family: var(--gt);
          text-transform: uppercase;
        }
      }
      button {
        padding: 40px;
        background: none;
        outline: none;
        border: none;
        display: flex;
        justify-content: space-between;
        border-top: solid 4px black;
        cursor: pointer;
        span {
          font-size: 2rem;
          font-family: var(--gt);
          text-transform: uppercase;
          align-self: center;
        }
        img {
          width: 50px;
        }
      }
    }
    @media (max-width: 850px) {
      width: 100%;
    }
`

    return(
        <Container>
            <Izquierda>
                <h2 dangerouslySetInnerHTML={{ __html: this.state.message }} />
            </Izquierda>
            <Derecha>
                <form className="subscribe" onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        name="EMAIL"
                        id="mce-EMAIL"
                        className="subscribe-email"
                        placeholder="your email "
                        required
                    />
                    <button className="btn_sent" type="submit">
                      <span>submit</span><img src='./submit.svg' />
                    </button>
                </form>
            </Derecha>
        </Container>
    )
}
}

export default Newsletter