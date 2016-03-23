$(document).ready(function() {		
		var menuWrapper = $('.site-menu-wrapper');
		var siteMenuExpandButton = $('.site-menu-expand-button');
		var isAccordion = false;

		var cloneOfSiteMenu = $('.site-menu-list').clone();
		var cloneWrapper = $('<div></div>')
							.addClass('full-navbar')
							.append(cloneOfSiteMenu);

		$('body').append(cloneWrapper);

		var oriDomi = new OriDomi('.site-menu', { touchEnabled: false });

		oriDomi.foldUp();

		setTimeout(function(){
    		siteMenuExpandButton.fadeIn();
		}, 500);
		
		$('.site-menu-collapse-button').click(function() {
			oriDomi.foldUp(function() {
				setTimeout(function(){
		    		menuWrapper.hide();
					siteMenuExpandButton.fadeIn(200);
				}, 500);
			});
		})

		siteMenuExpandButton.click(function () {
			$(this).hide();
			menuWrapper.show();
			setTimeout(function(){
    			oriDomi.accordion(10);
			}, 500);
		})

		$(".site-menu-item").on({
	    	mouseenter: function () {
	        	var className = $(this).attr('class').split(' ')[0];
	        	$('.' + className).addClass('hover');
	    	},
	    	mouseleave: function () {
	        	var className = $(this).attr('class').split(' ')[0];
	        	$('.' + className).removeClass('hover');
	    	},
	    	click: function() {
	    		oriDomi.foldUp(function() {
					setTimeout(function(){
			    		menuWrapper.hide();
						siteMenuExpandButton.fadeIn(200);
					}, 500);
				});
	    	}
		});
	});