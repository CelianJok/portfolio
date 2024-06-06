import React from "react";
import './Formulaire.scss'

export default function Formulaire() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
      event.preventDefault();
      setResult("Envoi en cours...");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f89efa4b-536a-4431-870b-ae5abc4789aa");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Votre message a bien été envoyé !");
        event.target.reset();
      } else {
        console.log("Erreur d'envoi", data);
        setResult(data.message);
      }
    };
  

    return (
        <div className='Contact'>
            <div className='formulaire'>
                <img src={"Contact/images/Contact.jpg"} alt="Image de contact" />
                <form onSubmit={onSubmit}>
                    <h1>Me contacter</h1>
                    <input type="text" id="nom" name="nom" placeholder="Nom" required />
                    <input type="text" id="mail" name="mail" placeholder="E-mail" required />
                    <textarea id="message" name="message" placeholder="Message" required />
                    <p>
                        <input id="envoyer" type="submit" value="Envoyer" />
                    </p>   
                    <span>{result}</span>         
                </form>
            </div>
        </div>
        
    )
}