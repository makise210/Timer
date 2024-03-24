let timerRunning = false;
        let interval;

        function startStopTimer() {
            if (timerRunning) {
                clearInterval(interval);
                timerRunning = false;
            } else {
                let startTime = Date.now();
                interval = setInterval(function() {
                    let elapsedTime = Date.now() - startTime;
                    updateClock(elapsedTime);
                }, 1000);
                timerRunning = true;
            }
        }

        function updateClock(elapsedTime) {
            let minutes = Math.floor(elapsedTime / 60000);
            let seconds = Math.floor((elapsedTime % 60000) / 1000);
            document.getElementById("timer").textContent = 
                (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        }