// Flag page location with throttle
let invitationTrigger = document.getElementById("invitationContainer");
let earlyTrigger = document.getElementById("earlyDaysContainer");
let teenageTrigger = document.getElementById("teenContainer");
let adultTrigger = document.getElementById("adultContainer");
let askTrigger = document.getElementById("askContainer");

let earlyTarget = document.getElementById('footEarly');
let teenTarget = document.getElementById('footTeen');
let adultTarget = document.getElementById('footAdult');
let askTarget = document.getElementById('footAsk');

let scrolling = false;

window.addEventListener('scroll', checkScroll);

function checkScroll() {
    scrolling = true;
};

let base = '#6a9c88';
let target = 'rgb(202, 150, 36)';
earlyTarget.style.transition = '.2s';
teenTarget.style.transition = '.2s';
adultTarget.style.transition = '.2s';
askTarget.style.transition = '.2s';

setInterval(function() {
    if (scrolling) {
        scrolling = false;
        let viewMod = scrollY + (.08 * document.body.scrollHeight);
   
    if (viewMod <= earlyTrigger.offsetTop) {
        earlyTarget.style.fill = base;
        teenTarget.style.fill = base;
        adultTarget.style.fill = base;
        askTarget.style.fill = base;
    } else if (viewMod > (earlyTrigger.offsetTop) && viewMod <= teenageTrigger.offsetTop) {
        earlyTarget.style.fill = target
        teenTarget.style.fill = base;
        adultTarget.style.fill = base;
        askTarget.style.fill = base;
    } else if (viewMod > teenageTrigger.offsetTop && viewMod <= adultTrigger.offsetTop) {
        earlyTarget.style.fill = base;
        teenTarget.style.fill = target
        adultTarget.style.fill = base;
        askTarget.style.fill = base;
    } else if (viewMod > adultTrigger.offsetTop && viewMod <= askTrigger.offsetTop) {
        earlyTarget.style.fill = base;
        teenTarget.style.fill = base;
        adultTarget.style.fill = target
        askTarget.style.fill = base;
    } else if (viewMod > askTrigger.offsetTop) {
        earlyTarget.style.fill = base;
        teenTarget.style.fill = base;
        adultTarget.style.fill = base;
        askTarget.style.fill = target
    }
    }
},200);


// Parralax Vertical Scrollbar
let navBar = document.getElementById('vertical-nav');

window.addEventListener('scroll', scrollBar);

function scrollBar () {
    navBar.style.top = (1.05)*scrollY + 'px';
};


// Enable Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


// Chart.js defaults
Chart.register(ChartDataLabels);
Chart.defaults.font.size = 16;
Chart.defaults.color = 'black';


// The Early Days Infographic Desktop
const ctx1 = document.getElementById('earlyDaysStatsDesktop');

const earlyChartDesktop = new Chart(ctx1, {
    type: 'bar',
    data: {
        myLabels: [
            "",
            '',
            ''
        ],
        labels: [
            "Neglect: 64%",
            'Parental Drug Abuse: 35%',
            "Physical Abuse: 13%"
        ],
        datasets: [{
            data: [64, 35, 13],
            backgroundColor: [
                'rgb(245, 117, 66)',
                'rgb(155, 199, 132)',
                'rgb(275, 159, 32)',
            ],
            borderRadius: 4
          }]
    },
    
    options: {
        scales: {
            y: {
                grid: {
                    display: false
                }       
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    callback: function(index) {
                        if(index == 0) {
                            return 'Neglect';
                        }
                        if(index == 1) {
                            return ['Drug Abuse', '(Parental)'];
                        }
                        if(index == 2) {
                            return 'Physical Abuse';
                        }
                    }
                }  
            }
        },
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                    return context.chart.data.myLabels[context.dataIndex]
                    
                }
            },
            tooltip: {
                enabled: true,
                position: 'average',
                callbacks: {
                    label: function() {}
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Circumstances Associated with Foster Care Entry: \u{00B9}",
                color: 'black',
                font: {
                    size: 20
                },
                margin: {
                    bottom: 3
                }
            }
        }
    }

});

// The Early Days Infographic Mobile
const ctx2 = document.getElementById('earlyDaysStatsMobile');

const earlyChartMobile = new Chart(ctx2, {
    type: 'bar',
    data: {
        myLabels: [
            "",
            '',
            ''
        ],
        labels: [
            "64%",
            '35%',
            "13%"
        ],
        datasets: [{
            data: [64, 35, 13],
            backgroundColor: [
                'rgb(245, 117, 66)',
                'rgb(155, 199, 132)',
                'rgb(275, 159, 32)',
            ],
            borderRadius: 4
          }]
    },
    
    options: {
        scales: {
            y: {
                grid: {
                    display: false
                }       
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    callback: function(index) {
                        if(index == 0) {
                            return 'Neglect';
                        }
                        if(index == 1) {
                            return ['Drug Abuse', '(Parental)'];
                        }
                        if(index == 2) {
                            return ['Physical', 'Abuse'];
                        }
                    }
                }  
            }
        },
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                    return context.chart.data.myLabels[context.dataIndex]
                    
                }
            },
            tooltip: {
                enabled: true,
                position: 'average',
                callbacks: {
                    label: function() {}
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['Circumstances Associated', 'with Foster Care', 'Entry: \u{00B9}'],
                color: 'black',
                font: {
                    size: 20
                },
                margin: {
                    bottom: 3
                }
            }
        }
    }

});


// Teenage Years Desktop infographic
const ctx3 = document.getElementById('teenageStatsDesktop');

const teenageChartDesktop = new Chart(ctx3, {
    type: 'pie',
    data: {
        myLabels: [
            "",
            '',
            '',
            ''
        ],
        labels: [
            " 25% Experience homelessness between ages 18-24",
            ' 33% Struggle with mental health disorders',
            ' 40% Graduate from highschool'
        ],
        datasets: [{
            data: [25, 33, 40],
            backgroundColor: [
              'rgb(155, 199, 132)',
              'rgb(245, 117, 66)',
              'rgb(204, 22, 22)',
            ],
            radius: 200,
            hoverOffset: 19,
            offset: 15
          }]
    },
    
    options: {
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                    return context.chart.data.myLabels[context.dataIndex]
                    
                }
            },
            tooltip: {
                enabled: true,
                position: 'nearest',
                callbacks: {
                    label: function(context) {
                        return context.label
                    }
                }
            },
            legend: {
                display: true,
                position: 'bottom',
            },
            title: {
                display: true,
                text: "Of Teens in the Foster Care System: \u{2074}",
                color: 'black',
                font: {
                    size: 20
                },
                padding: {
                    bottom: 0
                }
            }
        }
    }

});

// Teenage Years Mobile infographic
const ctx4 = document.getElementById('teenageStatsMobile');

const teenageChartMobile = new Chart(ctx4, {
    type: 'pie',
    data: {
        myLabels: [
            "",
            '',
            ''
        ],
        labels: [
            " 25% Experience homelessness",
            ' 33% Struggle with mental health disorders',
            ' 40% Graduate from highschool'
        ],
        datasets: [{
            data: [25, 33, 40],
            backgroundColor: [
              'rgb(155, 199, 132)',
              'rgb(245, 117, 66)',
              'rgb(204, 22, 22)',
            ],
            radius: 105,
            hoverOffset: 19,
            offset: 12
          }]
    },
    
    options: {
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                    return context.chart.data.myLabels[context.dataIndex]
                    
                }
            },
            tooltip: {
                enabled: true,
                position: 'nearest',
                callbacks: {
                    label: function(context) {
                        return context.label
                    }
                }
            },
            legend: {
                display: true,
                position: 'bottom',
            },
            title: {
                display: true,
                text: "Of Teens in the Foster Care System: \u{2074}",
                color: 'black',
                font: {
                    size: 20
                },
                padding: {
                    bottom: 0
                }
            }
        }
    }

});


// Adulthood Desktop infographic
const ctx5 = document.getElementById('adultStatsDesktop');

const adultChart = new Chart(ctx5, {
    type: 'bar',
    data: {
        myLabels: [
            "",
            '',
            '',
            ''
        ],
        labels: [
            "Trauma: 90%",
            'Alcohol Abuse: 40%',
            'Mental Illness: 35%',
            'Drug Abuse: 30%'
        ],
        datasets: [{
            data: [90, 40, 35, 30],
            backgroundColor: [
              'rgb(217, 127, 67)',
              'rgb(44, 150, 93)',
              'rgb(48, 157, 179)',
              'rgb(186, 37, 42)',
            ],
            radius: 200,
            borderRadius: 4
          }]
    },
    options: {
        scales: {
            y: {
                grid: {
                    display: false
                }       
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    callback: function(index) {
                        if(index == 0) {
                            return 'Trauma';
                        }
                        if(index == 1) {
                            return 'Alcohol Abuse';
                        }
                        if(index == 2) {
                            return ['Serious', 'Mental Illness'];
                        }
                        if(index == 3) {
                            return 'Drug Abuse';
                        }
                    }
                } 
            } 
        },
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                    return context.chart.data.myLabels[context.dataIndex]
                    
                }
            },
            tooltip: {
                enabled: true,
                position: 'nearest',
                callbacks: {
                    label: function() {}
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: "Major Challenges Among Adults Experiencing Homelessness: \u{00B3}",
                color: 'black',
                font: {
                    size: 20
                },
                padding: {
                    bottom: 2
                }
            }
        }
    }

});

// Adulthood Mobile infographic
const ctx6 = document.getElementById('adultStatsMobile');

const adultChartMobile = new Chart(ctx6, {
    type: 'bar',
    data: {
        myLabels: [
            "",
            '',
            '',
            ''
        ],
        labels: [
            "90%",
            '40%',
            '35%',
            '30%'
        ],
        datasets: [{
            data: [90, 40, 35, 30],
            backgroundColor: [
              'rgb(217, 127, 67)',
              'rgb(44, 150, 93)',
              'rgb(48, 157, 179)',
              'rgb(186, 37, 42)',
            ],
            radius: 200,
            borderRadius: 4
          }]
    },
    options: {
        scales: {
            y: {
                grid: {
                    display: false
                }       
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    callback: function(index) {
                        if(index == 0) {
                            return 'Trauma';
                        }
                        if(index == 1) {
                            return ['Alcohol', 'Abuse'];
                        }
                        if(index == 2) {
                            return ['Mental', 'Illness'];
                        }
                        if(index == 3) {
                            return ['Drug', 'Abuse'];
                        }
                    }
                } 
            } 
        },
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                    return context.chart.data.myLabels[context.dataIndex]
                    
                }
            },
            tooltip: {
                enabled: true,
                position: 'nearest',
                callbacks: {
                    label: function() {}
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ["Major Challenges Among", 'Adults Experiencing Homelessness:\u{00B3}'],
                color: 'black',
                font: {
                    size: 20
                },
                padding: {
                    bottom: 10
                }
            }
        }
    }

});
