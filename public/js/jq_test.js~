$(document).ready(function(){
	$("#intro").hide();
	
	$(".textbox").keyup(
		function(){
			a = Number($("#a").val());
			b = Number($("#b").val());
			
			sum = a+b;
			
			$("#sum").val(sum);
		}
	);
	
	$("p.p1").on({
		"mouseover":function(){
			$("#show_this").fadeIn();
		},
		"mouseout":function(){
			$("#show_this").fadeOut();
		}
		
	});
	
	$("button[name='get_students']").click(
		function(){
		/*$.get("http://localhost:5000/degree-programs/3",
			function(resp){
			console.log(resp);	
		
			});*/
			
		$.post("http://localhost:5000/degree-programs",
			{code:"BSF",name:"BS Forestry"},
			function(resp){
				console.log(resp);
			});	
		});
		
//-----------------EXERCISE 8---------------------------------------
//sources: http://stackoverflow.com/questions/4177159/toggle-checkboxes-on-off
//       : http://api.jquery.com/jquery.each/

	$("button[name='rev']").click(//event handler click on rev
	function(){//function for reversing toggle of checkboxes
		$("input[name='name']").each(function(){//iterator for all checkboxes
		$(this).prop("checked", !$(this).prop("checked"));//negates the checked attribute of each checkbox
		});
	});

	$("button[name='resett']").click(
	function(){
		$("input[name='name']").each(function(){
		$(this).prop("checked", !$(this).prop("checked", "checked"));//sets to false the checked attribute of each checkbox
		});
	});
	
});
