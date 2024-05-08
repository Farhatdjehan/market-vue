<template>
    <TopHead menu="Detail Stock" />
    <List type="detail" />
    <div class="filter-wrap">
        <div :class="active == 1 ? 'filter-item active' : 'filter-item'" @click="handleActive(1)">1D</div>
        <div :class="active == 2 ? 'filter-item active' : 'filter-item'" @click="handleActive(2)">1M</div>
        <div :class="active == 3 ? 'filter-item active' : 'filter-item'" @click="handleActive(3)">3M</div>
        <div :class="active == 4 ? 'filter-item active' : 'filter-item'" @click="handleActive(4)">1Y</div>
        <div :class="active == 5 ? 'filter-item active' : 'filter-item'" @click="handleActive(5)">5Y</div>
        <div :class="active == 6 ? 'filter-item active' : 'filter-item'" @click="handleActive(6)">ALL</div>
    </div>
    <div class="wrap-chart">
        <apexchart height="300" id="custom-chart" :options="chartOptions" :series="chartSeries"></apexchart>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import List from "./components/common/List.vue";
import TopHead from "./components/common/TopHead.vue";
export default {
    data() {
        return {
            active: 1,
            chartOptions: {
                chart: {
                    type: 'area',
                    toolbar: {
                        show: false // Optional: hide the toolbar
                    },
                },
                stroke: {
                    curve: 'smooth' // Make the lines smooth
                },

                xaxis: {
                    labels: {
                        show: true,
                        style: {
                            colors: ['#a4a4a4'],
                            fontSize: '10px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                        // formatter: (value) => { return val },
                    },
                    axisBorder: {
                        show: true,
                    },
                    axisTicks: {
                        show: false,
                    },
                },
                // colors: ["#FFFFFF"],
                yaxis: {
                    opposite: true,
                    labels: {
                        show: true,
                        align: 'right',
                    }
                },
                grid: {
                    show: false,
                    borderColor: '#000',
                    strokeDashArray: 0,
                    position: 'back',
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },

                },
                dataLabels: {
                    enabled: false
                },
                // fill: {
                //     type: 'gradient',
                //     gradient: {
                //         shadeIntensity: 1,
                //         opacityFrom: 0.7,
                //         opacityTo: 0.0,
                //         stops: [0, 100]
                //     }
                // },
            },
            chartSeries: [{
                name: 'Series 1',
                data: [30, 40, 45, 30, 50, 20, 20, 10, 50, 70, 100, 50]
            }]
        }
    },
    name: 'App',
    methods: {
        handleActive(index) {
            this.active = index
        }
    },
    components: {
        TopHead, List,
        apexchart: VueApexCharts
    }
}
</script>

<style scoped>
.filter-wrap {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 16px;
    margin-bottom: 42px;
}

.wrap-chart {
    height: 300px;
}

.filter-wrap .filter-item {
    border-radius: 6px;
    background: #f6f6f6;
    padding: 3px 10px;
    font-size: 12px;
    font-weight: 500;
    color: #5d5d5d
}

.filter-wrap .filter-item.active {
    background: #3b81f5;
    color: #fff;
}
</style>