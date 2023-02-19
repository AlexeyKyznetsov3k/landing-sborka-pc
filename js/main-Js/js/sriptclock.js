
        var clock;

        $(document).ready(function() {

            // Выберите текущую дату
            var currentDate = new Date(0,1);

            // Установите какую-нибудь дату в прошлом. В данном случае это всегда было с 1 января
            var pastDate  = new Date(currentDate.getFullYear(), 0, 1);

            // Рассчитайте разницу в секундах между будущей и текущей датой
            var diff = currentDate.getTime() / 1000 - pastDate.getTime() / 1000;

            // Создайте экземпляр флип-часов обратного отсчета
            clock = $('.clock').FlipClock(diff, {
                clockFace: 'DailyCounter',
                countdown: true
            });
        });
