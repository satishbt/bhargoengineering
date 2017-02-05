/*
	this is the JS for the main jsPlumb demo.  it is shared between the YUI, jQuery and MooTools
	demo pages.
*/
;(function() {

	window.jsPlumbDemo = {
			
		init : function() {
			
			jsPlumb.importDefaults({
				DragOptions : { cursor: "pointer", zIndex:2000 },
				HoverClass:"connector-hover"
			});
	
			var connectorStrokeColor = "rgba(50, 50, 200, 1)",
				connectorHighlightStrokeColor = "rgba(180, 180, 200, 1)",
				hoverPaintStyle = { strokeStyle:"#7ec3d9" };			// hover paint style is merged on normal style, so you 
			                                                        // don't necessarily need to specify a lineWidth
			
			// 
			// connect window1 to window2 with a 13 px wide olive colored Bezier, from the BottomCenter of 
			// window1 to 3/4 of the way along the top edge of window2.  give the connection a 1px black outline,
			// and allow the endpoint styles to derive their color and outline from the connection.
			// label it "Connection One" with a label at 0.7 of the length of the connection, and put an arrow that has a 50px
			// wide tail at a point 0.2 of the length of the connection.  we use 'cssClass' and 'endpointClass' to assign
			// our own css classes, and the Label overlay has three css classes specified for it too.  we also give this
			// connection a 'hoverPaintStyle', which defines the appearance when the mouse is hovering over it. 
			//
          
	var conn4Color = "rgba(0,0,0,0.8)";
	var stateMachineConnector = {				
		   	
			connector:"Flowchart",
		   	cssClass:"c1",
		   	endpoint:"Blank",
		   	endpointClass:"c1Endpoint",													   
		   
					paintStyle:{ 
											lineWidth:1, 
											strokeStyle:conn4Color, 
											outlineColor:"#666",
					 						outlineWidth:1,
					 						joinstyle:"round"
					 					},
		            hoverPaintStyle:hoverPaintStyle,
                    detachable:false,
		        	endpointsOnTop:false, 
		        	endpointStyle:{ radius:1, fillStyle:conn4Color },
		        	labelStyle : { cssClass:"component label" },
			 
		   	 
		};			        
 			
 
		function js_plumb_connect(id_s, id_t){
		jsPlumb.connect({
			source:id_s,
			target:id_t,
			anchors:["BottomCenter", "TopCenter"],  
		}, stateMachineConnector);
		jsPlumb.draggable(jsPlumb.getSelector(".window"));
		
	}
	js_plumb_connect('hari_bhargo', 'Manufacturing');
	js_plumb_connect('hari_bhargo', 'Planning');
	js_plumb_connect('Manufacturing', 'Shift_2');
	js_plumb_connect('Manufacturing', 'Shift_1');
	js_plumb_connect('Manufacturing', 'GeneralShift');
	js_plumb_connect('Planning', 'Logistics');
	js_plumb_connect('Shift_1', 'Production');
	js_plumb_connect('Production', 'operators');
	js_plumb_connect('operators', 'helper1');
	js_plumb_connect('Shift_1', 'Quality_shift1');
	js_plumb_connect('Quality_shift1', 'Inspector_1');
	js_plumb_connect('GeneralShift', 'Tool_Maint');
	js_plumb_connect('GeneralShift', 'Final_Inspection');
	js_plumb_connect('Tool_Maint', 'Fitter_1');
	js_plumb_connect('GeneralShift', 'Machine_Maint');
	js_plumb_connect('Shift_2', 'Production_2');
	js_plumb_connect('Production_2', 'operators_4');
	js_plumb_connect('operators_4', 'helper3');
	js_plumb_connect('Shift_2', 'Quality_2');
	js_plumb_connect('Quality_2', 'Inspector_2');

	
	
	
 
	 

	        

							
 
									
 
			
 
			
 
			// jsplumb event handlers
	
			// double click on any connection 
 
			// single click on any endpoint
 
		 
			
			// make all .window divs draggable
			jsPlumb.draggable(jsPlumb.getSelector(".window"));
            
		}
	};	
})();