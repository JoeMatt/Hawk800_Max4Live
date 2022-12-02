/* sliders to look Korg-ish */



// Globals
	// Constants
lineTopMargin = 12;
lineBottomMargin = 4;
	// Storage for setup()
	// we use this to cut down on 
	// on calculations that only need to be
	// done on the first init
var numberOfHashMarks;
var range=null;
var min=0;
var max=1;

// Setup
function setup() {

	range = box.getattr("_parameter_range");
	if (range === null) {
		// Not yet ready.
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

orientationVerticle  = 0;
orientationHorizontal = 1;

shownumber = 0;

function paint() {
	if (range === null) {
		setup();
	};

	shownumber = box.getattr("shownumber");

	orientation = box.getattr("orientation");
	if (orientation == orientationVerticle) {
		paintVerticle();
	} else {
		paintHorizontal();
	}
}

function paintVerticle() {
			// Dimensions
	var viewsize = mgraphics.size;
	var width = viewsize[0];
	var height = viewsize[1];

		// Value
	value = box.getvalueof();

		// Draw hash marks
	with(mgraphics) {
		set_line_width(1);
		set_source_rgba( 1, 1, 1, 1);
	}

	for (var i = 0; i < numberOfHashMarks; i++) {
		lineWidth = width * .66;
		lineY = (( (height-(lineTopMargin+lineBottomMargin)) / numberOfHashMarks) * i) + lineTopMargin;
		
		lineL = (width - lineWidth)/2;
		lineR = width - lineL;

		with(mgraphics) {
			move_to(lineL, lineY);
			line_to(lineR, lineY);
			stroke();
		}
	}

		// draw center black box
	centerWidth = width * .3;
	with(mgraphics) {
		set_source_rgba( 0, 0, 0, 1);
		rectangle( (width-centerWidth)/2, 0, centerWidth, height );
		fill();
	}

	focusColor = [.65,.8,.75,1];
	nonFocusColor = [1, 1, 1, 1,];
	activeColor = box.getattr("hasfocus") ? focusColor : nonFocusColor;

		// draw value indicator
	indicatorWidth = centerWidth * .9;
	indicatorHeight = 15;
	indicatorX = (width-indicatorWidth)/2;
		// The center hash thickness
	lineHeight = 2;
		// Where the middle should be Y wise
	valueY = (height - (lineTopMargin+lineBottomMargin)) - ((height - (lineTopMargin+lineBottomMargin)) / (max-min+1)) * (value - min) + indicatorHeight/2;

	with(mgraphics){
			// White rect
		set_source_rgba( activeColor);
		rectangle( indicatorX, valueY - (indicatorHeight/2), indicatorWidth, indicatorHeight);
		fill();
			// center hash
		set_source_rgba( 0, 0, 0, 1);
		rectangle( indicatorX + 1, valueY - (lineHeight/2), indicatorWidth - 2, lineHeight);
		fill();
	}

		// Draw max value on top
	drawtext(max.toString(), 0, 0, [1,1,1,1]);

		// Draw either the curren value if focues, or the min value if not
	if (box.getattr("hasfocus")) {
		drawtext(value.toString(), 0, height-10, focusColor);
	}  else {
		drawtext(min.toString(), 0, height-10, nonFocusColor);
	}
}

function paintHorizontal() {
		// Dimensions
	var viewsize = mgraphics.size;
	var width = viewsize[0];
	var height = viewsize[1];

		// Value
	value = box.getvalueof();

		// Where the middle should be X wise
	slideableWidth = (width - (lineTopMargin+lineBottomMargin));

		// Draw hash marks
	with(mgraphics) {
		set_line_width(1);
		set_source_rgba( 1, 1, 1, 1);
	}

	for (var i = 0; i < numberOfHashMarks; i++) {
		lineHeight = height * .66;
		lineX = ((slideableWidth / numberOfHashMarks) * i) + lineTopMargin;
		
		lineT = (height - lineHeight)/2;
		lineB = height - lineT;

		with(mgraphics) {
			move_to(lineX, lineT);
			line_to(lineX, lineB);
			stroke();
		}
	}

		// draw center black box
	centerHeight = height * .3;
	with(mgraphics) {
		set_source_rgba( 0, 0, 0, 1);
		rectangle( 0, (height-centerHeight)/2, width, centerHeight);
		fill();
	}

	focusColor = [.65,.8,.75,1];
	nonFocusColor = [1, 1, 1, 1,];
	activeColor = box.getattr("hasfocus") ? focusColor : nonFocusColor;

		// draw value indicator
		// White square with black hash center line
	indicatorHeight = centerHeight * .9;
	indicatorWidth = 15.0;
	indicatorY = (height-indicatorHeight)/2.0;
		// The center hash thickness
	lineWidth = 2.0;

	valueX = (slideableWidth / (max-min+1)) * (value - min) + indicatorWidth/2;

	with(mgraphics){
			// White rect
		set_source_rgba( activeColor );
		rectangle( valueX - (indicatorWidth/2.0), indicatorY, indicatorWidth, indicatorHeight);
		fill();
			// black center hash
		set_source_rgba( [0, 0, 0, 1] );
		rectangle( valueX - (lineWidth/2.0), indicatorY + 1.0, lineWidth, indicatorHeight - 2.0);
		fill();
	}

	numChars = value.toString().length;
		// Draw max value on right
	drawtext(max.toString(), width-(max.toString().length*6), height-10, [1,1,1,1]);
	drawtext(min.toString(), 0, height-10, nonFocusColor);

		// Draw either the curren value if focues, or the min value if not
	if (box.getattr("hasfocus") && shownumber) {
		drawtext(value.toString(), (width/2) - (numChars*3), height-10, focusColor);
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