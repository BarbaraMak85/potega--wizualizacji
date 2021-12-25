export const getHumanDate = date => {
    const newDate = new Date(date)

    const arrayMounth = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień']

    return `${newDate.getDate()} ${arrayMounth[newDate.getMonth()]} ${newDate.getFullYear()}`;
}