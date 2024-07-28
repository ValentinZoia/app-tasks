const showDate = () =>{
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
     return now.toLocaleDateString('es-ES', options);
}

export default showDate