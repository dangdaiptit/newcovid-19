var chart = new CanvasJS.Chart("chartContainer__infected-case", {

    animationEnabled: true,
    animationDuration: 2000,
    interactivityEnabled: true,
    // exportEnabled: true,
    width: 550,
    height: 285,


    data: [{
        // Change type to "doughnut", "line", "splineArea", etc.
        // type: "column",
        fillOpacity: .2,
        color: "red",
        type: "splineArea",
        // type: "column",
        indexLabelFontFamily: "tahoma",
        dataPoints: [
            { label: "19/9", y: 10040 },
            { label: "20/9", y: 8681 },
            { label: "21/9", y: 11692 },
            { label: "22/9", y: 9951 },
            { label: "23/9", y: 9472 },
            { label: "24/9", y: 8537 },
            { label: "25/9", y: 9706 }
        ]
    }]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer__cured", {

    animationEnabled: true,
    animationDuration: 2000,
    interactivityEnabled: true,
    // exportEnabled: true,
    width: 550,
    height: 285,
    data: [{
        // Change type to "doughnut", "line", "splineArea", etc.
        // type: "column",
        fillOpacity: .2,
        color: "green",
        type: "splineArea",
        indexLabelFontFamily: "tahoma",
        dataPoints: [
            { label: "19/9", y: 9137 },
            { label: "20/9", y: 6821 },
            { label: "21/9", y: 11017 },
            { label: "22/9", y: 11919 },
            { label: "23/9", y: 6226 },
            { label: "24/9", y: 12371 },
            { label: "25/9", y: 10590 }
        ]
    }]
});
chart.render();

var chart = new CanvasJS.Chart("chartContainer__die", {

    animationEnabled: true,
    animationDuration: 2000,
    interactivityEnabled: true,
    // exportEnabled: true,
    width: 550,
    height: 285,

    data: [{
        // Change type to "doughnut", "line", "splineArea", etc.
        // type: "column",
        fillOpacity: .2,
        color: "black",
        type: "splineArea",
        indexLabelFontFamily: "tahoma",
        dataPoints: [
            { label: "19/9", y: 233 },
            { label: "20/9", y: 215 },
            { label: "21/9", y: 240 },
            { label: "22/9", y: 236 },
            { label: "23/9", y: 236 },
            { label: "24/9", y: 203 },
            { label: "25/9", y: 180 }
        ]
    }]
});
chart.render();