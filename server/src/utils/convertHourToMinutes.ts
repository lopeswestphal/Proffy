export default function convertHourToMinutes(Time: string) {
    //8:00
    const [hour, minutes] =  Time.split(':').map(Number)
    const timeInMinutes = (hour * 60) + minutes;

    return timeInMinutes;
}