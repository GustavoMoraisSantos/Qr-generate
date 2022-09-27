import "./App.css";
import { useState } from "react";
import { Button, Input } from "antd";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";

function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQrcodeLink] = useState("");

  const handleGenerateImage = (link_url) =>{
    QRCodeLink.toDataURL(link_url,{
      width: 600,
      margin:1,
    }, function(err, url){
      setQrcodeLink(url);
    })
  }

  const handleChangeValue = (e) => {
    setLink(e);
    handleGenerateImage(e)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color:'whitesmoke'}}>{link}</h1>

        <div style={{backgroundColor:'white', padding:'20px 20px 10px 20px'}}> 

        <QRCode value={link} />
        </div>

        <Input
          onChange={(e) => handleChangeValue(e.target.value)}
          placeholder="Digite seu link"
          style={{ width: "20%", marginBottom: "20px", marginTop: "20px" }}
          defaultValue=""
        />
        <Button href={qrcodeLink} download={`qrcode.png`} type="primary">Baixar QRCode</Button>
      </header>
    </div>
  );
}

export default App;
