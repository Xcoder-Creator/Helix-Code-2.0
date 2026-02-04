//Main javascript file

$(document).ready(function() {

	"use strict";

	var mobileMenuAct = function(){
		$('.navbar-arrange').each(function(){
			var $this = $(this);
			$this.clone().attr('class', 'vertical-navbar-wrap').appendTo('.vertical-navbar-background');
		});

		$('body').on('click', '.js-menu-toggle', function(e){
			var $this = $(this);
			e.preventDefault();
			if ($('body').hasClass('menu-print')){
				$('body').removeClass('menu-print');
				$this.removeClass('active');
			} else {
				$('body').addClass('menu-print');
				$this.addClass('active');
			}
		}); 
	}; 
	mobileMenuAct();

	var stickyNav = function(){
		$(".nav-sticky").sticky({topSpacing:0});
	};
	stickyNav();

	var scrollPage = function(){
	    $(window).scroll(function(){
		  var x = $(this).scrollTop();
		  if (x > 100){
			$('.nav-sticky').addClass('resize');
		  } else {
			$('.nav-sticky').removeClass('resize');
		  }
		}); 
	};
	scrollPage();
  
    $("#menu-icon").click(function(){
	  $("#nav-side-lnk").fadeToggle();
    });
  
	document.getElementById("sub-info").onclick = validate;
	function validate(){
		var userName = document.getElementById("user-name").value;
		var trimUserName = userName.length;
		var userEmail = document.getElementById("user-email").value;
		var userPass = document.getElementById("log-pass").value;
		var trimLogPass = userPass.length;
		var userRePass = document.getElementById("re-log-pass").value;
		var trimRePass = userRePass.length;
		if (trimUserName < 6){
			$("#input-panel").animate({
				top: "37px"
			});
			
			$("#icon-close").click(function (){
				$("#input-panel").animate({
					top: "-250px"
				});
			});
		} else if (userEmail.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null){
			$("#input-panel").animate({
				top: "37px"
			});
			
			$("#icon-close").click(function (){
				$("#input-panel").animate({
					top: "-250px"
				});
			});
		} else if (trimLogPass < 6){
			$("#input-panel").animate({
				top: "37px"
			});
			
			$("#icon-close").click(function (){
				$("#input-panel").animate({
					top: "-250px"
				});
			});
		} else if (trimRePass < 6){
			$("#input-panel").animate({
				top: "37px"
			});
			
			$("#icon-close").click(function (){
				$("#input-panel").animate({
					top: "-250px"
				});
			});
		} else if (userPass != userRePass){
			$("#input-panel").animate({
				top: "37px"
			});
			
			$("#icon-close").click(function (){
				$("#input-panel").animate({
					top: "-250px"
				});
			});
		} else {
			window.location.href = ".html";
		}
	}
});

var year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();

function searchSys(){
	var searchInp = document.getElementById("search-input").value;
	var filtInp = searchInp.toLowerCase();
	if (filtInp == "html and css" || filtInp == "javascript" || filtInp == "php" || filtInp == "python"){
		window.location.href = filtInp + ".html";
	} else if (filtInp == ""){
		window.location.href = "";
	} else if (filtInp != "html and css" || filtInp != "javascript" || filtInp != "php" || filtInp != "python"){
		window.location.href = "no result.html";
	}	
}

document.getElementById("toggle-pass").onclick = toggle;
function toggle(){
    var passTog = document.getElementById("log-pass");
    if (passTog.type === "password"){
      passTog.type = "text";
    } else {
      passTog.type = "password";
    }
}	