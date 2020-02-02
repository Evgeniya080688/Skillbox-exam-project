export function convertDate(yourDate) {
    var newDate = new Date(yourDate);
    const dayToday = newDate.getDate();
    const monthToday = newDate.getMonth()+1;
    const yearToday = newDate.getFullYear();
    return "" + dayToday+"-"+ monthToday + "-" + yearToday;
}
