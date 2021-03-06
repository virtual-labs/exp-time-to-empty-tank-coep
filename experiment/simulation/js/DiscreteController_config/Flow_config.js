
Flow_config = function(appId){
	
	

		
		$("#mainDiv").html('');
		
		var selectApp = '';
		selectApp +='<div id = "FCSConfigDiv" class="container-fluid">'
		    +'<div class="row">'
		   
		    +'<div class="col-sm-12 col-md-8 col-xl-8">'
		    +'<div id = "canvas"></div>'
		    +'</div>'
		    +'<div class="col-sm-12 col-md-4 col-xl-4">'
		    +'<h1>Flow Control System</h1>'
			    +'<label>Select No. of windows:</label>'
			    +'<select class="form-control" name="App" id="SelectNumWindows" >'
				+'<option value="-1">Select</option>'
				+'<option value="2">2</option>'
				+'<option value="3">3</option>'
				+'<option value="4">4</option>'
				+'<option value="5">5</option>'
				+'<option value="6">6</option>'
				+'</select>'
		    
			    +'<label>Alarm Type:</label>'
			    +'<select class="form-control" name="App" id="SelectAlarmType" >'
				+'<option value="-1">Select</option>'
				+'<option value="1">Make to alarm</option>'
				+'<option value="2">Break to alarm</option>'
				+'</select>'
				
				+'<label>ISA Sequence:</label>'
			    +'<select class="form-control" name="App" id="SelectISASeq" >'
				+'<option value="-1">Select</option>'
				+'<option value="1">2A</option>'
				+'<option value="2">2B</option>'
				+'<option value="3">2C</option>'
				+'</select>'
				
				+'<label>Set MIN and MAX Limit:</label>'
				+'<select class="form-control" name="App" id="FCS_MinMaxLimit" >'
				+'<option value= 0 >Select</option>'
				+'<option value= 1 data-lowerspan = "20" data-higherspan="80">Max 80% - Min 20%</option>'
				+'<option value= 2 data-lowerspan = "30" data-higherspan="70">Max 70% - Min 30%</option>'	
				+'<option value= 3 data-lowerspan = "40" data-higherspan="60">Max 60% - Min 40%</option>'	
								
				+'</select>'
				+'<button id="FCSConfigNext">Next</button>'
				
				+'</div>' // col close
				+'</div>' // row close 
				+'</div>'; // container close
				
			
			$("#mainDiv").html(selectApp);
		
		//	paper = new Raphael(document.getElementById('canvas'), '100%', 700);
				var w = 900;
    var h = 500;

var width = $(window).width();

  if ($(window).width() < 500) {
	    width = $(this).width();
	    paper = new Raphael(document.getElementById('canvas'), '100%', 500);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 500);
  }else
  {
      paper = new Raphael(document.getElementById('canvas'), '100%', 600);
	paper.setViewBox(0,0,w,h,true);
	paper.setSize('100%', 700);
  }
$("#FCSConfigNext").click(function(){
	
	if($( "#SelectNumWindows option:selected" ).val() == -1 || $( "#SelectAlarmType option:selected" ).val() == -1 || $( "#SelectISASeq option:selected" ).val() == -1)
	{ alert("Please select all the fields.");}
	else{
		
		var numOfWindows = $( "#SelectNumWindows option:selected" ).val();
		var alarmtype = $( "#SelectAlarmType option:selected" ).val();
		var ISASeq = $( "#SelectISASeq option:selected" ).val();
		
		var minLimit = $("#FCS_MinMaxLimit").find(':selected').data('lowerspan');
		 var maxLimit =  $("#FCS_MinMaxLimit").find(':selected').data('higherspan');
		ExpTrackData.appId = appId;
		ExpTrackData.numOfWindows = numOfWindows;
		ExpTrackData.alarmtype = alarmtype;
		ExpTrackData.ISASeq = ISASeq;
		ExpTrackData.maxLimit = maxLimit;
		ExpTrackData.minLimit = minLimit;
//		console.log(ExpTrackData);
		
		
		connectionLevel(numOfWindows, alarmtype, ISASeq, appId, maxLimit, minLimit);
	}
	
});			




$('select#SelectNumWindows').on(
		'change',
		function() {
			
			
			if(this.value == 2){
				
				paper.clear();
				FlowControl();
				FCS_draw2AlarmComponent();
				
			}
			if(this.value == 3){
				
				paper.clear();
				FlowControl();
				FCS_draw3AlarmComponent();
				
			}
			if(this.value == 4){
				
				paper.clear();
				FlowControl();
				FCS_draw4AlarmComponent();
				
			}
			if(this.value == 5){
				
				paper.clear();
				FlowControl();
				FCS_draw5AlarmComponent();
				
			}
          if(this.value == 6){
				
				paper.clear();
				FlowControl();
				FCS_draw6AlarmComponent();
				
			}
			
			
			if(this.value == -1){
				
				paper.clear();
				FlowControl();
				
				
			}
			
		});


			
			FlowControl();
}

 
		   
			
							
							
			