/* 


*/

var CCs = [
{1, "dco.modDepth"},
{2, "vcf.modDepth"},
{7, "volume"},
{21, 0, "seq.start"},
{21, 1, "seq.stop"},
{21, 2, "seq.edit"},
{21, 3, "seq.forward"},
{21, 4, "seq.back"},
{21, 5, "seq.exit"},
{21, 6, "seq.lock"},
{21, 7, "seq.unlock"},
{21, 8, "seq.mute"},
{21, 9, "seq.unmute"},
{22, "pgchangeBankselect"}, // 0-63 / 64-127
// 23...30 Paramater data value 1...8
{31, "seq.select"},
{32, "bankselect"}, //0-31=bank 1, 32-63=bank 2, 64-95=bank 3 and 96-127=bank 4
{71, "vcf.resonance"},
{74, "vcf.cutoff"},
{76, "lfo.rate"},
{84, "quickParamSelect"},
{85, "quickParamValue"},
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
	var patch = this.patcher.getnamed("vcf_cutoff");

	post(Math.floor(patch.getvalueof()));
}

function $(name) {
	return this.patcher.getnamed(name);
}

	
function attachCCOutput(cc) {
	
	
	}