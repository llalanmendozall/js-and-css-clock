
    const secondHand = document.querySelector('.second-hand')
    const minuteHand = document.querySelector('.min-hand')
    const hourHand = document.querySelector('.hour-hand')

    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondDegress = ((seconds / 60 )* 360) + 90;
      secondHand.style.transform = `rotate(${secondDegress}deg)`;

      const mins = now.getMinutes()
      const minutesDegress = ((mins / 60) *360) + 90;
      minuteHand.style.transform = `rotate(${minutesDegress}deg)`
      
      const hours = now.getHours()
      const hoursDegress = ((hours / 12) *360) + 90;
      hourHand.style.transform = `rotate(${hoursDegress}deg)`
    }

    setInterval(setDate,1000)