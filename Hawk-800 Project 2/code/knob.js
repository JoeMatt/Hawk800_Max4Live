/* Max knob top for Korg */

// Globals
var g_degreesTotal = 270.0;

var numberOfHashMarks;
var range=null;
var min=0;
var max=1;

// Setup
function setup() {
	value = box.getvalueof();

	range = box.getattr("_parameter_range");
	if (range === null) {
		// Not yet setup
		return;
	};
	min = range[0];
	max = range[1];

	// Calculate number of hashmarks
	numberOfHashMarks = (max - min) + 1;
	// If the range is huge, 
	// Find the largest sane evenly divisable number
	if (numberOfHashMarks > 16) {
		for(var i = 16; i > 0; i--) {
			if ( (max-min+1) % i == 0 ) {
				numberOfHashMarks = i;
				break;
			};
		}
	};
}

setup();

function paint() {
	if (range === null) {
		setup();
	};
	//mgraphics.parentpaint();

	// Dimensions
	var viewsize = mgraphics.size;
	var width = viewsize[0];
	var height = viewsize[1];

	// Value
	value = box.getvalueof();
	range = box.getattr("_parameter_range");
	min = range[0];
	max = range[1];

	// Fill with background color
	// mgraphics.set_source_rgba(box.getattr("panelcolor"));
	// mgraphics.rectangle(0, 0, width, height);
	// mgraphics.fill();

	// Draw hashmarks
	mgraphics.set_line_width(1);
	mgraphics.set_source_rgba(1,1,1,1);

	var centerPoint = {x: width/2, y: height/2};

	var radius = Math.min(width,height)/2.2;

	drawHashmarks(centerPoint.x, centerPoint.y, numberOfHashMarks, radius/2, radius);

	focusColor    = [.65, .8, .75, 1];
	nonFocusColor = [.82, .86, .86, 1];
	activeColor = box.getattr("hasfocus") ? focusColor : nonFocusColor;

		// Draw dial
	outerRadius = Math.min(width,height) * .67; // Scale of size of box
	innerRadius = Math.min(width,height) * .45;

	cx = centerPoint.x;
	cy = centerPoint.y;

	radians = DialValToAngle(value, min, max, g_degreesTotal);

	drawCircle(centerPoint.x, centerPoint.y, outerRadius, [.3, .3, .33, 1]);
	drawCircle(centerPoint.x, centerPoint.y, innerRadius, activeColor);

	drawMarker(centerPoint.x, centerPoint.y, radians, radius/6, radius * .6, 4, [0, 0, 0, 1]);

			// Draw max value on top
	drawtext(max.toString(), width - (max.toString().length * 6) , height-10,[1,1,1,1]);
	drawtext(min.toString(), 0 , height-10, [1,1,1,1]);

		// Draw either the curren value if focues, or the min value if not
	if (box.getattr("hasfocus")) {
		drawtext(value.toString(), width/2-(value.toString().length * 3)-3, height-10, focusColor);
	}
}

// -----

var degToRad = Math.PI/180;
function Radians(degrees) {
	return degrees * degToRad;
}

function drawHashmarks (x, y, numberOfHashMarks, fromRadius, toRadius) {
	for (var i = 0; i < numberOfHashMarks; i++) {
		var degrees = ((g_degreesTotal / (numberOfHashMarks-1)) * i) + 45; // Additonal rotation
		radians = Radians(degrees);

		cx = x;
		cy = y;

		line = { 	x1: cx + Math.sin(radians) * fromRadius, y1: cy + Math.cos(radians) * fromRadius, 
					x2: cx + Math.sin(radians) * toRadius, 	 y2: cy + Math.cos(radians) * toRadius};

		with(mgraphics) {
			move_to(line.x1, line.y1);
			line_to(line.x2, line.y2);
			stroke();
		}
	}
}

function drawCircle(x, y, radius, color) {
	with(mgraphics) {
		// Outer dial
		set_source_rgba( color);
		ellipse(x - (radius/2.0), y - (radius/2.0), radius, radius);
		fill();
	}	
}

function drawtext(text,offset_x,offset_y,textcolor) {
	var fontsize = box.getattr("fontsize");
	var fontstyle = box.getattr("fontface");
	var bold = fontstyle==1 || fontstyle==3 ? "bold" : 0;
	var italic = fontstyle==3 || fontstyle==3 ? "italic" : 0;
	var ascent;

	mgraphics.select_font_face(box.getattr("fontname"),italic,bold);
    mgraphics.set_font_size(box.getattr("fontsize"));
    ascent = mgraphics.font_extents()[0];

	mgraphics.set_source_rgba(textcolor);
	mgraphics.move_to(offset_x,offset_y+ascent);
    mgraphics.show_text(text);
}

/* 
x: center X
y: center Y,
angle: radians from center
fromRadius : start line at distance from cetner
toRadius: end line at distance from center
width: width of marker line
color: fill color of marker line
*/
function drawMarker(x, y, angle, fromRadius, toRadius, width, color) {

	line = { 	x1: x + Math.sin(angle) * fromRadius, 	y1: y + Math.cos(angle) * fromRadius, 
				x2: x + Math.sin(angle) * toRadius, 	y2: y + Math.cos(angle) * toRadius};

	with(mgraphics) {
			// value line
		set_source_rgba( color);
		set_line_width(width);
		move_to(line.x1, line.y1);
		line_to(line.x2, line.y2);
		set_line_cap("square");
		stroke();
	}
}

// Value
// degrees: 
function DialValToAngle(val, min, max, degreesTotal) {
	degrees = (360 - ((degreesTotal / (max - min)) * Math.round(val-min))) - 45;
	radians = Radians(degrees);
	return radians;
}

