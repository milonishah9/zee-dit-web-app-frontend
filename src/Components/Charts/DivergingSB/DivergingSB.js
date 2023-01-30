import React, { useEffect } from "react";
import './SB.css'

import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";



const DivergingSB = () => {
    // const {data} = props
    var data = [{
        category: " ",
        negative1: -13,
        negative2: -23,
        positive1: 49,
        positive2: 25
    }];

    useEffect  (() => {

        var root = am5.Root.new("chartdiv");

        var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            // wheelX: "panX",
            // wheelY: "zoomX",
            layout: root.horizontalLayout,
            arrangeTooltips: false
        })
        );

        // Use only absolute numbers
        root.numberFormatter.set("numberFormat", "#.#s'%");

        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        var legend = chart.children.push(
        am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50
        })
        );

        // Data
        

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var yAxis = chart.yAxes.push(
        am5xy.CategoryAxis.new(root, {
            categoryField: "category",
            renderer: am5xy.AxisRendererY.new(root, {
            inversed: true,
            cellStartLocation: 0.1,
            cellEndLocation: 0.9
            })
        })
        );

        yAxis.data.setAll(data);

        var xAxis = chart.xAxes.push(
        am5xy.ValueAxis.new(root, {
            calculateTotals: true,
            min: -100,
            max: 100,
            renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 50
            })
        })
        );

        var xRenderer = yAxis.get("renderer");
        xRenderer.axisFills.template.setAll({
        fill: am5.color(0x000000),
        fillOpacity: 0.05,
        visible: true
        });

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        function createSeries(field, name, color) {
        var series = chart.series.push(
            am5xy.ColumnSeries.new(root, {
            xAxis: xAxis,
            yAxis: yAxis,
            name: name,
            valueXField: field,
            valueXShow: "valueXTotalPercent",
            categoryYField: "category",
            sequencedInterpolation: true,
            stacked: true,
            fill: color,
            stroke: color,
            calculateAggregates: true
            })
        );

        series.columns.template.setAll({
            height: am5.p100
        });

        series.bullets.push(function(root, series) {
            return am5.Bullet.new(root, {
            locationX: 0.5,
            locationY: 0.5,
            sprite: am5.Label.new(root, {
                fill: am5.color(0xffffff),
                centerX: am5.p50,
                centerY: am5.p50,
                text: "{valueX}",
                populateText: true,
                oversizedBehavior: "hide"
            })
            });
        });

        series.data.setAll(data);
        series.appear();

        return series;
        }

        var positiveColor = root.interfaceColors.get("positive");
        var negativeColor = root.interfaceColors.get("negative");

        createSeries("negative2", "Unlikely", am5.Color.lighten(negativeColor, 0.5));
        createSeries("negative1", "Never", negativeColor);
        createSeries("positive1", "Sometimes", am5.Color.lighten(positiveColor, 0.5));
        createSeries("positive2", "Very often", positiveColor);

        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        var legend = chart.children.push(
        am5.Legend.new(root, {
            centerY: am5.p50,
            y: am5.p50,
            layout: root.verticalLayout,
            marginLeft: 50
        })
        );

        legend.data.setAll(chart.series.values);

        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        chart.appear(1000, 100);  

    },[] )

   
    return(
        // <div id="figure"> </div>
        <div id="chartdiv"></div>
    );

}

export default DivergingSB