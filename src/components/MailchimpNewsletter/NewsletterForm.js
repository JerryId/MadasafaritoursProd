// import { useState } from "react";
// import { sanitize } from "../../utils/miscellaneous";
// import React from "react";
// import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
// import "./style.css";

// const NewsletterForm = ({ status, message, onValidated }) => {
//   const [error, setError] = useState(null);
//   const [email, setEmail] = useState(null);

//   /**
//    * Handle form submit.
//    *
//    * @return {{value}|*|boolean|null}
//    */
//   const handleFormSubmit = () => {
//     setError(null);
//     if (!email) {
//       setError("Please enter a valid email address");
//       return null;
//     }

//     const isFormValidated = onValidated({ EMAIL: email });
    
//     // On success return true
//     return email && email.indexOf("@") > -1 && isFormValidated;
    
//   };
  

//   /**
//    * Handle Input Key Event.
//    *
//    * @param event
//    */
//   const handleInputKeyEvent = (event) => {
//     setError(null);
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13) {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       handleFormSubmit();
//     }
    
//   };

//   /**
//    * Extract message from string.
//    *
//    * @param {String} message
//    * @return {null|*}
//    */
//   const getMessage = (message) => {
//     if (!message) {
//       return null;
//     }
//     const result = message?.split("-") ?? null;
//     if ("0" !== result?.[0]?.trim()) {
//       return sanitize(message);
//     }
//     const formattedMessage = result?.[1]?.trim() ?? null;
//     return formattedMessage ? sanitize(formattedMessage) : null;
//   };
  

//   return (
//     <div>
//       <h5 className="mb-2">Subscribe to our newsletter</h5>
//       Stay tuned of our flash discounts to your travel <span role='img' aria-label='emojiface'>😊</span>
//       <div className="py-2">
//         <div className="SubscribeNewsletter text-center py-3 py-3">
//           <input
//             onChange={(event) => setEmail(event?.target?.value ?? "")}
//             type="email"
//             placeholder="example@email.com"
//             className="form__field"
//             onKeyUp={(event) => handleInputKeyEvent(event)}
//           />
//           <button
//             data-toggle="tooltip"
//             data-placement="bottom"
//             title="Send"
//             className="btn btn--primary btn--inside uppercase"
//             onClick={handleFormSubmit}
//           >
//             Send <SendTwoToneIcon color="#fff" /> 
//           </button>
          

//         </div>
//         {/* <div>
//           <input required='true' type="checkbox" name="check" id="" /> En cochant ce bouton, j'accepte de partager mon adresse email à Travelia Safari 
//         </div> */}
//       </div>
//       <div className="min-h-42px">
//         {"sending" === status ? (<showSpinner message="Sending..." contentColorClass="" hasVisibilityToggle={false}/>) : null}
//         {"error" === status || error ? (<div className="errorMessage" dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}/>) : null}
//         {"success" === status && "error" !== status && !error && (<div className="successMessage pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }}/>)}
//       </div>
//     </div>
//   );
// };

// export default NewsletterForm;
