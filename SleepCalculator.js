const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 8;
    } else if (day === 'wednesday') {
      return 8;
    } else if (day === 'thursday') {
      return 8;
    } else if (day === 'friday') {
      return 8;
    } else if (day === 'saturday') {
      return 8;
    } else {
      return 8;
    }
  }
  const getActualSleepHours = () => {
     let fullHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
     return fullHours;
  }
  const getIdealSleepHours = () => {
    let idealHours = 9;
    return idealHours * 7;
  }
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('Perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      consoel.log('More sleep than needed!');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You need more sleep!');
    } else {
      console.log('error!');
    }
  }
  calculateSleepDebt();
  
  