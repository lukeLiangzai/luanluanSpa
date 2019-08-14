 //<script type="text/javascript">
// Calculation and sub-page selection scripts go here

function showsummary() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'block';
	}

function showcalc01() {
	document.getElementById("calc01").style.display = 'block';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}
	
function showcalc02() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'block';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}

function showcalc03() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'block';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}
	
function showcalc04() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'block';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}

	
function showcalc05() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'block';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}
	
function showcalc06() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'block';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}

function showcalc07() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'block';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}
	
function showcalc08() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'block';
	document.getElementById("calc09").style.display = 'none';
	document.getElementById("summary").style.display = 'none';
	}

function showcalc09() {
	document.getElementById("calc01").style.display = 'none';
	document.getElementById("calc02").style.display = 'none';
	document.getElementById("calc03").style.display = 'none';
	document.getElementById("calc04").style.display = 'none';
	document.getElementById("calc05").style.display = 'none';
	document.getElementById("calc06").style.display = 'none';
	document.getElementById("calc07").style.display = 'none';
	document.getElementById("calc08").style.display = 'none';
	document.getElementById("calc09").style.display = 'block';
	document.getElementById("summary").style.display = 'none';
	}

// if you select in a page, you also select in the summary page
function agecheck(){
	//alert(document.ageform.age.selectedIndex);
	 document.thesecondform.sumage.selectedIndex = document.ageform.age.selectedIndex;
	}	
	
function trycheck(){
	 document.thesecondform.sumdur.selectedIndex = document.durform.dur.selectedIndex;
	}	

function srccheck(){
	 document.thesecondform.sumsrc.selectedIndex = document.srcform.src.selectedIndex;
	}	

function causecheck(){
	 document.thesecondform.sumcause.selectedIndex = document.causeform.cause.selectedIndex;
	}	

function cyccheck(){
	 document.thesecondform.sumcyc.selectedIndex = document.cycform.cyc.selectedIndex;
	}	

function attscheck(){
	 document.thesecondform.sumatts.selectedIndex = document.attsform.atts.selectedIndex;
	}	

function histcheck(){
	 document.thesecondform.sumhist.selectedIndex = document.histform.hist.selectedIndex;
	}	

function prepcheck(){
	 document.thesecondform.sumprep.selectedIndex = document.prepform.prep.selectedIndex;
	}	

function icsicheck(){
	 document.thesecondform.sumicsi.selectedIndex = document.icsiform.icsi.selectedIndex;
	 calculate('All');
	}

// Given the answers, calculates the success probability as a percentage
function calculate(known) { 
   // tables from the paper
	var t1 = [
				[0.4109,0.1391,0.0,-0.0909,-0.1571,-0.1545],
				[0.3935,0.0913,0.2,-0.03,-0.1449,-0.1151],
				[0.5010,0.0410,-0.2586,-0.0329,-0.0850,-0.0137],
				[0.4885,0.0415,0.0513,-0.0367,-0.0881,-0.1658],
				[0.1705,-0.1013,-0.0336,-0.5706,-0.8279,-0.4323],
				[0.2530,-0.0188,-0.3816,0.0314,0.0443,-0.4652]
			];
				
	var t2 = [
				[0.0,0.0129],
				[0.20,-0.4216],
				[-0.2586,-0.3436],
				[0.0513,-1.2512],
				[-0.0336,-2.1049],
				[-0.3816,-2.7981]
			];

	var t3 = [
				[0.0,-0.1455,-0.0763,-0.0526,-1.1661,-0.2728,-0.22],
				[0.1481,-0.8872,0.0208,-0.0499,0.2509,0.02,-0.003]
			];
	var t4 = [
				[0.0,-0.1613,-0.0368],
				[0.1481,-0.1662,-0.1927]
			];

	var t5 = [0.0,-0.3210,-0.3489,-0.2496,-0.5931,-0.3863];
	
	// 0 means no previous IVF, never been pregnant
	// 1         ditt         , spontaneous pregnancy
	// 2         ditto        , normal live birth
	// 3 means previous unsuccessful IVF
	// 4 means previous IVF, got pregnant, no baby
	// 5 means previous successful IVF 			 
	var t6 = [0.0,0.0276,0.1735,0.1280,0.0123,0.4593];
	   
	var t7 = [0.0,0.29,0.4458];

	var ageIndex = {
		'18' : 0,'19' : 0,'20' : 0,'21' : 0,'22' : 0,'23' : 0,'24' : 0,'25' : 0,
		'26' : 0,'27' : 0,'28' : 0,'29' : 0,'30' : 0,'31' : 0,'32' : 0,'33' : 0,'34' : 0,
		'35' : 1,'36' : 1,'37' : 1,
		'38' : 2,'39' : 2,
		'40' : 3,'41' : 3,'42' : 3,
		'43' : 4,'44' : 4,
		'45' : 5,'46' : 5,'47' : 5,'48' : 5,'49' : 5,'50' : 5
	};

	var yearIndex = {
		'0' : 0,
		'1' : 1, '2' : 1, '3' : 1, 
		'4' : 2, '5' : 2, '6' : 2, 
		'7' : 3, '8' : 3, '9' : 3, 
		'10' : 4, 
		'11' : 4, '12' : 4, 
		'13' : 5
	}; 

	// index values from the forms
	with (document.thesecondform){
	
		//年龄
	   var age = ageIndex[sumage.value];

	   //几年未怀孕
	   var dur = yearIndex[sumdur.value];
	   // var dur = sumdur.value;
		//卵子
	   var src = sumsrc.value;
		//做试管的原因
	   var cause = sumcause.value;
	   //第几次试管
	   var cyc = sumcyc.value;
	   //失败次数
	   var atts = sumatts.value;
	   //妊娠史
	   var hist = sumhist.value;
	   //药物史
	   var prep = sumprep.value;
	   //技术
	   var icsi = sumicsi.value;
	  }// end with
	console.log(age,dur,src,cause,cyc,atts,hist,prep,icsi);
	  if (known == "All") {
	
	
	       if (age<0||dur<0||src<0||cause<0||cyc<0||atts<0||hist<0||prep<0||icsi<0){
                alert("至少有一个问题尚未回答!");
           }
		   
 
	       else {
	   	          
	          var yup = t1[age][dur] + t2[age][src] + t3[icsi][cause] + t4[icsi][cyc] + t5[atts] + t6[hist] + t7[prep];
			  var y = -0.377;
		      y = y + yup;
              var prob = (100*Math.exp(y))/(1 + Math.exp(y));
		      prob = Math.round(prob * 10) / 10;
			  
              document.thesecondform.prob.value = prob + " %";
		   }
	    }
	  else {  // known == "Some"
		   // All choices made previously, so re-calculate
		   if (age>=0&&dur>=0&&src>=0&&cause>=0&&cyc>=0&&atts>=0&&hist>=0&&prep>=0&&icsi>=0) {

	             var yup = t1[age][dur] + t2[age][src] + t3[icsi][cause] + t4[icsi][cyc]+ t5[atts] + t6[hist] + t7[prep];
			     var y = -0.377;
		         y = y + yup;  
                 var prob = (100 * Math.exp(y))/(1 + Math.exp(y));
		         prob = Math.round(prob * 10) / 10;
				 
                 document.thesecondform.prob.value = prob + " %";
		   }
	  }	     	    
}	  	
//</script>

 