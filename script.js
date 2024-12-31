// function startTimer(elementId, initialHours, initialMinutes, initialSeconds) {
//     const timerElement = document.getElementById(elementId);
//     let minutes = initialMinutes;
//     let seconds = initialSeconds;
//     let hours = initialHours;

//     function updateTimer() {
//         timerElement.textContent = formatTime(hours, minutes, seconds);

//         if (seconds > 0) {
//             seconds--;
//         } else {
//            if(minutes > 0) {
//                minutes--;
//                seconds = 59;
//            } else
//            if(hours > 0) {
//             hours--;
//             minutes = 59;
//             seconds = 59;
//             }else {
//                clearInterval(intervalId); // Останавливаем таймер, когда время истекло
//                timerElement.textContent = "Время вышло!";
//            }
//         }
//     }

//     // Функция для форматирования времени в 00:00
//     function formatTime(hours,mins, secs) {
//         const formattedHours = String(hours).padStart(2,'0')
//         const formattedMinutes = String(mins).padStart(2, '0');
//         const formattedSeconds = String(secs).padStart(2, '0');
//         return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
//     }
//     updateTimer(); // Обновляем таймер сразу, чтобы не было задержки в 1 секунду
//     const intervalId = setInterval(updateTimer, 1000); // Обновляем каждую секунду
// }
// startTimer('timer', 0, 0, 10);


function startCountdownTimer(elementId) {
    const timerElement = document.getElementById(elementId);
    const targetDate = new Date('2025-01-01T00:00:00'); 
  
    function updateTimer() {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
  
      if (diff <= 0) {
        window.location.href = "newYear.html";
        return;
      }
  
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      timerElement.textContent = formatTime(days, hours, minutes, seconds);
    }
  
    function formatTime(days, hours, minutes, seconds) {
        const formattedDays = String(days).padStart(2, '0');
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
  
        return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      }
  
    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);
  }
  
  startCountdownTimer('timer');
  
  
