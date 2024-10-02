import { useEffect } from 'react';
import '../assets/css/middle.css';

const Middle = () => {
    useEffect(() => {
        const counters = [
            { id: 'happyClients', endValue: 232 },
            { id: 'projects', endValue: 521 },
            { id: 'supportHours', endValue: 1463 },
            { id: 'hardWorkers', endValue: 15 }
        ];

        counters.forEach(counter => {
            const counterElement = document.getElementById(counter.id);
            const endValue = counter.endValue; // Final value
            const duration = 1000; // Duration in milliseconds
            const incrementTime = 50; // Time between increments in milliseconds
            const totalSteps = duration / incrementTime;
            const incrementValue = Math.ceil(endValue / totalSteps);
            let currentValue = 0;

            const counterInterval = setInterval(() => {
                currentValue += incrementValue;

                // If current value exceeds end value, set it to end value
                if (currentValue >= endValue) {
                    currentValue = endValue;
                    clearInterval(counterInterval);
                }

                counterElement.textContent = currentValue;
            }, incrementTime);

            // Cleanup interval on component unmount
            return () => clearInterval(counterInterval);
        });
    }, []); // Empty dependency array to run only on mount

    return (
        <>
            <section id="stats" className="stats section  bg-light">
                <div className="row gy-4">
                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i className="bi bi-emoji-smile"  style={{ color: 'blue' }}></i>
                        <div className="stats-item">
                            <span id="happyClients" className="purecounter">0</span>
                            <p>Happy Clients</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i className="bi bi-journal-richtext "  style={{ color: 'blue' }}></i>
                        <div className="stats-item">
                            <span id="projects" className="purecounter">0</span>
                            <p>Projects</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i className="bi bi-headset" style={{ color: 'blue' }}></i>
                        <div className="stats-item">
                            <span id="supportHours" className="purecounter">0</span>
                            <p>Hours Of Support</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                        <i className="bi bi-people"  style={{ color: 'blue' }}></i>
                        <div className="stats-item">
                            <span id="hardWorkers" className="purecounter">0</span>
                            <p>Hard Workers</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Middle;
