const date = new Date(document.lastModified);

const formattedDate =
    String(date.getDate()).padStart(2, '0')
    + '/' + String(date.getMonth() + 1).padStart(2, '0')
    + '/' + date.getFullYear();
    /* + ' ' + String(date.getHours()).padStart(2, '0')
    + ':' + String(date.getMinutes()).padStart(2, '0')
    + ':' + String(date.getSeconds()).padStart(2, '0'); */

document.getElementById('lastUpdated').textContent = formattedDate;