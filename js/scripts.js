/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv1");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        startAngle: 160, endAngle: 380
      })
    );
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    
    var series0 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "bottles",
        categoryField: "country",
        startAngle: 160,
        endAngle: 380,
        radius: am5.percent(70),
        innerRadius: am5.percent(65)
      })
    );
    
    var colorSet = am5.ColorSet.new(root, {
      colors: [series0.get("colors").getIndex(0)],
      passOptions: {
        lightness: -0.05,
        hue: 0
      }
    });
    
    series0.set("colors", colorSet);
    
    series0.ticks.template.set("forceHidden", true);
    series0.labels.template.set("forceHidden", true);
    
    var series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        startAngle: 160,
        endAngle: 380,
        valueField: "litres",
        innerRadius: am5.percent(80),
        categoryField: "country"
      })
    );
    
    series1.ticks.template.set("forceHidden", true);
    series1.labels.template.set("forceHidden", true);
    
    var label = chart.seriesContainer.children.push(
      am5.Label.new(root, {
        textAlign: "center",
        centerY: am5.p50,
        centerX: am5.p50,
        text: "[bold fontSize:14px]Total Amount paid to employers & SEPs[/]:\n[bold fontSize:30px]HK$91.4B[/] \n [bold fontSize:14px]Averge no. of employer beneficiaries:[/]\n[bold fontSize:30px]152,303[/]\n [bold fontSize:14px]Averge no. of committed headcounts:[/]\n[bold fontSize:30px]1,935,207[/]\n [bold fontSize:14px] No. of self employed beneficiaries:[/]\n[bold fontSize:30px]123,000[/]"

      })
    );
    
    var data = [
      {
        country: "[bold fontSize:14px]HK$45.06B[/] was paid to employers during Phase 1 Jun-Aug 2020",
        litres: 45.06,
      },
      {
        country: "[bold fontSize:14px]HK$45.45B[/] was paid to employers during Phase 2 Sep-Nov 2020",
        litres: 45.45,
      },
      {
        country: "[bold fontSize:14px]HK$900 million[/]  was paid to SEPs",
        litres: 0.9,
      },
      {
        country: "[bold fontSize:14px]1,938,510 headcounts[/]  committed during Phase 1 Jun-Aug 2020",
        bottles: 1938510
      },
      {
        country: "[bold fontSize:14px]1,931,903 headcounts[/] committed during Phase 2 Sep-Nov 2020",
        bottles: 1931903
      },
      {
        country: "[bold fontSize:14px]123,000 self-employed individuals[/] were benefited from one-off lump-sum subsidy",
        bottles: 120000
      },

    ];
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series0.data.setAll(data);
    series1.data.setAll(data);
    
    });

    //chart2
    am5.ready(function() {

        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv2");
        
        
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        var chart = root.container.children.push(am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "panX",
          wheelY: "zoomX",
          layout: root.verticalLayout
        }));
        
        
        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        var legend = chart.children.push(am5.Legend.new(root, {
          centerX: am5.p50,
          x: am5.p50
        }))
        
        var data = [{
            "year": "DAIRY FARM COMPANY",
            "income": 799.4,
            "expenses":36.9
          }, {
            "year": "KOWLOON MOTOR BUS COMPANY(KMT)",
            "income": 650.1,
            "expenses": 51.6
          }, {
            "year": "MAXIM'S CATERERS",
            "income": 643,
            "expenses": 47.8
          }, {
            "year": "HKT Services",
            "income": 536.6,
            "expenses": 46.8
          }, {
            "year": "	Café de Coral Group",
            "income": 462.7,
            "expenses": 36.6
          }, {
              "year": "CATHAY PACIFIC AIRWAYS",
              "income": 458.2,
              "expenses": 25.8
            }, {
              "year": "HONG KONG AIRCRAFT ENGINEERING COMPANY",
              "income": 330.3,
              "expenses": 54.5
            }, {
              "year": "PARKnSHOP (HK)",
              "income": 323.9,
              "expenses": 39.4
            }, {
              "year": "GAMMON CONSTRUCTION",
              "income": 322.1,
              "expenses": 53.1
            }, {
              "year": "HONGKONG INTERNATIONAL THEME PARKS",
              "income": 306.6,
              "expenses": 43.2
            }];
       
        
        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        var yRenderer = am5xy.AxisRendererY.new(root, {
              cellStartLocation: 0.1,
              cellEndLocation: 0.9
            });
        
        yRenderer.grid.template.set("location", 1);
        
        var yAxis = chart.yAxes.push(
          am5xy.CategoryAxis.new(root, {
            categoryField: "year",
            renderer: yRenderer,
            tooltip: am5.Tooltip.new(root, {})
          })
        );
        
        yAxis.data.setAll(data);
        
        var xAxis = chart.xAxes.push(
          am5xy.ValueAxis.new(root, {
            min: 0,
            renderer: am5xy.AxisRendererX.new(root, { strokeOpacity: 0.1 })
          })
        );
        
        
        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        var series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
          name: "Total Amount of Subsidies Received (in HK$ millions)",
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: "income",
          categoryYField: "year",
          sequencedInterpolation: true,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
          })
        }));
        
        series1.columns.template.setAll({
          height: am5.percent(70)
        });
        
        
        var series2 = chart.series.push(am5xy.LineSeries.new(root, {
          name: "Subsidies Per Headcount (in HK$ thousands)",
          xAxis: xAxis,
          yAxis: yAxis,
          valueXField: "expenses",
          categoryYField: "year",
          sequencedInterpolation: true,
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "[bold]{name}[/]\n{categoryY}: {valueX}"
          })
        }));
        
        series2.strokes.template.setAll({
          strokeWidth: 2,
        });
        
        series2.bullets.push(function() {
          return am5.Bullet.new(root, {
            locationY: 0.5,
            sprite: am5.Circle.new(root, {
              radius: 5,
              stroke: series2.get("stroke"),
              strokeWidth: 2,
              fill: root.interfaceColors.get("background")
            })
          });
        });
        
        
        // Add legend
        // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
        var legend = chart.children.push(am5.Legend.new(root, {
          centerX: am5.p50,
          x: am5.p50
        }));
        
        legend.data.setAll(chart.series.values);
        
        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
          behavior: "zoomY"
        }));
        cursor.lineX.set("visible", false);
        
        series1.data.setAll(data);
        series2.data.setAll(data);
        
        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series1.appear();
        series2.appear();
        chart.appear(1000, 100);
        
        }); 


        //Chart3
        am5.ready(function() {

            // Create root element
            // https://www.amcharts.com/docs/v5/getting-started/#Root_element
            var root = am5.Root.new("chartdiv3");
            
            // Create custom theme
            // https://www.amcharts.com/docs/v5/concepts/themes/#Quick_custom_theme
            var myTheme = am5.Theme.new(root);
            myTheme.rule("Label").set("fontSize", "0.8em");
            
            // Set themes
            // https://www.amcharts.com/docs/v5/concepts/themes/
            root.setThemes([
              am5themes_Animated.new(root),
              myTheme
            ]);
            
            // Create wrapper container
            var container = root.container.children.push(am5.Container.new(root, {
              width: am5.p100,
              height: am5.p100,
              layout: root.horizontalLayout
            }));
            
            // Create first chart
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
            var chart0 = container.children.push(am5percent.PieChart.new(root, {
              innerRadius: am5.p50,
              tooltip: am5.Tooltip.new(root, {})
            }));
            
            // Create series
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
            var series0 = chart0.series.push(am5percent.PieSeries.new(root, {
              valueField: "value",
              categoryField: "category",
              alignLabels: false
            }));
            
            series0.labels.template.setAll({
              textType: "circular",
              templateField: "dummyLabelSettings"
            });
            
            series0.ticks.template.set("forceHidden", true);
            
            var sliceTemplate0 = series0.slices.template;
            sliceTemplate0.setAll({
              draggable: true,
              templateField: "settings",
              cornerRadius: 5
            });
            
            // Separator line
            container.children.push(am5.Line.new(root, {
              layer: 1,
              height: am5.percent(60),
              y: am5.p50,
              centerY: am5.p50,
              strokeDasharray: [4, 4],
              stroke: root.interfaceColors.get("alternativeBackground"),
              strokeOpacity: 0.5
            }));
            
            // Label
            container.children.push(am5.Label.new(root, {
              layer: 1,
              text: "Drag slices over the line for comparsion",
              y: am5.p50,
              textAlign: "center",
              rotation: -90,
              isMeasured: false
            }));
            
            // Create second chart
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
            var chart1 = container.children.push(am5percent.PieChart.new(root, {
              innerRadius: am5.p50,
              tooltip: am5.Tooltip.new(root, {})
            }));
            
            // Create series
            // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
            var series1 = chart1.series.push(am5percent.PieSeries.new(root, {
              valueField: "value",
              categoryField: "category",
              alignLabels: false
            }));
            
            series1.labels.template.setAll({
              textType: "circular",
              radius: 20,
              templateField: "dummyLabelSettings"
            });
            
            series1.ticks.template.set("forceHidden", true);
            
            var sliceTemplate1 = series1.slices.template;
            sliceTemplate1.setAll({
              draggable: true,
              templateField: "settings",
              cornerRadius: 5
            });
            
            var previousDownSlice;
            
            // change layers when down
            sliceTemplate0.events.on("pointerdown", function (e) {
              if (previousDownSlice) {
                //  previousDownSlice.set("layer", 0);
              }
              e.target.set("layer", 1);
              previousDownSlice = e.target;
            });
            
            sliceTemplate1.events.on("pointerdown", function (e) {
              if (previousDownSlice) {
                // previousDownSlice.set("layer", 0);
              }
              e.target.set("layer", 1);
              previousDownSlice = e.target;
            });
            
            // when released, do all the magic
            sliceTemplate0.events.on("pointerup", function (e) {
              series0.hideTooltip();
              series1.hideTooltip();
            
              var slice = e.target;
              if (slice.x() > container.width() / 4) {
                var index = series0.slices.indexOf(slice);
                slice.dataItem.hide();
            
                var series1DataItem = series1.dataItems[index];
                series1DataItem.show();
                series1DataItem.get("slice").setAll({ x: 0, y: 0 });
            
                handleDummy(series0);
                handleDummy(series1);
              } else {
                slice.animate({
                  key: "x",
                  to: 0,
                  duration: 500,
                  easing: am5.ease.out(am5.ease.cubic)
                });
                slice.animate({
                  key: "y",
                  to: 0,
                  duration: 500,
                  easing: am5.ease.out(am5.ease.cubic)
                });
              }
            });
            
            sliceTemplate1.events.on("pointerup", function (e) {
              var slice = e.target;
            
              series0.hideTooltip();
              series1.hideTooltip();
            
              if (slice.x() < container.width() / 4) {
                var index = series1.slices.indexOf(slice);
                slice.dataItem.hide();
            
                var series0DataItem = series0.dataItems[index];
                series0DataItem.show();
                series0DataItem.get("slice").setAll({ x: 0, y: 0 });
            
                handleDummy(series0);
                handleDummy(series1);
              } else {
                slice.animate({
                  key: "x",
                  to: 0,
                  duration: 500,
                  easing: am5.ease.out(am5.ease.cubic)
                });
                slice.animate({
                  key: "y",
                  to: 0,
                  duration: 500,
                  easing: am5.ease.out(am5.ease.cubic)
                });
              }
            });
            
            // data
            var data = [
              {
                category: "Dummy",
                value: 1000,
                settings: {
                  fill: am5.color(0xdadada),
                  stroke: am5.color(0xdadada),
                  fillOpacity: 0.3,
                  strokeDasharray: [4, 4],
                  tooltipText: null,
                  draggable: false
                },
                dummyLabelSettings: {
                  forceHidden: true
                }
              },
              {
                category: "DAIRY FARM COMPANY",
                value: 21611
              },
              {
                category: "KOWLOON MOTOR BUS COMPANY",
                value: 12590
              },
              {
                category: "MAXIM'S CATERERS",
                value: 13456
              },
              {
                category: "HKT Services",
                value: 11465
              },
              {
                category: "CATHAY PACIFIC AIRWAYS",
                value: 17703
              },
              {
                category: "HONG KONG AIRCRAFT ENGINEERING COMPANY",
                value: 6053
              }
              ,
              {
                category: "PARKnSHOP (HK) Limited",
                value: 8215
              },
              {
                category: "	Café de Coral Group",
                value: 12640
              },
              {
                category: "GAMMON CONSTRUCTION",
                value: 6066
              },
              {
                category: "HONGKONG INTERNATIONAL THEME PARK",
                value: 7092
              }
            ];
            
            // show/hide dummy slice depending if there are other visible slices
            function handleDummy(series) {
              // count visible data items
              var visibleCount = 0;
              am5.array.each(series.dataItems, function (dataItem) {
                if (!dataItem.isHidden()) {
                  visibleCount++;
                }
              });
              // if all hidden, show dummy
              if (visibleCount == 0) {
                series.dataItems[0].show();
              } else {
                series.dataItems[0].hide();
              }
            }
            // set data
            series0.data.setAll(data);
            series1.data.setAll(data);
            
            // hide all except dummy
            am5.array.each(series1.dataItems, function (dataItem) {
              if (dataItem.get("category") != "Dummy") {
                dataItem.hide(0);
              }
            });
            
            // hide dummy
            series0.dataItems[0].hide(0);
            
            // reveal container
            container.appear(1000, 100);
            
            });

            am5.ready(function() {

                // Create root element
                // https://www.amcharts.com/docs/v5/getting-started/#Root_element
                var root = am5.Root.new("chartdiv4");
                
                
                // Set themes
                // https://www.amcharts.com/docs/v5/concepts/themes/
                root.setThemes([
                  am5themes_Animated.new(root)
                ]);
                
                
                // Create chart
                // https://www.amcharts.com/docs/v5/charts/xy-chart/
                var chart = root.container.children.push(am5xy.XYChart.new(root, {
                  panX: false,
                  panY: false,
                  wheelX: "panX",
                  wheelY: "zoomX",
                  layout: root.verticalLayout
                }));
                
                
                // Add legend
                // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
                var legend = chart.children.push(
                  am5.Legend.new(root, {
                    centerX: am5.p50,
                    x: am5.p50
                  })
                );
                
                var data = [{
                  "year": "2020",
                  "Age 15-29": 654,
                  "Age 30-39": 981.7,
                  "Age 40-49": 953.5,
                  "Age 50-59": 882.5,
                  "Age 60 or above": 446.7
                }, {
                  "year": "2021",
                  "Age 15-29": 614.5,
                  "Age 30-39": 953,
                  "Age 40-49": 956.1,
                  "Age 50-59": 880,
                  "Age 60 or above": 466.8
                }, {
                  "year": "2022",
                  "Age 15-29": 563.2,
                  "Age 30-39": 911.1,
                  "Age 40-49": 938.3,
                  "Age 50-59": 864.2,
                  "Age 60 or above": 499.5
                }]
                
                
                // Create axes
                // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
                var xRenderer = am5xy.AxisRendererX.new(root, {
                  cellStartLocation: 0.1,
                  cellEndLocation: 0.9
                })
                
                var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
                  categoryField: "year",
                  renderer: xRenderer,
                  tooltip: am5.Tooltip.new(root, {})
                }));
                
                xRenderer.grid.template.setAll({
                  location: 1
                })
                
                xAxis.data.setAll(data);
                
                var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
                  renderer: am5xy.AxisRendererY.new(root, {
                    strokeOpacity: 0.1
                  })
                }));
                
                
                // Add series
                // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
                function makeSeries(name, fieldName) {
                  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
                    name: name,
                    xAxis: xAxis,
                    yAxis: yAxis,
                    valueYField: fieldName,
                    categoryXField: "year"
                  }));
                
                  series.columns.template.setAll({
                    tooltipText: "{name}, Total Labour Force:{valueY}K",
                    width: am5.percent(90),
                    tooltipY: 0,
                    strokeOpacity: 0
                  });
                
                  series.data.setAll(data);
                
                  // Make stuff animate on load
                  // https://www.amcharts.com/docs/v5/concepts/animations/
                  series.appear();
                
                  series.bullets.push(function() {
                    return am5.Bullet.new(root, {
                      locationY: 0,
                      sprite: am5.Label.new(root, {
                        text: "{valueY}",
                        fill: root.interfaceColors.get("alternativeText"),
                        centerY: 0,
                        centerX: am5.p50,
                        populateText: true
                      })
                    });
                  });
                
                  legend.data.push(series);
                }
                
                makeSeries("Age 15-29", "Age 15-29");
                makeSeries("Age 30-39", "Age 30-39");
                makeSeries("Age 40-49", "Age 40-49");
                makeSeries("Age 50-59", "Age 50-59");
                makeSeries("Age 60 or above", "Age 60 or above");

                
                
                // Make stuff animate on load
                // https://www.amcharts.com/docs/v5/concepts/animations/
                chart.appear(1000, 100);
                
                }); 