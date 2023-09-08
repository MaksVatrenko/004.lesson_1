let hour = prompt('Введіть кількість годин');

let seconds = hour * 3600;

if (!isNaN(hour)) {
    alert(`Це ${seconds} секунд`);
} else alert('Введіть будь ласка число')

