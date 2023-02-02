import React, { useRef } from "react";
import "./Links.css";
import * as d3 from "d3v3";
import * as dv3 from "d3v3";
import * as dv4 from "d3v4";
import { useEffect } from "react";



const Links = () => {
   const svgRef = useRef();
  var data1 = [
    {
      date: "2006-02-22",
      value: 950,
    },
    {
      date: "2006-08-22",
      value: 1000,
    },
    {
      date: "2007-01-11",
      value: 700,
    },
    {
      date: "2008-10-01",
      value: 534,
    },
    {
      date: "2009-02-24",
      value: 1423,
    },
    {
      date: "2010-12-30",
      value: 1222,
    },
    {
      date: "2011-05-15",
      value: 948,
    },
    {
      date: "2012-04-02",
      value: 1938,
    },
    {
      date: "2013-08-19",
      value: 1245,
    },
    {
      date: "2013-11-11",
      value: 888,
    },
  ];

  var data2 = [
    {
      date: "2005-02-22",
      value: 950,
    },
    {
      date: "2006-08-22",
      value: 1000,
    },
    {
      date: "2007-01-11",
      value: 700,
    },
    {
      date: "2008-10-01",
      value: 534,
    },
    {
      date: "2009-02-24",
      value: 1423,
    },
    {
      date: "2010-12-30",
      value: 1222,
    },
    {
      date: "2011-05-15",
      value: 948,
    },
    {
      date: "2012-04-02",
      value: 1938,
    },
    {
      date: "2013-08-19",
      value: 1245,
    },
    {
      date: "2015-11-11",
      value: 2000,
    },
    {
      date: "2016-03-16",
      value: 4500,
    },
  ];

  useEffect(() => {

    var data1 = [
      {
        date  : '2006-02-22',
        value : 950
      },
      {
        date  : '2006-08-22',
        value : 1000
      },
      {
        date  : '2007-01-11',
        value : 700
      },
      {
        date  : '2008-10-01',
        value : 534
      },
      {
        date  : '2009-02-24',
        value : 1423
      },
      {
        date  : '2010-12-30',
        value : 1222
      },
      {
        date  : '2011-05-15',
        value : 948
      },
      {
        date  : '2012-04-02',
        value : 1938
      },
      {
        date  : '2013-08-19',
        value : 1245
      },
      {
        date  : '2013-11-11',
        value : 888
      }
    ];
    
    
    // $(document).ready(function(){
      init();
      render();
    
      d3.select('#toggleData').on('click', function(){
        if(currentData == 'data1'){
          updateData(data2);
          currentData = 'data2';
        }
        else if(currentData == 'data2'){
          updateData(data1);
          currentData = 'data1';
        }
      });
    
      d3.select(window).on('resize', function(){
        resize();
      });
    // });
    
    var chartContainer;
    var svg;
    var marginContainer;
    var x;
    var y;
    var xAxis;
    var yAxis;
    var width;
    var height;
    var line;
    var area;
    var startData;
    var currentData = 'data1';
    
    var margin = {top: 20, right: 30, bottom: 30, left: 40};
    var	maxWidth = 800 - margin.left - margin.right;
    
    var detailWidth  = 150;
    var detailHeight = 75;
    var detailMargin = 15;
    
    function init(){
      chartContainer = d3.select('.chart-container');
      svg = chartContainer.append('svg');
      marginContainer = svg.append('g').attr('class', 'margin-container');
    }
    
    function render(){
      var data = eval(currentData);
    
      var parse = d3.time.format( '%Y-%m-%d' ).parse;
    
      data = data.map( function( datum ){
        if(typeof datum.date == 'string'){
          datum.date = parse(datum.date);
        }
    
        return datum;
      } );
    
      getDimensions();
    
      svg.attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    
      marginContainer
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
      x = d3.time.scale().range( [ 0, width ] );
      y = d3.scale.linear().range( [ height, 0 ] );
      x.domain(d3.extent(data, function(d) { return d.date; }));
      y.domain([0, d3.max(data, function(d) { return d.value; }) * 1.25]);
    
      area = d3.svg.area()
        .x( function( d )  { return x( d.date ); } )
        .y0( height )
        .y1( function( d ) { return y( d.value ); } );
    
      line = d3.svg.area()
        .x( function( d )  { return x( d.date ); } )
        .y( function( d ) { return y( d.value ); } );
    
      startData = data.map( function( datum ) {
        return {
          date  : datum.date,
          value : 0
        };
      } );
    
      xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');
    
      yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');
    
      marginContainer.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);
    
      marginContainer.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', '1.5em')
        .style('text-anchor', 'end')
        .text('Price ($)');
    
      marginContainer.append( 'path' )
        .datum( startData )
        .attr('class', 'line')
        .attr( 'd', line )
        .transition()
        .duration( 500 )
        .ease('quad')
        .attrTween( 'd', function() {
          var interpolator = d3.interpolateArray( startData, data );
    
          return function( t ) {
            return line( interpolator( t ) );
          }
        } )
        .each('end', function() {
          drawCircles( data, marginContainer );
        });
    
      marginContainer.append( 'path' )
        .datum( startData )
        .attr('class', 'area')
        .attr( 'd', area )
        .transition()
        .duration( 500 )
        .ease('quad')
        .attrTween( 'd', function() {
          var interpolator = d3.interpolateArray( startData, data );
    
          return function( t ) {
            return area( interpolator( t ) );
          }
        } );
    }
    var circleContainer
    function drawCircle( datum, index ) {
      circleContainer.datum( datum )
        .append( 'circle' )
        .attr( 'class', 'circle' )
        .attr( 'r', 0 )
        .attr(
          'cx',
          function( d ) {
            return x( d.date );
          }
        )
        .attr(
          'cy',
          function( d ) {
            return y( d.value );
          }
        )
        .on( 'mouseenter', function( d ) {
          d3.select( this )
            .attr(
              'class',
              'circle active'
            )
            .attr( 'r', 7 );
    
          d.active = true;
    
          showCircleDetail( d );
        } )
        .on( 'mouseout', function( d ) {
          d3.select( this )
            .attr(
              'class',
              'circle'
            )
            .attr( 'r', 6 );
    
          if ( d.active ) {
            hideCircleDetails();
    
            d.active = false;
          }
        } )
        .on( 'click touch', function( d ) {
          if ( d.active ) {
            showCircleDetail( d )
          } else {
            hideCircleDetails();
          }
        } )
        .transition()
        .delay( 100 * index )
        .duration(750)
        .ease('elastic', 1.5, .75)
        .attr( 'r', 6 )
      ;
    }
    
    function drawCircles( data, container ) {
      circleContainer = container.append( 'g').attr('class', 'circles');
      data.forEach( function( datum, index ) {
        drawCircle( datum, index );
      } );
    }
    
    function hideCircleDetails() {
      circleContainer.selectAll( '.bubble' )
        .remove();
    }
    
    function showCircleDetail( data ) {
      var details = circleContainer.append( 'g' )
        .attr( 'class', 'bubble' )
        .attr(
          'transform',
          function() {
            var result = 'translate(';
    
            var xVal = x( data.date ) - detailWidth/2;
            if(xVal + detailWidth > width ){
              xVal = width - detailWidth;
            }
            else if(xVal < 0){
              xVal = 0;
            }
    
            result += xVal;
            result += ', ';
            result += y( data.value ) - detailHeight - detailMargin;
            result += ')';
    
            return result;
          }
        );
    
      details.append( 'rect' )
        .attr( 'width', detailWidth )
        .attr( 'height', detailHeight )
        .attr('rx', 5)
        .attr('ry', 5);
    
      var text = details.append( 'text' )
        .attr( 'class', 'text' );
    
      var dateFormat = d3.time.format("%m/%d/%Y");
    
      text.append( 'tspan' )
        .attr( 'class', 'price' )
        .attr( 'x', detailWidth / 2 )
        .attr( 'y', detailHeight / 3 )
        .attr( 'text-anchor', 'middle' )
        .text( 'Price: ' + data.value );
    
      text.append( 'tspan' )
        .attr( 'class', 'date' )
        .attr( 'x', detailWidth / 2 )
        .attr( 'y', detailHeight / 4 * 3 )
        .attr( 'text-anchor', 'middle' )
        .text( 'Date: ' + dateFormat(data.date) );
    }
    
    function updateData(data) {
    
      var parse = d3.time.format( '%Y-%m-%d' ).parse;
    
      data = data.map( function( datum ){
        if(typeof datum.date == 'string'){
          datum.date = parse(datum.date);
        }
        return datum;
      } );
    
      getDimensions();
    
      svg.attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    
      marginContainer
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
      x = d3.time.scale().range( [ 0, width ] );
      y = d3.scale.linear().range( [ height, 0 ] );
      x.domain(d3.extent(data, function(d) { return d.date; }));
      y.domain([0, d3.max(data, function(d) { return d.value; }) * 1.25]);
    
      xAxis = d3.svg.axis()
        .scale(x)
        .orient('bottom');
    
      yAxis = d3.svg.axis()
        .scale(y)
        .orient('left');
    
      area = d3.svg.area()
        .x( function( d )  { return x( d.date ); } )
        .y0( height )
        .y1( function( d ) { return y( d.value ); } );
    
      line = d3.svg.area()
        .x( function( d )  { return x( d.date ); } )
        .y( function( d ) { return y( d.value ); } );
    
      startData = data.map( function( datum ) {
        return {
          date  : datum.date,
          value : 0
        };
      } );
    
      marginContainer.select('.x.axis')
        .transition()
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);
    
      marginContainer.select('.y.axis')
        .transition()
        .call(yAxis);
    
      marginContainer.select( '.circles' ).remove();
    
      marginContainer.select('.line')
        .transition()
        .duration( 500 )
        .ease('quad')
        .attrTween( 'd', function() {
          var interpolator = d3.interpolateArray( startData, data );
    
          return function( t ) {
            return line( interpolator( t ) );
          }
        } )
        .each('end', function() {
          drawCircles( data, marginContainer );
        });
    
      marginContainer.select( '.area' )
        .transition()
        .duration( 500 )
        .ease('quad')
        .attrTween( 'd', function() {
          var interpolator = d3.interpolateArray( startData, data );
    
          return function( t ) {
            return area( interpolator( t ) );
          }
        } );
    }
    
    function getDimensions() {
      var containerWidth = parseInt(d3.select('.chart-container').style('width'));
      margin.top = 20;
      margin.right = 30;
      margin.left = 40;
      margin.bottom = 30;
    
      width = containerWidth - margin.left - margin.right;
      if(width > maxWidth){
        width = maxWidth;
      }
      height = .75 * width;
    }
    
    function resize(){
      updateData(eval(currentData));
    }
    
  }, []);

  return (
    <div >
      {/* <div className="line-chart-all-dots">
        <div className="line-chart-acquisitions">
          <p>Acquisitions</p>
          <label className="line-chart-dots"></label>
        </div>
        <div className="line-chart-acquisitions">
          <p>Discovery</p>
          <label className="line-chart-dots"></label>
        </div>
        <div className="line-chart-acquisitions">
          <p>Advertisement​</p>
          <label className="line-chart-dots"></label>
        </div>
        <div className="line-chart-acquisitions">
          <p>Subscriptions</p>
          <label className="line-chart-dots"></label>
        </div>
        <div className="line-chart-acquisitions">
          <p>Engagement</p>
          <label className="line-chart-dots"></label>
        </div>
        <div className="line-chart-acquisitions">
          <p>Loyalty</p>
          <label className="line-chart-dots"></label>
        </div>
        
      </div> */}
      {/* <div id="chart"></div> */}
      <div className="chart-container"></div>
    </div>
  );
};

export default Links;
