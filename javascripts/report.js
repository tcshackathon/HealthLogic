$(document).ready(function() {
	$('#simple-menu').sidr();
	
});


$(document).ready(function(){

	function Chart1(id){

		var s11 = [['2014-06-10',100],['2014-06-11',85],['2014-06-12',72],['2014-06-13',64],['2014-06-14',52],['2014-06-15',45],['2014-06-16',40]];
		var s12 = [['2014-06-10',10],['2014-06-11',25],['2014-06-12',15],['2014-06-13',30],['2014-06-14',32],['2014-06-15',20],['2014-06-16',50]];
		var s13 = [['2014-06-10',12],['2014-06-11',15],['2014-06-12',10],['2014-06-13',20],['2014-06-14',24],['2014-06-15',16],['2014-06-16',30]];

		plot3 = $.jqplot(id, [s11, s12, s13], {
		
			stackSeries: true,
			captureRightClick: true,
			seriesDefaults:{
			  renderer:$.jqplot.BarRenderer,
			  rendererOptions: {
				  barMargin: 30,
				  highlightMouseDown: true   
				},
				pointLabels: {show: true}
			},
			grid:{
			
				background: 'grey',
				gridLineColor: '#CCCCC'
			},
			series:[
				//{label: 'File Processed' , color:'#5CAF78'},
				//{label: 'File In Progress' , color:'#FFFF82'},
				//{label: 'File Errored' , color:'#E68080'}
				{label: 'File Processed' , color:'#66FFCC'},
				{label: 'File In Progress' , color:'#FFDEAD'},
				{label: 'File Errored' , color:'#FF8F73'}
				
				
			],
			
			axesDefaults: {
				tickOptions: {
					showGridline: true
				
				}
			},
			axes: {
			  xaxis: {
					renderer: $.jqplot.DateAxisRenderer,
					tickOptions:{
						formatString:'%b&nbsp;%#d'
					},
					tickInterval:'1 day',
					min:'2014-06-09',
					max:'2014-06-17'
				},
				yaxis: {
					min: 0,
					padMin: 0
				}
			},
			
			legend: {
			  show: false,
			  location: 'e',
			  placement: 'outside'
			}      
		 
		});
	  
		
	
	};

	function Chart2(id){
		var s1 = [110,12,15,110,12,14,16,90];
		var s2 = [15,12,15,15,13,14,16,12];
		var s3 = [1,2,5,1,3,4,6,3];
		var tickData = ['Waiting to be Processed','Inbound File Processing','Batch File Processing','WorkList','Output Generation','Split & Merge','Ra Packaging','File Transmission'];
		var plot2 = $.jqplot(id, [s1,s2,s3], {
			
			stackSeries: true,
			captureRightClick: true,
			seriesDefaults: {
				renderer:$.jqplot.BarRenderer,
				
				pointLabels: { show: true },
			   
				
				rendererOptions: {
					barDirection: 'horizontal',
					barMargin: 10,
					highlightMouseDown: true 
				}
			},
			grid:{
			
				background: 'grey',
				gridLineColor: '#CCCCC'
			},
			series:[
				{label: 'File Processed' , color:'#66FFCC'},
				{label: 'File In Progress' , color:'#FFDEAD'},
				{label: 'File Errored' , color:'#FF8F73'}
				
			],
			axesDefaults: {
				tickOptions: {
					showGridline: true
				
				}
			},
			axes: {
				yaxis: {
					renderer: $.jqplot.CategoryAxisRenderer,
					ticks: tickData
				}
			},
			legend: {
			  show: false,
			  location: 'e',
			  placement: 'outside'
			}      
		});
	
	};
	/*
	function Chart3(){
	
		var plot1 = $.jqplot ('chart1', [[3,7,9,1,4,6,8,2,5]], {
		  
		  title: 'Plot With Options',
		  
		  axesDefaults: {
			labelRenderer: $.jqplot.CanvasAxisLabelRenderer
		  },
		  
		  axes: {
			
			xaxis: {
			  label: "X Axis",
			 
			  pad: 0
			},
			yaxis: {
			  label: "Y Axis"
			}
		  }
		});
	};
	*/
	function Chart3 (id){
	
		var TAT = [['2014-03-01',4],['2014-03-02',4],['2014-03-03',4],['2014-03-04',4],['2014-03-05',4],['2014-03-06',4],
					['2014-03-07',4],['2014-03-08',4],['2014-03-09',4],['2014-03-10',4],['2014-03-11',4],['2014-03-12',4],
					['2014-03-13',4],['2014-03-14',4],['2014-03-15',4],['2014-03-16',4],['2014-03-17',4],['2014-03-18',4],
					['2014-03-19',4],['2014-03-20',4],['2014-03-21',4],['2014-03-22',4],['2014-03-23',4],['2014-03-24',4],
					['2014-03-25',4],['2014-03-26',4],['2014-03-27',4],['2014-03-28',4],['2014-03-29',4],['2014-03-30',4],['2014-03-31',4]];
					
		
		var median = [['2014-03-01',4.5],['2014-03-02',3.5],['2014-03-03',5],['2014-03-04',4],['2014-03-05',3.7],['2014-03-06',2.9],
					['2014-03-07',6],['2014-03-08',5],['2014-03-09',3.78],['2014-03-10',3.1],['2014-03-11',4.3],['2014-03-12',4.5],
					['2014-03-13',4.9],['2014-03-14',5],['2014-03-15',4.2],['2014-03-16',4.5],['2014-03-17',4.6],['2014-03-18',3],
					['2014-03-19',4],['2014-03-20',4],['2014-03-21',4],['2014-03-22',4],['2014-03-23',4],['2014-03-24',4],
					['2014-03-25',6],['2014-03-26',7],['2014-03-27',5],['2014-03-28',5.1],['2014-03-29',3],['2014-03-30',3.9],['2014-03-31',4]];
		
		
		var mean = [['2014-03-01',7.66],['2014-03-02',1.31],['2014-03-03',6.24],['2014-03-04',5.29],['2014-03-05',10.62],['2014-03-06',6.18],
					['2014-03-07',4.48],['2014-03-08',8.11],['2014-03-09',3.89],['2014-03-10',2.97],['2014-03-11',10.56],['2014-03-12',4.43],
					['2014-03-13',3.44],['2014-03-14',4.45],['2014-03-15',2.91],['2014-03-16',2.82],['2014-03-17',4.0],['2014-03-18',4.9],
					['2014-03-19',4],['2014-03-20',4],['2014-03-21',4],['2014-03-22',4],['2014-03-23',4],['2014-03-24',4],
					['2014-03-25',4.8],['2014-03-26',4.67],['2014-03-27',5.9],['2014-03-28',10.40],['2014-03-29',2.91],['2014-03-30',8.1],['2014-03-31',4.0]];
					
		
		var plot1 = $.jqplot(id,[TAT,mean,median],{
			//seriesColors: ["rgba(78,135,194,0.7)", "rgba(211,235,59)","rgba(70,235,194,0.7)"],
			title:'',
			highlighter:{
				show:true,
				sizeAdjust: 1,
				showMarker: false,
				tooltipOffset: 9,
				tooltipAxes: 'xy'
			
			},
			grid:{
				background: 'grey',
				drawBorder: false,
				shadow: false,
				gridLineColor: '#CCCCC',
				gridLineWidth: 1
			
			},
			
			seriesDefaults: {
				rendererOptions:{
					smooth: true,
					animation:{
						show:true
					}
				
				},
				showMarker: false
				
			},
			series: [
				{
					fill:false,
					label: 'TAT=4',
					color:'#FFDEAD'
				},
				{
					label: 'Mean=3.8',
					color: '#999966',
					fill: true,
					fillColor: '#66FFCC',
					fillAndStroke:'true'
				},
				
				{
					color:'#FF8F73',
					label:'Median=4.3'
				}
			
			
			],
			axes: {
				xaxis: {
					renderer: $.jqplot.DateAxisRenderer,
					tickRenderer: $.jqplot.CanvasAxisTickRenderer,
					tickOptions:{
						formatString: '%b %e',
						showMark: true,
						textColor: 'black'
					},
					min:'2014-03-01',
					max:'2014-03-31',
					tickInterval: '5 days',
					drawMajorGridlines: false
				},
				yaxis:{
					label: 'TAT(hr)',
					labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
					pad:0,
					labelOptions:{
						textColor: 'black'
					},
					rendererOptions: {
						minorTicks: 2
					},
					cursor:{
						show:false
					
					},
					tickOptions: {
						formatString: "%'d",
						showMark: true,
						textColor: 'black'
					
					}
				
				}
					
			}
			
		});
		$('.jqplot-highlighter-tooltip').addClass('ui-corner-all');
	};
	
	
	
	function Map(){
		this.map = { g1:Chart1 , g2:Chart2 , g3: Chart3};
		this.getMapElementByID = function(n,id){
			var g = 'g'+ n;
			this.map[g](id);
		};
	
	
	};
	
	var map = new Map();
	
	map.getMapElementByID(1,'chart3');
	map.getMapElementByID(2,'chart2');
	map.getMapElementByID(3,'chart1');
	

	$('#g1').click(function(){

		$('#chart').modal('show');
		$('#chartModal3').html('');
		$('#chart').on('shown.bs.modal', function (e) {
			Chart1('chartModal3');
		});
	
	});
	
	$('#g2').click(function(){

		$('#chart-2').modal('show');
		$('#chartModal2').html('');
		$('#chart-2').on('shown.bs.modal', function (e) {
			Chart2('chartModal2');
		});
	
	});

	$('#g3').click(function(){

		$('#chart-3').modal('show');
		$('#chartModal1').html('');
		$('#chart-3').on('shown.bs.modal', function (e) {
			Chart3('chartModal1');
		});
	
	});
	
	/*
	$( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 0, 500 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	*/
	
});

$(function() {
    
});

