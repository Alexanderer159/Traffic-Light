const setTrafficLight = () =>{

    document.getElementById("colorHigh").innerHTML = `🟢`;
    document.getElementById("colorMiddle").innerHTML = `⚪`;
    document.getElementById("colorLow").innerHTML = `⚪`;

    const yellowTime = 3000;
    const redTime = 6000;
    const totalTime = yellowTime + redTime

      setTimeout(() => {
        document.getElementById("colorHigh").innerHTML = `⚪`;
        document.getElementById("colorMiddle").innerHTML = `🟡`;
        document.getElementById("colorLow").innerHTML = `⚪`;
      }, yellowTime);
    
      setTimeout(() => {
        document.getElementById("colorHigh").innerHTML = `⚪`;
        document.getElementById("colorMiddle").innerHTML = `⚪`;
        document.getElementById("colorLow").innerHTML = `🔴`;
      }, redTime);

      setTimeout(setTrafficLight, totalTime);
    }
