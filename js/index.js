let targetNumber = 100000000; 
let duration = 3000; 
let steps = 50; 

function startCounter() {
    let current = 0;
    let increment = Math.ceil(targetNumber / steps);
    const counterElement = document.getElementById('counter');
    
    const updateCounter = () => {
        current += increment;
        if (current > targetNumber) current = targetNumber;
        
        counterElement.textContent = current.toLocaleString('EG')
        
        if (current < targetNumber) {
            requestAnimationFrame(updateCounter);
        }
    };
    
    requestAnimationFrame(updateCounter);
}

setInterval(() => {
    targetNumber += 25;
    startCounter();
}, 5000);

window.onload = startCounter;

const ctx = document.getElementById('boycottChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['نستله', 'ماكدونالدز', 'بيبسي','كوكا كولا'],
        datasets: [{
            label: 'انخفاض المبيعات (%)',
            data: [65, 57, 90,50],
            backgroundColor: ['#CE1126', '#CE1126', '#CE1126','#CE1126'],
            borderColor: '#007A3D',
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'أكثر المنتجات مقاطعة في 2024',
                font: { size: 16 }
            },
            legend: { display: false }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: { color: '#000' }
            },
            x: {
                ticks: { color: '#000' }
            }
        }
    }
});
