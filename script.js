const getSleepHours = day =>{
    day = day.toLowerCase();
    switch(day){
      case "monday":
        return 8;
        break;
      case "tuesday":
        return 8;
        break;
      case "wednesday":
        return 8;
        break;
      case "thursday":
        return 12;
        break;
      case "friday":
        return 8;
        break;
      case "saturday":
        return 8;
        break;
      case "sunday":
        return 8;
        break;      
    }
  };
  
  console.log(getSleepHours("THURSDAY"));
  
  const getActualSleepHours = () =>{
    return (getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday") );
  };
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () =>{
    const idealHours = 8;
    return idealHours * 7;
  };
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
      if(actualSleepHours === idealSleepHours){
       document.write(`You have got the perfect amount of sleep!`);         
    }else if(actualSleepHours > idealSleepHours){
      document.write(`You have got more sleep than needed by ${Math.abs(idealSleepHours- actualSleepHours)}`);
    }else{
      document.write(`You should get more sleep by ${Math.abs(idealSleepHours - actualSleepHours)}`);
    }
  };
  calculateSleepDebt();
  
  