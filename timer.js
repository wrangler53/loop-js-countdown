const timer = (number = 100, format = 'seconds') => {
    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');
    let countdown;

    convertFormat(format);

    function convertFormat(format) {
        switch (format) {
            case 'seconds':
                return timer(number);
            case 'minutes':
                return timer(number * 60);
            case 'hours':
                return timer(number * 60 * 60);
            case 'days':
                return timer(number * 60 * 60 * 24);
        }
    }

    function timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(countdown);
                // Makr loop countdown
                timer(seconds);
            };

            displayTimeLeft(secondsLeft);

        }, 1000);
    }

    function displayTimeLeft(seconds) {
        daysElement.textContent = Math.floor(seconds / 86400);
        hoursElement.textContent = Math.floor((seconds % 86400) / 3600);
        minutesElement.textContent = Math.floor((seconds % 86400) % 3600 / 60);
        secondsElement.textContent = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    }
}

export default timer;