import React, { Component } from 'react';
import Pusher from 'pusher-js';
import '../CSS/Chatbox.css';
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import Image from "react-bootstrap/Image";

    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {
          userMessage: '',
          conversation: [],
        };
      }


      componentDidMount() {
        const pusher = new Pusher('a4f07c4f44418284ae6a', {
          cluster: 'ap2',
          encrypted: true,
        });

        const channel = pusher.subscribe('bot');
        channel.bind('bot-response', data => {
          const msg = {
            text: data.message,
            user: 'ai',
          };
          this.setState({
            conversation: [...this.state.conversation, msg],
          });
        });
      }

      handleChange = event => {
        this.setState({ userMessage: event.target.value });
      };

      handleSubmit = event => {
        event.preventDefault();
        if (!this.state.userMessage.trim()) return;

        const msg = {
          text: this.state.userMessage,
          user: 'human',
        }

        // axios({
        //   method: "POST",
        //   url: `http://127.0.0.1:8000/api/customer_chat/`,
        //   data:msg ,
        //   config: {
            // headers: { "Content-Type": "application/json" }
          
        //   .then(function (response) {
        //     console.log(response);
        //   })}
        // });
        axios.post("http://127.0.0.1:8000/api/customer_chat/",
          msg,{
            headers : {
              "Content-Type": "application/json" 

            }
          }
          )
        .then(function (response) {
          var resp1 = response;
        })
          ;

        this.setState({
          conversation: [...this.state.conversation, msg],
        });

        // fetch('http://localhost:5000/chat', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     message: this.state.userMessage,
        //   }),
        // });

        this.setState({ userMessage: '' });
      };
      response

      render() {
        const ChatBubble = (text, i, className) => {
          return (
            <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
              <span className="chat-content">{text}</span>
            </div>
          );
        };

        const chat = this.state.conversation.map((e, index) =>
          ChatBubble(e.text, index, e.user)
        );

        return (
          <div>
            <h1>React Chatbot</h1>
            <div className="chat-window">
            <Navbar bg="light" >
            <Image style={{width:"35%"}}
              className="img-fluid"
              src={require("../../images/logo.png")}
              onClick={this.handleFirst}
            />
            <h4 style={{left:"68%",position:"absolute",top:"35%",color:"#F97552"}}>How may i help you?</h4>
           
          
          </Navbar>
              <div className="conversation-view">{chat}</div>
              <div className="message-box">
                <form onSubmit={this.handleSubmit}>
                  <input
                    value={this.state.userMessage}
                    onInput={this.handleChange}
                    className="text-input"
                    type="text"
                    autoFocus
                    placeholder="Type your message and hit Enter to send"
                  />
                </form>
              </div>
            </div>
          </div>
        );
      }
    }

    export default App;