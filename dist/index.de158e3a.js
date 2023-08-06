var myChart = echarts.init(document.getElementById("skills"));
// 指定图表的配置项和数据
var option = {
    radar: {
        // shape: 'circle',
        indicator: [
            {
                name: "静态页面",
                max: 100
            },
            {
                name: "编程基础",
                max: 100
            },
            {
                name: "Vue全家桶",
                max: 100
            },
            {
                name: "React全家桶",
                max: 100
            },
            {
                name: "开发能力",
                max: 100
            },
            {
                name: "沟通能力",
                max: 100
            }
        ]
    },
    series: [
        {
            name: "Budget vs spending",
            type: "radar",
            data: [
                {
                    value: [
                        90,
                        85,
                        90,
                        70,
                        85,
                        70
                    ],
                    name: "能力雷达"
                }
            ]
        }
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//# sourceMappingURL=index.de158e3a.js.map
