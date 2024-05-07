<template>
    <div class="wrap-highlight">
        <div class="highlight-card">
            <div class="top-wrap">
                <div class="left">
                    <div class="main-stock_name">IHSG</div>
                    <div class="main-stock_value">Rp 8.350</div>
                </div>
                <div class="right">
                    <button>Filter</button>
                </div>
            </div>
            <div class="graph-wrap">
                <div>
                    <apexchart height="170" id="custom-chart" :options="chartOptions" :series="chartSeries">
                    </apexchart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'area',
                    toolbar: {
                        show: false // Optional: hide the toolbar
                    }, sparkline: {
                        enabled: false,
                    }
                },
                stroke: {
                    curve: 'smooth' // Make the lines smooth
                },

                xaxis: {
                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                colors: ["#FFFFFF"],
                yaxis: {
                    labels: {
                        show: false
                    }
                },
                grid: {
                    show: false,
                    borderColor: '#fff',
                    strokeDashArray: 0,
                    position: 'back',
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },

                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.0,
                        stops: [0, 100]
                    }
                },
            },
            chartSeries: [{
                name: 'Series 1',
                data: [30, 40, 45, 30, 50, 20, 20, 10, 50, 70, 100, 50]
            }]
        }
    },
    methods: {
        // generateDateList() {
        //     const currentDate = this.currentDate;
        //     const dates = [];
        //     for (let i = -2; i <= 2; i++) {
        //         const newDate = new Date(currentDate);
        //         newDate.setDate(currentDate.getDate() + i);
        //         dates.push(newDate);
        //     }
        //     this.dates = dates;
        // },
    },
    mounted() {

        // this.generateDateList()
    },
    components: {
        apexchart: VueApexCharts
    }
}
</script>

<style>
.wrap-highlight {
    padding: 8px 0 8px;
    /* margin-top: 16px */
}

#custom-chart .apexcharts-canvas {
    left: -6px;
    top: -42px;
}

.highlight-card {
    width: calc(100%);
    background-color: #3b81f5;
    border-radius: 16px;
    margin-bottom: 24px;
}

.graph-wrap {
    height: 130px;
}

.top-wrap {
    display: flex;
    padding: 20px;

    justify-content: space-between;
    align-items: center;
}

.top-wrap .left {}

.top-wrap .left .main-stock_name {
    color: #ffffffbe;
    /* font-weight: 500; */
}

.top-wrap .left .main-stock_value {
    color: #fff;
    font-weight: 600;
    font-size: 28px;
    line-height: 32px;
}

.top-wrap .right button {
    background-color: #4f92ff;
    color: #fff;
    font-weight: 500;
    padding: 8px 24px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
}
</style>