var demo = document.getElementById("letteringAnimation");
	
	var ease = Power2.easeInOut;
	var ease2 = Power2.easeInOut;

	var motionMr = MorphSVGPlugin.pathDataToBezier("#mr", {align: "#target"});
	var motionDot1 = MorphSVGPlugin.pathDataToBezier("#dot1", {align: "#target"});
	var motionPlus = MorphSVGPlugin.pathDataToBezier("#plus", {align: "#target"});
	var motionMrs = MorphSVGPlugin.pathDataToBezier("#mrs", {align: "#target"});
	var motionDot2 = MorphSVGPlugin.pathDataToBezier("#dot2", {align: "#target"});
	
	TweenMax.set("#target", {yPercent:-95, xPercent:-8, transformOrigin:"center"});
	TweenMax.set("#mr", {drawSVG:0});
	TweenMax.set("#dot1", {drawSVG:0});
	TweenMax.set("#mrs", {drawSVG:0});
	TweenMax.set("#plus", {drawSVG:0});
	TweenMax.set("#dot2", {drawSVG:0});
		
	// 	Begin Timeline
	var tl = new TimelineMax({repeat:-1});
	tl.add("first")
	tl.to("#mr", 3.5,  {drawSVG:true, ease:ease}, "first");
	tl.to("#target", 3.5, {ease:ease, bezier:{values:motionMr, type:"cubic"} }, "first");
	
		// 	Move to next point
		tl.to("#target", 0.25, { x:1376, y:582.14, ease:ease2 });
	
	tl.add("dot1")
	tl.to("#dot1", .5,  {drawSVG:true, ease:ease}, "dot1");
	tl.to("#target", .5, {ease:ease, bezier:{values:motionDot1, type:"cubic"} }, "dot1");
		
		// 	Move to next point
		tl.to("#target", 0.5, { x:1544.49, y:207.91, ease:ease2 });
	
	tl.add("plus")
	tl.to("#plus", 1,  {drawSVG:true}, "plus");
	tl.to("#target", 1, { bezier:{values:motionPlus, type:"cubic"} }, "plus")

		// 	Move to next point
		tl.to("#target", 0.25, { x:1558.06, y:527.41, ease:ease2 });

	tl.add("mrs")
	tl.to("#mrs", 4.5,  {drawSVG:true, ease:ease}, "mrs");
	tl.to("#target", 4.5, {ease:ease, bezier:{values:motionMrs, type:"cubic"} }, "mrs");
	
		// 	Move to next point
		tl.to("#target", 0.25, { x:2935.56, y:574.91, ease:ease2 });
	
	tl.add("dot2")
	tl.to("#dot2", .5,  {drawSVG:true, ease:ease}, "dot2");
	tl.to("#target", .5, {ease:ease, bezier:{values:motionDot2, type:"cubic"} }, "dot2");


	// 	move to begining of frame!
	tl.to("#target", 2, {x:80, y:407}, "end");
	tl.to("#letteringAnimation", 1,  {autoAlpha:0}, "end+=1");