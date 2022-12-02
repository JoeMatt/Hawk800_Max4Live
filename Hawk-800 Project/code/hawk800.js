/* 
*/

var CCs = [
{cc:1, name:"dco_modDepth"},
{cc:2, name:"vcf_modDepth"},
{cc:7, name:"volume"},
{cc:21, cc_value:0, name:"seq_start"},
{cc:21, cc_value:1, name:"seq_stop"},
{cc:21, cc_value:2, name:"seq_edit"},
{cc:21, cc_value:3, name:"seq_forward"},
{cc:21, cc_value:4, name:"seq_back"},
{cc:21, cc_value:5, name:"seq_exit"},
{cc:21, cc_value:6, name:"seq_lock"},
{cc:21, cc_value:7, name:"seq_unlock"},
{cc:21, cc_value:8, name:"seq_mute"},
{cc:21, cc_value:9, name:"seq_unmute"},
{cc:22, name:"pgchangeBankselect"}, // 0-63 / 64-127
// 23...30 Paramater data value 1...8
{cc:31, name:"seq_select"},
{cc:32, name:"bankselect"}, //0-31=bank 1, 32-63=bank 2, 64-95=bank 3 and 96-127=bank 4
{cc:71, name:"vcf_resonance"},
{cc:74, name:"vcf_cutoff"},
{cc:76, name:"lfo_rate"},
{cc:84, name:"quickParamSelect"},
{cc:85, name:"quickParamValue"},
	];

	/*
	NRPN 
	98:LSB 00-63 -> Orig 11-88
	99:MSB um wtf i dunno
	*/

	/* SYSEX:

	Send Patch:
		F0 42 21 06 0x 0h(1) 0l(1) ... 0h(128) 0l(128) F7
	Confirmation MSG: 
		F0 42 21 7E 06 xx F7 where xx is the patch number that was received. 

	Request patch:
		F0 42 21 07 0x F7 where X is the patch #

	Set Global params:
		F0 42 21 08 0h(1) 0l(1) ... 0h(63) 0l(63) F7.

	Set chord ... fuck it

	Bulk dump request:
		F0 42 21 0A 0x F7. 
			0x = 0 = Patches (64 in the current bank) 	
				 1 = sequencer data

	 ...
					
*/
var global16 = 0;

/* Max object

maxclass = live.dial ...
varname = the patcher name to access it aka id

*/

/*
 Extend objects to print the value you'll see in the Max window
 */
Maxobj.prototype._value = function () {
	return this.getvalueof();
}

Maxobj.prototype.connect = function(obj) {
	this.patcher.connect(this, 0, obj, 0);
}

Object.prototype.class = function () {
	return this.constructor.name;
}

function sendNRPN() {

	/*
	CC99 value to whatever is in Global 16
	CC98 	00-63 - P1 Bank (11-88)
			64-127 - P2 Bank (11-88)
	CC06 - Value (normalized from 0-127)
	*/
}

function sendQuickParam() {
	/*
	CC84 -- Target Parameter
	CC85 - Value (normalized from 0-127)
	*/
}

function loadbang() {
}

function bang() {
	AttachCCs();
}

function $(name) {
	return this.patcher.getnamed(name);
}

function $$(name) {
	return this.patcher.getnamed(name).value();
}

function dump(obj) {
	var out = "";
	for(var name in obj) {
		out += name + " ";
	}
	post(out);
}

function AttachCCs() {
	var length = CCs.length;
	for (var i=0;i<length;i++){

		var entry = CCs[i];
		var name = entry["name"];
			// Get the M4L object instance by name
		var maxObject = $(name);
		if (maxObject !== undefined && maxObject !== null) {
				// Object exists
			var cc = entry["cc"];
			var cc_value = entry["cc_value"];
			if (cc_value === undefined) {
				post("attaching " + name);
				// Standard cc/value message
				dump(maxObject);
				var rect = maxObject.rect;
				var newMsg = this.patcher.newdefault(rect.x, rect.y + 50, "msg", "test");

				this.patcher.connect(maxObject, 0, newMsg, 0);
			} else {
				// Case where there is no value sent for the CC,
				// instead a preset "value" is sent. This is for
				// push buttons
			}
		} else {
			post("No patch object named '"+name+"'");
		}
	}
}
	
function attachCCOutput(cc) {
	
	
	}