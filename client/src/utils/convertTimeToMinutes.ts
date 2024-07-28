const convertTimeToMinutes = (time: string | undefined): number => {
  if(!time){
    return 0
  }
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  export default convertTimeToMinutes