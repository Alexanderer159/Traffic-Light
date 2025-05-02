const setTrafficLight = () =>{

    document.getElementById("colorHigh").innerHTML = `🟢`;
    document.getElementById("colorLow").innerHTML = `⚪`;ö
    
      setTimeout(() => {
        document.getElementById("colorHigh").innerHTML = `⚪`;
        document.getElementById("colorMiddle").innerHTML = `🟡`;
      }, 3000);
    
      setTimeout(() => {
        document.getElementById("colorMiddle").innerHTML = `⚪`;
        document.getElementById("colorLow").innerHTML = `🔴`;
      }, 6000);
    
      setTimeout(setTrafficLight, 10000);
    
    }
