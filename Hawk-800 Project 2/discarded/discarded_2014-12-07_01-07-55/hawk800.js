/* 
*/

inlets = 1;
outlets = 2;

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

var NRPNs = [
// -- Original parameters
// DCO1 & 2
/* 11 */{cc:0, name:"dco1_octave", min:1, max:3},
/* 12 */{cc:1, name:"dco1_waveform", min:1, max:2},
/* 13 */{cc:2, name:"dco1_harmonic", min:1, max:16},
/* 14 */{cc:3, name:"dco1_mod_waveform", min:1, max:11},
/* 15 */{cc:4, name:"dco1_lfo_source", min:1, max:4},
/* 16 */{cc:5, name:"dco1_mod_depth", min:0, max:15},
/* 17 */{cc:6, name:"dco1_volume", min:0, max:31},
/* 18 */{cc:7, name:"dco1_double_mode", min:1, max:2},
// DCO Tune and Noise
/* 21 */{cc:8, name:"dco2_octave", min:1, max:3},
/* 22 */{cc:9, name:"dco2_waveform", min:1, max:2},
/* 23 */{cc:10, name:"dco2_harmonic", min:1, max:16},
/* 24 */{cc:11, name:"dco2_mod_waveform", min:1, max:11},
/* 25 */{cc:12, name:"dco2_lfo_source", min:1, max:4},
/* 26 */{cc:13, name:"dco2_mod_depth", min:0, max:15},
/* 27 */{cc:14, name:"dco2_volume", min:0, max:31},
/* -- */{cc:15, name:null},
/* 31 */{cc:16, name:"dco2_interval", min:0, max:11},
/* 32 */{cc:17, name:"dco2_detune", min:0, max:3},
/* 33 */{cc:18, name:"noise_level", min:0, max:15},
/* 34 */{cc:19, name:"fx_delay_time", min:0, max:99},
/* 35 */{cc:20, name:"fx_feedback", min:0, max:15},
/* 36 */{cc:21, name:"fx_mod_frequency", min:0, max:31},
/* 37 */{cc:22, name:"fx_mod_amount", min:0, max:31},
/* 38 */{cc:23, name:"fx_level", min:0, max:15},
// VCF and Chrous
/* 41 */{cc:24, name:"vcf_cutoff", min:0, max:99},
/* 42 */{cc:25, name:"vcf_keyboard_track", min:0, max:2},
/* 43 */{cc:26, name:"vcf_eg_polarity", min:1, max:2},
/* 44 */{cc:27, name:"vcf_eg_depth", min: 0, max:15},
/* 45 */{cc:28, name:"eg3_trigger", min:1, max:2},
/* 46 */{cc:29, name:"eq_bass", min:0, max:11},
/* 47 */{cc:30, name:"eq_treble", min:0, max:11},
/* 48 */{cc:31, name:"chorus_on", min:0, max:1},
// EG1, 2 & 3
/* 51 */{cc:32, name:"eg1_attack", min:0, max:31},
/* 52 */{cc:33, name:"eg1_decay", min:0, max:31},
/* 53 */{cc:34, name:"eg1_breakpoint", min:0, max:31},
/* 54 */{cc:35, name:"eg1_slope", min:0, max:31},
/* 55 */{cc:36, name:"eg1_sustain", min:0, max:31},
/* 56 */{cc:37, name:"eg1_release", min:0, max:31},
/* -- */{cc:38, name:null},
/* -- */{cc:39, name:null},
/* 61 */{cc:40, name:"eg2_attack", min:0, max:31},
/* 62 */{cc:41, name:"eg2_decay", min:0, max:31},
/* 63 */{cc:42, name:"eg2_breakpoint", min:0, max:31},
/* 64 */{cc:43, name:"eg2_slope", min:0, max:31},
/* 65 */{cc:44, name:"eg2_sustain", min:0, max:31},
/* 66 */{cc:45, name:"eg2_release", min:0, max:31},
/* -- */{cc:46, name:null},
/* -- */{cc:47, name:null},
/* 71 */{cc:48, name:"eg3_attack", min:0, max:31},
/* 72 */{cc:49, name:"eg3_decay", min:0, max:31},
/* 73 */{cc:50, name:"eg3_breakpoint", min:0, max:31},
/* 74 */{cc:51, name:"eg3_slope", min:0, max:31},
/* 75 */{cc:52, name:"eg3_sustain", min:0, max:31},
/* 76 */{cc:53, name:"eg3_release", min:0, max:31},
/* -- */{cc:54, name:null},
/* -- */{cc:55, name:null},
// Velocity
/* 81 */{cc:56, name:"velocity1_intensity", min:0, max:15},
/* 82 */{cc:57, name:"velocity1_invert", min:0, max:1},
/* 83 */{cc:58, name:"velocity1_target", min:0, max:12},
/* 84 */{cc:59, name:"velocity2_intensity", min:0, max:15},
/* 85 */{cc:60, name:"velocity2_invert", min:0, max:1},
/* 86 */{cc:61, name:"velocity2_target", min:0, max:12},
/* 87 */{cc:62, name:"vcf_velocity_intensity", min:0, max:6},
/* 88 */{cc:63, name:"vcf_velocity_shape", min:0, max:4},
// -- Extended Parameters
// LFO1 & 2
{cc:64, name:"lfo1_freq", min:0, max:15},
{cc:65, name:"lfo1_delay", min:0, max:15},
{cc:66, name:"lfo1_freerunning", min:0, max:1},
{cc:67, name:"lfo1_delay_invert", min:0, max:1},
{cc:68, name:"lfo1_pwm_phase", min:0, max:63},
{cc:69, name:"lfo3_waveform", min:1, max:8},
{cc:70, name:"lfo3_depth", min:0, max:15},
{cc:71, name:"lfo1_phase", min:1, max:4},
{cc:72, name:"lfo2_freq", min:0, max:15},
{cc:73, name:"lfo2_delay", min:0, max:15},
{cc:74, name:"lfo2_freerunning", min:0, max:1},
{cc:75, name:"lfo2_delay_invert", min:0, max:1},
{cc:76, name:"lfo2_pwm_phase", min:0, max:63},
{cc:77, name:"lfo4_waveform", min:0, max:8},
{cc:78, name:"lfo4_depth", min:0, max:15},
{cc:79, name:"lfo2_sync", min:0, max:63},
//DCO Modulation
{cc:80, name:"dco_lfo_waveform", min:1, max:11},
{cc:81, name:"dco_lfo_mod_source", min:1, max:4},
{cc:82, name:"dco_lfo_mod_depth", min:0, max:15},
{cc:83, name:null},
{cc:84, name:"dco_eg_invert", min:1, max:2},
{cc:85, name:"dco_eg_depth", min:0, max:15},
{cc:86, name:null},
{cc:87, name:"dco_mod_mode", min:0, max:2},
// VCF Modulation
{cc:88, name:"vcf_lfo1_waveform", min:1, max:11},
{cc:89, name:"vcf_lfo1_mod_source", min:1, max:4},
{cc:90, name:"vcf_lfo1_mod_depth", min:0, max:15},
{cc:91, name:"vcf_lfo2_waveform", min:1, max:9},
{cc:92, name:"vcf_lfo2_mod_source", min:1, max:4},
{cc:93, name:"vcf_lfo2_mod_depth", min:0, max:15},
{cc:94, name:null},
{cc:95, name:"vcf_slope", min:1, max:2},
{cc:96, name:"vcf_resonance", min:0, max:99},
// Resonance Modulation
{cc:97, name:"vcf_res_lfo_waveform", min:1, max:9},
{cc:98, name:"vcf_res_mod_source", min:1, max:4},
{cc:99, name:"vcf_res_lfo_depth", min:0, max:15},
{cc:100, name:null},
{cc:101, name:"vcf_res_eg_depth", min:0, max:15},
{cc:102, name:"vcf_res_eg_invert", min:1, max:2},
{cc:103, name:"vcf_res_aggressive", min:0, max:1},
// FM/Noise modulation
{cc:104, name:"fm_point", min:0, max:99},
{cc:105, name:"fm_lfo_waveform", min:1, max:9},
{cc:106, name:"fm_lfo_source", min:1, max:4},
{cc:107, name:"fm_lfo_depth", min:0, max:15},
{cc:108, name:null},
{cc:109, name:"fm_eg_depth", min:0, max:15},
{cc:110, name:"fm_eg_invert", min:1, max:2},
{cc:111, name:"fm_mode", min:0, max:2},
// SLFO
{cc:112, name:"slfo3_freq", min:0, max:15},
{cc:113, name:"slfo3_pwm_phase", min:0, max:63},
{cc:114, name:"slfo3_freerunning", min:0, max:1},
{cc:115, name:"slfo_sh_rate", min:0, max:63},
{cc:116, name:"slfo4_freq", min:0, max:15},
{cc:117, name:"slfo4_pwm_phase", min:0, max:63},
{cc:118, name:"slfo4_freerunning", min:0, max:1},
{cc:119, name:"slfo4_phase", min:1, max:4},
// Tremolo & Special parameters
{cc:120, name:"tremolo_dco1_mode", min:0, max:2},
{cc:121, name:"tremolo_dco1_lfo_depth", min:0, max:15},
{cc:122, name:"tremolo_dco2_mode", min:0, max:2},
{cc:123, name:"tremolo_dco2_lfo_depth", min:0, max:15},
{cc:124, name:"benddepth", min:0, max:63},
{cc:125, name:"portamento_rate", min:0, max:63},
{cc:126, name:"pedal_ds_offset", min:0, max:31},
{cc:127, name:"polymode", min:0, max:3},
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
var GenObjects = [];
var global16 = 1;
function setGlobal16(value) {
	if (value >0 && value <= 16) {
		global16 = Math.floor(value);
		post("Set global "+value+"\n");		
	} else {
		post(value + " is out of range 1-16");
	}

}
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

function $(name) {
	return this.patcher.getnamed(name);
}

function $$(name) {
	return this.patcher.getnamed(name).value();
}

function clearPatch() {
	post("Clearing " + GenObjects.length + " objects\n");
	for(var i = 0; i < GenObjects.length; i++) {
		var obj = GenObjects[i];
		this.patcher.remove(obj);
	}
	GenObjects = [];
}

function loadbang() {
}

function bang() {
	clearPatch();
	AttachNRPNs();
}

function dump(obj) {
	var out = "";
	for(var name in obj) {
		out += name + " ";
	}
	post(out);
}

function AttachNRPNs() {
	var length = NRPNs.length;
	for (var i=0;i<length;i++){
		var entry = NRPNs[i];
			var name = entry["name"];
				// Get the M4L object instance by name
			var maxObject = $(name);	
			if (maxObject !== undefined && maxObject !== null) {
				post("attaching " + name+"\n");
					// Object exists
				var cc = entry["cc"];

				var lastBox = maxObject;
					// NORMALIZE value if needed
				var max = entry["max"];
				var min = entry["min"];
				if (min !== undefined) {
					// TODO : check if maxObject is type dial
					// or slider and set min/max range and then 
					// add a multiplier to make 1 to 127 again
					// or maybe use the native range thing

					var range = (max - min)+1;
					var multiplier = Math.ceil(127 / range);
					var rect = lastBox.rect;
					var newMult = this.patcher.newdefault(rect[0], rect[1] + rect[3], "*", multiplier);
					this.patcher.connect(lastBox, 0, newMult, 0);
					GenObjects.push(newMult);
					lastBox = newMult;
				};

					// Create message object
				var rect = lastBox.rect;
				var newMsg = this.patcher.newdefault(rect[0], rect[1] + rect[3], "message");
				 	// Set text
				newMsg.message("set", "NRPN", "$1", global16, cc, 1);
				GenObjects.push(newMsg);

					// Connect
				this.patcher.connect(lastBox, 0, newMsg, 0);
				lastBox = newMsg;

				var send = $("s");
				this.patcher.hiddenconnect(lastBox, 0, send, 0);
			}	
	}
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
				post("attaching " + name+"\n");
				// Standard cc/value message
				//dump(maxObject);
				var rect = maxObject.rect;
					// Create message object
				var newMsg = this.patcher.newdefault(rect[0], rect[1] + rect[3], "message");
				GenObjects.push(newMsg);
				 	// Set text
				newMsg.message("set", "cc", "$1", -1, cc, 1);
					// Connect
				this.patcher.connect(maxObject, 0, newMsg, 0);

				var send = $("s");
				this.patcher.hiddenconnect(newMsg, 0, send, 0);
			} else {
				// Case where there is no value sent for the CC,
				// instead a preset "value" is sent. This is for
				// push buttons
			}
		} else {
			//post("No patch object named '"+name+"'");
		}
	}
}

function requestPatch(patchNumber) {
	if (patchNumber === undefined) {
		post("Patch number undefined");
	} else if (patchNumber < 0 || patchNumber > 63) {
		post("Patch "+patchNumber+" out of range.");
	} else {
		var sysex = [0xF0, 0x42, 0x21, 0x07, patchNumber, 0xF7];
		outlet(0, sysex);
	}
}

function receivePatch(data) {
	var patchNumber = data[3];
	post("Received patch number "+patchNumber+"\n");
	var nrpnIndex = 0;
	for (var i = 4; i < data.length; i+=2) {
		
		var high = data[i];
		var low  = data[i+1];

		var nrpn = NRPNs[nrpnIndex];
		if (nrpn === null || nrpn === undefined) {
			post("No NRPN found for index "+nrpnIndex);
		} else {		
			var name = nrpn["name"];
			if (name !== undefined) {
				var maxObject = $(name);
				if (maxObject !== undefined && maxObject !== null) {
					var value = (high*256)+low;
					post("Setting "+name+" to value "+value+"\n");
					maxObject.message("set", value);
				};			
			};
		}

		nrpnIndex++;
	};
}

function bulkPatchDumpRequest() {
	var sysex = [0xF0, 0x42, 0x21, 0x0A, 0x00, 0xF7];
	outlet(0, sysex);
}

function bulkSequencerDumpRequest() {
	var sysex = [0xF0, 0x42, 0x21, 0x0A, 0x01, 0xF7];
	outlet(0, sysex);
}

/* Send the global parameters
 * HAWK does not send a confirmation message
 */
function sendGlobal() {
	// TODO
	var Globals = [];
	var sysex = [0xF0, 0x42, 0x21, 0x08];
		// Loop through globals
	for (var i = 0; i < Globals.length; i++) {
		var low = 0;
		var high = 0;
		var value = (high*256)+ low;
		sysex.push(value);
	};

	if (sysex.length < 130) {
		post("Global data too short "+ sysex.length + " bytes. Should be 130");
	} else {
		sysex.push(0xF7);
		outlet(0, sysex); 
	}

}

/*
 * Send the current patch as SYSEX
 * Format it:
 * F0 42 21 06 0x (patch number) 0h(1) ol(1) ... 0h(128) 0l(128) F7
 * Notice 2 bytes per parameter, high/low
 */
function sendPatch(patchNumber) {
		// 64 is the current memory slot.
		// 1-63 are storage locations
		// > 64 nothing happens
	if (patchNumber === undefined || patchNumber === null) {
		patchNumber = 64;		
	};

	var sysex = [0xF0, 0x42, 0x21, 0x06, patchNumber];
	for (var i = 0; i < NRPNs.length; i++) {
		var entry = NRPNs[i];
		if (entry !== undefined && entry !== null) {
			var name = entry["name"];
			var index = (i*2) + 5; // 2 bytes per loop cycle + the 5 from the front
			if (name !== undefined && name !== null) {
				var object = $(name);
				if (object !== undefined && object !== null) {
					var value = object.value;
					var high = (value - 256) / 256;
					var low = value - high;;
					sysex[index] = low;
					sysex[index+1] = high;					
				} else {
					post("Couldn't find max object matching name: "+name+"\n");
				}
			} else {
					// An unused parameter, push a 0
				sysex[index] = 0;
				sysex[index+1] = 0;
			}
		} else {
			post("No NRPN at index "+i+"\n");
		}
	};

	if (sysex.length < 261) {
			// 2*128 parameters + 5 front
		post("Sysex data too short : "+sysex.length+"\n");
	} else {
		post("Sent patch to number "+patchNumber+"\n");
		sysex.push(0xF7);
		outlet(0, sysex);		
	}
}

function sendSequencerData() {
	var SequencerData = [];
	var sysex = [0xF0, 0x42, 0x21, 0x0B];
	for (var i = 0; i < SequencerData.length; i++) {
		var value = SequencerData[i];

		if (value === undefined || value === null) {
			post("No sequcner data at index "+i+"\n");
		} else {
			var high = (value - 256) / 256;
			var low = value - high;
			sysex[index] = low;
			sysex[index+1] = high;								
		}
	}

	if (sysex.length < 516) {
			// 2*256 parameters + 4 front
		post("Sysex data too short : "+sysex.length+"\n");
	} else {
		post("Sending sequcner data\n");
		sysex.push(0xF7);
		outlet(0, sysex);		
	}
}

function list(inputList) {
	if (this.inlet == 0) {
		post("received patch dump "+arguments.length);
		receivePatch(arguments);
	};
}