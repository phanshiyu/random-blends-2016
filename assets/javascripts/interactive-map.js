$(document).ready(function() {
	$('#interactive-map').vectorMap( {
		map: 'rb-map',
		// zoomMin: 3,
		zoomOnScroll: false,
		regionStyle: {
	      initial: {
	        fill: '#B8E186'
	      },
	      selected: {
	        fill: '#F4A582'
	      }
	    },
	    // backgroundColor: 'transparent',
	    series: {
	    	regions:[
	    		{values: {"base":"#e6e5e0"},attribute: 'fill'},
	    		{values: {"interior-1":"#000000"},attribute: 'fill'},
	    		{values: {"interior-2":"#000000"},attribute: 'fill'},
	    		{values: {"circle_1_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_2_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_3_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_4_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_5_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_6_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_7_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_8_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_9_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_10_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_11_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_12_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_13_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_14_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_15_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_16_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_17_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_18_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_19_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_20_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_21_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_22_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_23_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_24_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_25_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_26_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_27_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_28_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_29_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_30_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_31_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_32_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_33_":"#b9d0d2"},attribute: 'fill'},
				{values: {"circle_100_":"#b9d0d2"},attribute: 'fill'},

				{values: {"circle_57_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_58_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_59_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_60_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_61_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_62_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_63_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_64_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_65_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_66_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_67_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_68_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_69_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_70_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_71_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_72_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_73_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_74_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_75_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_76_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_77_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_78_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_79_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_80_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_81_":"#f6af99"},attribute: 'fill'},
				{values: {"circle_82_":"#f6af99"},attribute: 'fill'},

				{values: {"circle_34_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_35_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_36_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_37_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_38_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_39_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_40_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_41_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_42_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_43_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_44_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_45_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_46_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_47_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_48_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_49_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_50_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_51_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_52_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_53_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_54_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_55_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_56_":"#e3d9c2"},attribute: 'fill'},
				{values: {"circle_56_1":"#e3d9c2"},attribute: 'fill'},

	    		{values: {"id1":"#000000"},attribute: 'fill'},
				{values: {"id2":"#000000"},attribute: 'fill'},
				{values: {"id3":"#000000"},attribute: 'fill'},
				{values: {"id4":"#000000"},attribute: 'fill'},
				{values: {"id5":"#000000"},attribute: 'fill'},
				{values: {"id6":"#000000"},attribute: 'fill'},
				{values: {"id7":"#000000"},attribute: 'fill'},
				{values: {"id8":"#000000"},attribute: 'fill'},
				{values: {"id9":"#000000"},attribute: 'fill'},
				{values: {"id10":"#000000"},attribute: 'fill'},
				{values: {"id11":"#000000"},attribute: 'fill'},
				{values: {"id12":"#000000"},attribute: 'fill'},
				{values: {"id13":"#000000"},attribute: 'fill'},
				{values: {"id14":"#000000"},attribute: 'fill'},
				{values: {"id15":"#000000"},attribute: 'fill'},
				{values: {"id16":"#000000"},attribute: 'fill'},
				{values: {"id17":"#000000"},attribute: 'fill'},
				{values: {"id18":"#000000"},attribute: 'fill'},
				{values: {"id19":"#000000"},attribute: 'fill'},
				{values: {"id20":"#000000"},attribute: 'fill'},
				{values: {"id21":"#000000"},attribute: 'fill'},
				{values: {"id22":"#000000"},attribute: 'fill'},
				{values: {"id23":"#000000"},attribute: 'fill'},
				{values: {"id24":"#000000"},attribute: 'fill'},
				{values: {"id25":"#000000"},attribute: 'fill'},
				{values: {"id26":"#000000"},attribute: 'fill'},
				{values: {"id27":"#000000"},attribute: 'fill'},
				{values: {"id28":"#000000"},attribute: 'fill'},
				{values: {"id29":"#000000"},attribute: 'fill'},
				{values: {"id30":"#000000"},attribute: 'fill'},
				{values: {"id31":"#000000"},attribute: 'fill'},
				{values: {"id32":"#000000"},attribute: 'fill'},
				{values: {"id33":"#000000"},attribute: 'fill'},
				{values: {"id34":"#000000"},attribute: 'fill'},
				{values: {"id35":"#000000"},attribute: 'fill'},
				{values: {"id36":"#000000"},attribute: 'fill'},
				{values: {"id37":"#000000"},attribute: 'fill'},
				{values: {"id38":"#000000"},attribute: 'fill'},
				{values: {"id39":"#000000"},attribute: 'fill'},
				{values: {"id40":"#000000"},attribute: 'fill'},
				{values: {"id41":"#000000"},attribute: 'fill'},
				{values: {"id42":"#000000"},attribute: 'fill'},
				{values: {"id43":"#000000"},attribute: 'fill'},
				{values: {"id44":"#000000"},attribute: 'fill'},
				{values: {"id45":"#000000"},attribute: 'fill'},
				{values: {"id46":"#000000"},attribute: 'fill'},
				{values: {"id47":"#000000"},attribute: 'fill'},
				{values: {"id48":"#000000"},attribute: 'fill'},
				{values: {"id49":"#000000"},attribute: 'fill'},
				{values: {"id50":"#000000"},attribute: 'fill'},
				{values: {"id51":"#000000"},attribute: 'fill'},
				{values: {"id52":"#000000"},attribute: 'fill'},
				{values: {"id53":"#000000"},attribute: 'fill'},
				{values: {"id54":"#000000"},attribute: 'fill'},
				{values: {"id55":"#000000"},attribute: 'fill'},
				{values: {"id56":"#000000"},attribute: 'fill'},
				{values: {"id57":"#000000"},attribute: 'fill'},
				{values: {"id58":"#000000"},attribute: 'fill'},
				{values: {"id59":"#000000"},attribute: 'fill'},
				{values: {"id60":"#000000"},attribute: 'fill'},
				{values: {"id61":"#000000"},attribute: 'fill'},
				{values: {"id62":"#000000"},attribute: 'fill'},
				{values: {"id63":"#000000"},attribute: 'fill'},
				{values: {"id64":"#000000"},attribute: 'fill'},
				{values: {"id65":"#000000"},attribute: 'fill'},
				{values: {"id66":"#000000"},attribute: 'fill'},
				{values: {"id67":"#000000"},attribute: 'fill'},
				{values: {"id68":"#000000"},attribute: 'fill'},
				{values: {"id69":"#000000"},attribute: 'fill'},
				{values: {"id70":"#000000"},attribute: 'fill'},
				{values: {"id71":"#000000"},attribute: 'fill'},
				{values: {"id72":"#000000"},attribute: 'fill'},
				{values: {"id73":"#000000"},attribute: 'fill'},
				{values: {"id74":"#000000"},attribute: 'fill'},
				{values: {"id75":"#000000"},attribute: 'fill'},
				{values: {"id76":"#000000"},attribute: 'fill'},
				{values: {"id77":"#000000"},attribute: 'fill'},
				{values: {"id78":"#000000"},attribute: 'fill'},
				{values: {"id79":"#000000"},attribute: 'fill'},
				{values: {"id80":"#000000"},attribute: 'fill'},
				{values: {"id81":"#000000"},attribute: 'fill'},
				{values: {"id82":"#000000"},attribute: 'fill'},
				{values: {"id83":"#000000"},attribute: 'fill'},
				{values: {"id84":"#000000"},attribute: 'fill'},
				{values: {"id85":"#000000"},attribute: 'fill'},
				{values: {"id86":"#000000"},attribute: 'fill'},
				{values: {"id87":"#000000"},attribute: 'fill'},
				{values: {"id88":"#000000"},attribute: 'fill'},
				{values: {"id89":"#000000"},attribute: 'fill'},
				{values: {"id90":"#000000"},attribute: 'fill'},
				{values: {"id91":"#000000"},attribute: 'fill'},
				{values: {"id92":"#000000"},attribute: 'fill'},
				{values: {"id93":"#000000"},attribute: 'fill'},
				{values: {"id94":"#000000"},attribute: 'fill'},
				{values: {"id95":"#000000"},attribute: 'fill'},
				{values: {"id96":"#000000"},attribute: 'fill'},
				{values: {"id97":"#000000"},attribute: 'fill'},
				{values: {"id98":"#000000"},attribute: 'fill'},
				{values: {"id99":"#000000"},attribute: 'fill'},
				{values: {"id100":"#000000"},attribute: 'fill'},
				{values: {"id101":"#000000"},attribute: 'fill'},
				{values: {"id102":"#000000"},attribute: 'fill'},
				{values: {"id103":"#000000"},attribute: 'fill'},
				{values: {"id104":"#000000"},attribute: 'fill'},
				{values: {"id105":"#000000"},attribute: 'fill'},
				{values: {"id106":"#000000"},attribute: 'fill'},
				{values: {"id107":"#000000"},attribute: 'fill'},
				{values: {"id108":"#000000"},attribute: 'fill'},
				{values: {"id109":"#000000"},attribute: 'fill'},
				{values: {"id110":"#000000"},attribute: 'fill'},
				{values: {"id111":"#000000"},attribute: 'fill'},
				{values: {"id112":"#000000"},attribute: 'fill'},
				{values: {"id113":"#000000"},attribute: 'fill'},
				{values: {"id114":"#000000"},attribute: 'fill'},
				{values: {"id115":"#000000"},attribute: 'fill'},
				{values: {"id116":"#000000"},attribute: 'fill'},
				{values: {"id117":"#000000"},attribute: 'fill'},
				{values: {"id118":"#000000"},attribute: 'fill'},
				{values: {"id119":"#000000"},attribute: 'fill'},
				{values: {"id120":"#000000"},attribute: 'fill'},
				{values: {"id121":"#000000"},attribute: 'fill'},
				{values: {"id122":"#000000"},attribute: 'fill'},
				{values: {"id123":"#000000"},attribute: 'fill'},
				{values: {"id124":"#000000"},attribute: 'fill'},
				{values: {"id125":"#000000"},attribute: 'fill'},
				{values: {"id126":"#000000"},attribute: 'fill'},
				{values: {"id127":"#000000"},attribute: 'fill'},
				{values: {"id128":"#000000"},attribute: 'fill'},
				{values: {"id129":"#000000"},attribute: 'fill'},
				{values: {"id130":"#000000"},attribute: 'fill'},
				{values: {"id131":"#000000"},attribute: 'fill'},
				{values: {"id132":"#000000"},attribute: 'fill'},
				{values: {"id133":"#000000"},attribute: 'fill'},
				{values: {"id134":"#000000"},attribute: 'fill'},
				{values: {"id135":"#000000"},attribute: 'fill'},
				{values: {"id136":"#000000"},attribute: 'fill'},
				{values: {"id137":"#000000"},attribute: 'fill'},
				{values: {"id138":"#000000"},attribute: 'fill'},
				{values: {"id139":"#000000"},attribute: 'fill'},
				{values: {"id140":"#000000"},attribute: 'fill'},
				{values: {"id141":"#000000"},attribute: 'fill'},
				{values: {"id142":"#000000"},attribute: 'fill'},
				{values: {"id143":"#000000"},attribute: 'fill'},
				{values: {"id144":"#000000"},attribute: 'fill'},
				{values: {"id145":"#000000"},attribute: 'fill'},
				{values: {"id146":"#000000"},attribute: 'fill'},
				{values: {"id148":"#000000"},attribute: 'fill'},
				{values: {"id149":"#000000"},attribute: 'fill'},
				{values: {"id150":"#000000"},attribute: 'fill'},
				{values: {"id151":"#000000"},attribute: 'fill'},
				{values: {"id152":"#000000"},attribute: 'fill'},
				{values: {"id153":"#000000"},attribute: 'fill'},
				{values: {"id154":"#000000"},attribute: 'fill'},
				{values: {"id155":"#000000"},attribute: 'fill'},
				{values: {"id156":"#000000"},attribute: 'fill'},
				{values: {"id157":"#000000"},attribute: 'fill'},
				{values: {"id158":"#000000"},attribute: 'fill'},
				{values: {"id159":"#000000"},attribute: 'fill'},
				{values: {"id160":"#000000"},attribute: 'fill'},
				{values: {"id161":"#000000"},attribute: 'fill'},
				{values: {"id162":"#000000"},attribute: 'fill'},
				{values: {"id163":"#000000"},attribute: 'fill'},
				{values: {"id164":"#000000"},attribute: 'fill'},
				{values: {"id165":"#000000"},attribute: 'fill'},
				{values: {"id166":"#000000"},attribute: 'fill'},
				{values: {"id167":"#000000"},attribute: 'fill'},
				{values: {"id168":"#000000"},attribute: 'fill'},
				{values: {"id169":"#000000"},attribute: 'fill'},
				{values: {"id170":"#000000"},attribute: 'fill'},
				{values: {"id171":"#000000"},attribute: 'fill'},
				{values: {"id172":"#000000"},attribute: 'fill'},
				{values: {"id173":"#000000"},attribute: 'fill'},
				{values: {"id174":"#000000"},attribute: 'fill'},
				{values: {"id175":"#000000"},attribute: 'fill'},
				{values: {"id176":"#000000"},attribute: 'fill'},
				{values: {"id177":"#000000"},attribute: 'fill'},
				{values: {"id178":"#000000"},attribute: 'fill'},
				{values: {"id179":"#000000"},attribute: 'fill'},
				{values: {"id180":"#000000"},attribute: 'fill'},
				{values: {"id181":"#000000"},attribute: 'fill'},
				{values: {"id182":"#000000"},attribute: 'fill'},
				{values: {"id183":"#000000"},attribute: 'fill'},
				{values: {"id184":"#000000"},attribute: 'fill'},
				{values: {"id185":"#000000"},attribute: 'fill'},
				{values: {"id186":"#000000"},attribute: 'fill'},
				{values: {"id187":"#000000"},attribute: 'fill'},
				{values: {"id188":"#000000"},attribute: 'fill'},
				{values: {"id189":"#000000"},attribute: 'fill'},
				{values: {"id190":"#000000"},attribute: 'fill'},
				{values: {"id191":"#000000"},attribute: 'fill'},
				{values: {"id192":"#000000"},attribute: 'fill'},
				{values: {"id193":"#000000"},attribute: 'fill'},
				{values: {"id194":"#000000"},attribute: 'fill'},
				{values: {"id195":"#000000"},attribute: 'fill'},
				{values: {"id196":"#000000"},attribute: 'fill'},
				{values: {"id197":"#000000"},attribute: 'fill'},
				{values: {"id198":"#000000"},attribute: 'fill'},
				{values: {"id199":"#000000"},attribute: 'fill'},
				{values: {"id200":"#000000"},attribute: 'fill'},
				{values: {"id201":"#000000"},attribute: 'fill'},
				{values: {"id202":"#000000"},attribute: 'fill'},
				{values: {"id203":"#000000"},attribute: 'fill'},
				{values: {"id204":"#000000"},attribute: 'fill'},
				{values: {"id205":"#000000"},attribute: 'fill'},
				{values: {"id206":"#000000"},attribute: 'fill'},
				{values: {"id207":"#000000"},attribute: 'fill'},
				{values: {"id208":"#000000"},attribute: 'fill'},
				{values: {"id209":"#000000"},attribute: 'fill'},
				{values: {"id210":"#000000"},attribute: 'fill'},
				{values: {"id211":"#000000"},attribute: 'fill'},
				{values: {"id212":"#000000"},attribute: 'fill'},
				{values: {"id213":"#000000"},attribute: 'fill'},
				{values: {"id214":"#000000"},attribute: 'fill'},
				{values: {"id215":"#000000"},attribute: 'fill'},
				{values: {"id216":"#000000"},attribute: 'fill'},
				{values: {"id217":"#000000"},attribute: 'fill'},
				{values: {"id218":"#000000"},attribute: 'fill'},
				{values: {"id219":"#000000"},attribute: 'fill'},
				{values: {"id220":"#000000"},attribute: 'fill'},
				{values: {"id221":"#000000"},attribute: 'fill'},
				{values: {"id222":"#000000"},attribute: 'fill'},
				{values: {"id223":"#000000"},attribute: 'fill'},
				{values: {"id224":"#000000"},attribute: 'fill'},
				{values: {"id225":"#000000"},attribute: 'fill'},
				{values: {"id226":"#000000"},attribute: 'fill'},
				{values: {"id227":"#000000"},attribute: 'fill'},
				{values: {"id228":"#000000"},attribute: 'fill'},
				{values: {"id229":"#000000"},attribute: 'fill'},
				{values: {"id230":"#000000"},attribute: 'fill'},
				{values: {"id231":"#000000"},attribute: 'fill'},
				{values: {"id232":"#000000"},attribute: 'fill'},
				{values: {"id233":"#000000"},attribute: 'fill'},
				{values: {"id234":"#000000"},attribute: 'fill'},
				{values: {"id235":"#000000"},attribute: 'fill'},
				{values: {"id236":"#000000"},attribute: 'fill'},
				{values: {"id237":"#000000"},attribute: 'fill'},
				{values: {"id238":"#000000"},attribute: 'fill'},
				{values: {"id239":"#000000"},attribute: 'fill'},
				{values: {"id240":"#000000"},attribute: 'fill'},
				{values: {"id241":"#000000"},attribute: 'fill'},
				{values: {"id242":"#000000"},attribute: 'fill'},
				{values: {"id243":"#000000"},attribute: 'fill'},
				{values: {"id244":"#000000"},attribute: 'fill'},
				{values: {"id245":"#000000"},attribute: 'fill'},
				{values: {"id246":"#000000"},attribute: 'fill'},
				{values: {"id247":"#000000"},attribute: 'fill'},
				{values: {"id248":"#000000"},attribute: 'fill'},
				{values: {"id249":"#000000"},attribute: 'fill'},
				{values: {"id250":"#000000"},attribute: 'fill'},
				{values: {"id251":"#000000"},attribute: 'fill'},
				{values: {"id252":"#000000"},attribute: 'fill'},
				{values: {"id253":"#000000"},attribute: 'fill'},
				{values: {"id254":"#000000"},attribute: 'fill'},
				{values: {"id255":"#000000"},attribute: 'fill'},
				{values: {"id256":"#000000"},attribute: 'fill'},
				{values: {"id257":"#000000"},attribute: 'fill'},
				{values: {"id258":"#000000"},attribute: 'fill'},
				{values: {"id259":"#000000"},attribute: 'fill'},
				{values: {"id260":"#000000"},attribute: 'fill'},
				{values: {"id261":"#000000"},attribute: 'fill'},
				{values: {"id262":"#000000"},attribute: 'fill'},
				{values: {"id263":"#000000"},attribute: 'fill'},
				{values: {"id264":"#000000"},attribute: 'fill'},
				{values: {"id265":"#000000"},attribute: 'fill'},
				{values: {"id266":"#000000"},attribute: 'fill'},
				{values: {"id267":"#000000"},attribute: 'fill'},
				{values: {"id268":"#000000"},attribute: 'fill'},
				{values: {"id269":"#000000"},attribute: 'fill'},
				{values: {"id270":"#000000"},attribute: 'fill'},
				{values: {"id271":"#000000"},attribute: 'fill'},
				{values: {"id272":"#000000"},attribute: 'fill'},
				{values: {"id273":"#000000"},attribute: 'fill'},
	    	]
	    }
	});

	$('#interactive-map').vectorMap('get', 'mapObject').setFocus({
																	region: 'base'
																});

	window.onresize = function(event) {
		$('#interactive-map').vectorMap('get', 'mapObject').setFocus({
																	region: 'base'
																});
	};
});