import Ember from 'ember';

export default Ember.Controller.extend({
    chartMode: false, // Available options: a falsy value, 'StockChart', 'Map'.
    // If `mode` is not provided or is a falsy value, the chart is initialized in Charts mode.
    // If `mode` is a string, it is passed to Highcharts as the first argument.
    // When Highcharts introduces a new mode, you will be able to use it here right away.

    chartOptions: {
        chart: {
            type: 'scatter'
        },
        title: {
            text: 'Control Chart'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Date'
            },
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Cycle Time (Days)'
            }
        }
    },

    chartData: [
        {
            name: 'Expedited',
            color: 'rgba(223, 83, 83, .5)',
            data: [[(new Date('1/1/2015')).getTime() , 1], [(new Date('1/5/2015')).getTime(), 4]]
        }, {
            name: 'Standard',
            color: 'rgba(119, 152, 191, .5)',
            data: [[(new Date('1/3/2015')).getTime(), 5], [(new Date('1/12/2015')).getTime(), 12]]
        }
    ],

    //theme: defaultTheme
});
