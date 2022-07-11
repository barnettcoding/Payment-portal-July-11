import SimpleForm from "./components/chatbot";
import React, {useState} from "react";
import CcCarousel from "./components/ccCarousel";
import Payment from "./components/payment";
import Accounts from "./components/accounts";
import PaymentHistory from "./components/paymentHistory";


function App(props) {
const [openChatbot, setOpenChatbot] = useState(false);

const openChatbotHandler = (event) => {
  setOpenChatbot(!openChatbot);
  console.log("you tried it");
  
}
return (
  <>
  
<main class="container p-5">
      <div class="card shadow">
        <div class="card-body">
          <div class="card-title d-flex flex-wrap justify-content-between">
            <h2>John Smith</h2>
            <h2>Balance: $4321.09</h2>
          </div>


          <div class="d-flex flex-wrap">
            <div class="d-flex flex-column col-12 col-sm-12 col-md-6">
              <CcCarousel/>
            </div>

          
            <div class="d-flex flex-column justify-content-center items-center col-12 col-sm-12 col-md-6">
            <div class="card my-2 shadow">
            <div class="card-body">
              <div class="card-title">
              <Payment></Payment>
            </div>
            </div>
            </div>
            </div>
          </div>
          <div class="card my-2 shadow-sm">
            <div class="card-body">
              <div class="card-title"></div>
                <Accounts/>
            </div>
          </div>
          <div class="card my-2 shadow-sm">
            <div class="card-body">
              <div class="card-title"></div>
            <PaymentHistory></PaymentHistory>

        </div>
        </div>
        </div>
      </div>

          </main>
          <div class="container">
          <div class="chatIcon">{openChatbot && <SimpleForm></SimpleForm>}</div>
                  <div class="chatIcon">
                    <img onClick={openChatbotHandler} src={"https://freeiconshop.com/wp-content/uploads/edd/chat-alt-outline-filled.png"} alt="chaticons"></img>
                  </div>
                    
                </div>
</>
          
);
  
}

export default App;
