/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'valunexicons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'valicon-home': '&#xe900;',
		'valicon-office': '&#xe903;',
		'valicon-newspaper': '&#xe904;',
		'valicon-pencil': '&#xe905;',
		'valicon-pencil2': '&#xe906;',
		'valicon-pen': '&#xe908;',
		'valicon-blog': '&#xe909;',
		'valicon-eyedropper': '&#xe90a;',
		'valicon-droplet': '&#xe90b;',
		'valicon-paint-format': '&#xe90c;',
		'valicon-image': '&#xe90d;',
		'valicon-images': '&#xe90e;',
		'valicon-camera': '&#xe90f;',
		'valicon-headphones': '&#xe910;',
		'valicon-music': '&#xe911;',
		'valicon-film': '&#xe913;',
		'valicon-video-camera': '&#xe914;',
		'valicon-bullhorn': '&#xe91a;',
		'valicon-connection': '&#xe91b;',
		'valicon-mic': '&#xe91e;',
		'valicon-book': '&#xe91f;',
		'valicon-books': '&#xe920;',
		'valicon-library': '&#xe921;',
		'valicon-file-text': '&#xe922;',
		'valicon-profile': '&#xe923;',
		'valicon-file-empty': '&#xe924;',
		'valicon-files-empty': '&#xe925;',
		'valicon-file-text2': '&#xe926;',
		'valicon-file-picture': '&#xe927;',
		'valicon-file-music': '&#xe928;',
		'valicon-file-play': '&#xe929;',
		'valicon-file-video': '&#xe92a;',
		'valicon-file-zip': '&#xe92b;',
		'valicon-copy': '&#xe92c;',
		'valicon-paste': '&#xe92d;',
		'valicon-stack': '&#xe92e;',
		'valicon-folder': '&#xe92f;',
		'valicon-folder-open': '&#xe930;',
		'valicon-folder-plus': '&#xe931;',
		'valicon-folder-minus': '&#xe932;',
		'valicon-folder-download': '&#xe933;',
		'valicon-folder-upload': '&#xe934;',
		'valicon-price-tag': '&#xe935;',
		'valicon-price-tags': '&#xe936;',
		'valicon-barcode': '&#xe937;',
		'valicon-qrcode': '&#xe938;',
		'valicon-ticket': '&#xe939;',
		'valicon-cart': '&#xe93a;',
		'valicon-coin-dollar': '&#xe93b;',
		'valicon-coin-euro': '&#xe93c;',
		'valicon-coin-pound': '&#xe93d;',
		'valicon-coin-yen': '&#xe93e;',
		'valicon-credit-card': '&#xe93f;',
		'valicon-calculator': '&#xe940;',
		'valicon-lifebuoy': '&#xe941;',
		'valicon-phone': '&#xe942;',
		'valicon-address-book': '&#xe944;',
		'valicon-envelop': '&#xe945;',
		'valicon-pushpin': '&#xe946;',
		'valicon-location': '&#xe947;',
		'valicon-location2': '&#xe948;',
		'valicon-compass': '&#xe949;',
		'valicon-compass2': '&#xe94a;',
		'valicon-map': '&#xe94b;',
		'valicon-map2': '&#xe94c;',
		'valicon-history': '&#xe94d;',
		'valicon-clock': '&#xe94e;',
		'valicon-clock2': '&#xe94f;',
		'valicon-alarm': '&#xe950;',
		'valicon-bell': '&#xe951;',
		'valicon-stopwatch': '&#xe952;',
		'valicon-calendar': '&#xe953;',
		'valicon-printer': '&#xe954;',
		'valicon-keyboard': '&#xe955;',
		'valicon-display': '&#xe956;',
		'valicon-laptop': '&#xe957;',
		'valicon-mobile': '&#xe958;',
		'valicon-mobile2': '&#xe959;',
		'valicon-tablet': '&#xe95a;',
		'valicon-tv': '&#xe95b;',
		'valicon-drawer': '&#xe95c;',
		'valicon-drawer2': '&#xe95d;',
		'valicon-box-add': '&#xe95e;',
		'valicon-box-remove': '&#xe95f;',
		'valicon-download': '&#xe960;',
		'valicon-upload': '&#xe961;',
		'valicon-floppy-disk': '&#xe962;',
		'valicon-drive': '&#xe963;',
		'valicon-database': '&#xe964;',
		'valicon-undo': '&#xe965;',
		'valicon-redo': '&#xe966;',
		'valicon-undo2': '&#xe967;',
		'valicon-redo2': '&#xe968;',
		'valicon-forward': '&#xe969;',
		'valicon-reply': '&#xe96a;',
		'valicon-bubble': '&#xe96b;',
		'valicon-bubbles': '&#xe96c;',
		'valicon-bubbles2': '&#xe96d;',
		'valicon-bubble2': '&#xe96e;',
		'valicon-bubbles3': '&#xe96f;',
		'valicon-bubbles4': '&#xe970;',
		'valicon-user': '&#xe971;',
		'valicon-users': '&#xe972;',
		'valicon-user-plus': '&#xe973;',
		'valicon-user-minus': '&#xe974;',
		'valicon-user-check': '&#xe975;',
		'valicon-user-tie': '&#xe976;',
		'valicon-hour-glass': '&#xe979;',
		'valicon-spinner11': '&#xe984;',
		'valicon-binoculars': '&#xe985;',
		'valicon-search': '&#xe986;',
		'valicon-zoom-in': '&#xe987;',
		'valicon-zoom-out': '&#xe988;',
		'valicon-enlarge': '&#xe989;',
		'valicon-shrink': '&#xe98a;',
		'valicon-enlarge2': '&#xe98b;',
		'valicon-shrink2': '&#xe98c;',
		'valicon-key': '&#xe98d;',
		'valicon-key2': '&#xe98e;',
		'valicon-lock': '&#xe98f;',
		'valicon-unlocked': '&#xe990;',
		'valicon-wrench': '&#xe991;',
		'valicon-equalizer': '&#xe992;',
		'valicon-equalizer2': '&#xe993;',
		'valicon-cog': '&#xe994;',
		'valicon-cogs': '&#xe995;',
		'valicon-hammer': '&#xe996;',
		'valicon-magic-wand': '&#xe997;',
		'valicon-aid-kit': '&#xe998;',
		'valicon-bug': '&#xe999;',
		'valicon-pie-chart': '&#xe99a;',
		'valicon-stats-dots': '&#xe99b;',
		'valicon-stats-bars': '&#xe99c;',
		'valicon-stats-bars2': '&#xe99d;',
		'valicon-trophy': '&#xe99e;',
		'valicon-gift': '&#xe99f;',
		'valicon-glass': '&#xe9a0;',
		'valicon-glass2': '&#xe9a1;',
		'valicon-mug': '&#xe9a2;',
		'valicon-spoon-knife': '&#xe9a3;',
		'valicon-leaf': '&#xe9a4;',
		'valicon-rocket': '&#xe9a5;',
		'valicon-meter': '&#xe9a6;',
		'valicon-meter2': '&#xe9a7;',
		'valicon-hammer2': '&#xe9a8;',
		'valicon-fire': '&#xe9a9;',
		'valicon-lab': '&#xe9aa;',
		'valicon-magnet': '&#xe9ab;',
		'valicon-bin': '&#xe9ac;',
		'valicon-bin2': '&#xe9ad;',
		'valicon-briefcase': '&#xe9ae;',
		'valicon-airplane': '&#xe9af;',
		'valicon-truck': '&#xe9b0;',
		'valicon-road': '&#xe9b1;',
		'valicon-accessibility': '&#xe9b2;',
		'valicon-target': '&#xe9b3;',
		'valicon-shield': '&#xe9b4;',
		'valicon-power': '&#xe9b5;',
		'valicon-switch': '&#xe9b6;',
		'valicon-power-cord': '&#xe9b7;',
		'valicon-clipboard': '&#xe9b8;',
		'valicon-list-numbered': '&#xe9b9;',
		'valicon-list': '&#xe9ba;',
		'valicon-list2': '&#xe9bb;',
		'valicon-tree': '&#xe9bc;',
		'valicon-menu': '&#xe9bd;',
		'valicon-menu2': '&#xe9be;',
		'valicon-menu3': '&#xe9bf;',
		'valicon-menu4': '&#xe9c0;',
		'valicon-cloud': '&#xe9c1;',
		'valicon-cloud-download': '&#xe9c2;',
		'valicon-cloud-upload': '&#xe9c3;',
		'valicon-cloud-check': '&#xe9c4;',
		'valicon-download2': '&#xe9c5;',
		'valicon-upload2': '&#xe9c6;',
		'valicon-download3': '&#xe9c7;',
		'valicon-upload3': '&#xe9c8;',
		'valicon-sphere': '&#xe9c9;',
		'valicon-earth': '&#xe9ca;',
		'valicon-link': '&#xe9cb;',
		'valicon-flag': '&#xe9cc;',
		'valicon-attachment': '&#xe9cd;',
		'valicon-eye': '&#xe9ce;',
		'valicon-eye-plus': '&#xe9cf;',
		'valicon-eye-minus': '&#xe9d0;',
		'valicon-eye-blocked': '&#xe9d1;',
		'valicon-bookmark': '&#xe9d2;',
		'valicon-bookmarks': '&#xe9d3;',
		'valicon-sun': '&#xe9d4;',
		'valicon-contrast': '&#xe9d5;',
		'valicon-brightness-contrast': '&#xe9d6;',
		'valicon-star-empty': '&#xe9d7;',
		'valicon-star-half': '&#xe9d8;',
		'valicon-star-full': '&#xe9d9;',
		'valicon-heart': '&#xe9da;',
		'valicon-heart-broken': '&#xe9db;',
		'valicon-man': '&#xe9dc;',
		'valicon-woman': '&#xe9dd;',
		'valicon-man-woman': '&#xe9de;',
		'valicon-warning': '&#xea07;',
		'valicon-notification': '&#xea08;',
		'valicon-question': '&#xea09;',
		'valicon-plus': '&#xea0a;',
		'valicon-minus': '&#xea0b;',
		'valicon-info': '&#xea0c;',
		'valicon-cancel-circle': '&#xea0d;',
		'valicon-blocked': '&#xea0e;',
		'valicon-cross': '&#xea0f;',
		'valicon-checkmark': '&#xea10;',
		'valicon-checkmark2': '&#xea11;',
		'valicon-spell-check': '&#xea12;',
		'valicon-enter': '&#xea13;',
		'valicon-exit': '&#xea14;',
		'valicon-play2': '&#xea15;',
		'valicon-pause': '&#xea16;',
		'valicon-stop': '&#xea17;',
		'valicon-previous': '&#xea18;',
		'valicon-next': '&#xea19;',
		'valicon-backward': '&#xea1a;',
		'valicon-forward2': '&#xea1b;',
		'valicon-play3': '&#xea1c;',
		'valicon-pause2': '&#xea1d;',
		'valicon-stop2': '&#xea1e;',
		'valicon-backward2': '&#xea1f;',
		'valicon-forward3': '&#xea20;',
		'valicon-first': '&#xea21;',
		'valicon-last': '&#xea22;',
		'valicon-previous2': '&#xea23;',
		'valicon-next2': '&#xea24;',
		'valicon-eject': '&#xea25;',
		'valicon-volume-high': '&#xea26;',
		'valicon-volume-medium': '&#xea27;',
		'valicon-volume-low': '&#xea28;',
		'valicon-volume-mute': '&#xea29;',
		'valicon-volume-mute2': '&#xea2a;',
		'valicon-volume-increase': '&#xea2b;',
		'valicon-volume-decrease': '&#xea2c;',
		'valicon-loop': '&#xea2d;',
		'valicon-loop2': '&#xea2e;',
		'valicon-infinite': '&#xea2f;',
		'valicon-shuffle': '&#xea30;',
		'valicon-arrow-up-left': '&#xea31;',
		'valicon-arrow-up': '&#xea32;',
		'valicon-arrow-up-right': '&#xea33;',
		'valicon-arrow-right': '&#xea34;',
		'valicon-arrow-down-right': '&#xea35;',
		'valicon-arrow-down': '&#xea36;',
		'valicon-arrow-down-left': '&#xea37;',
		'valicon-arrow-left': '&#xea38;',
		'valicon-arrow-up-left2': '&#xea39;',
		'valicon-arrow-up2': '&#xea3a;',
		'valicon-arrow-up-right2': '&#xea3b;',
		'valicon-arrow-right2': '&#xea3c;',
		'valicon-arrow-down-right2': '&#xea3d;',
		'valicon-arrow-down2': '&#xea3e;',
		'valicon-arrow-down-left2': '&#xea3f;',
		'valicon-arrow-left2': '&#xea40;',
		'valicon-circle-up': '&#xea41;',
		'valicon-circle-right': '&#xea42;',
		'valicon-circle-down': '&#xea43;',
		'valicon-circle-left': '&#xea44;',
		'valicon-sort-amount-asc': '&#xea4c;',
		'valicon-sort-amount-desc': '&#xea4d;',
		'valicon-command': '&#xea4e;',
		'valicon-shift': '&#xea4f;',
		'valicon-ctrl': '&#xea50;',
		'valicon-opt': '&#xea51;',
		'valicon-checkbox-checked': '&#xea52;',
		'valicon-checkbox-unchecked': '&#xea53;',
		'valicon-radio-checked': '&#xea54;',
		'valicon-radio-checked2': '&#xea55;',
		'valicon-radio-unchecked': '&#xea56;',
		'valicon-crop': '&#xea57;',
		'valicon-scissors': '&#xea5a;',
		'valicon-filter': '&#xea5b;',
		'valicon-font': '&#xea5c;',
		'valicon-ligature': '&#xea5d;',
		'valicon-bold': '&#xea62;',
		'valicon-underline': '&#xea63;',
		'valicon-italic': '&#xea64;',
		'valicon-omega': '&#xea66;',
		'valicon-sigma': '&#xea67;',
		'valicon-page-break': '&#xea68;',
		'valicon-superscript': '&#xea69;',
		'valicon-subscript': '&#xea6a;',
		'valicon-pagebreak': '&#xea6e;',
		'valicon-table2': '&#xea71;',
		'valicon-insert-template': '&#xea72;',
		'valicon-pilcrow': '&#xea73;',
		'valicon-section': '&#xea76;',
		'valicon-embed2': '&#xea80;',
		'valicon-terminal': '&#xea81;',
		'valicon-share2': '&#xea82;',
		'valicon-amazon': '&#xea87;',
		'valicon-google': '&#xea88;',
		'valicon-google2': '&#xea89;',
		'valicon-google3': '&#xea8a;',
		'valicon-google-drive': '&#xea8f;',
		'valicon-facebook': '&#xea90;',
		'valicon-facebook2': '&#xea91;',
		'valicon-instagram': '&#xea92;',
		'valicon-whatsapp': '&#xea93;',
		'valicon-spotify': '&#xea94;',
		'valicon-telegram': '&#xea95;',
		'valicon-twitter': '&#xea96;',
		'valicon-vine': '&#xea97;',
		'valicon-rss': '&#xea9b;',
		'valicon-rss2': '&#xea9c;',
		'valicon-youtube': '&#xea9d;',
		'valicon-youtube2': '&#xea9e;',
		'valicon-twitch': '&#xea9f;',
		'valicon-vimeo': '&#xeaa0;',
		'valicon-vimeo2': '&#xeaa1;',
		'valicon-steam': '&#xeaac;',
		'valicon-steam2': '&#xeaad;',
		'valicon-dropbox': '&#xeaae;',
		'valicon-onedrive': '&#xeaaf;',
		'valicon-github': '&#xeab0;',
		'valicon-wordpress': '&#xeab4;',
		'valicon-tux': '&#xeabd;',
		'valicon-appleinc': '&#xeabe;',
		'valicon-finder': '&#xeabf;',
		'valicon-android': '&#xeac0;',
		'valicon-windows': '&#xeac1;',
		'valicon-windows8': '&#xeac2;',
		'valicon-soundcloud': '&#xeac3;',
		'valicon-soundcloud2': '&#xeac4;',
		'valicon-skype': '&#xeac5;',
		'valicon-reddit': '&#xeac6;',
		'valicon-wikipedia': '&#xeac8;',
		'valicon-linkedin': '&#xeac9;',
		'valicon-linkedin2': '&#xeaca;',
		'valicon-stackoverflow': '&#xead0;',
		'valicon-pinterest': '&#xead1;',
		'valicon-pinterest2': '&#xead2;',
		'valicon-xing': '&#xead3;',
		'valicon-xing2': '&#xead4;',
		'valicon-paypal': '&#xead8;',
		'valicon-chrome': '&#xead9;',
		'valicon-firefox': '&#xeada;',
		'valicon-IE': '&#xeadb;',
		'valicon-edge': '&#xeadc;',
		'valicon-safari': '&#xeadd;',
		'valicon-html-five': '&#xeae4;',
		'valicon-html-five2': '&#xeae5;',
		'valicon-css3': '&#xeae6;',
		'valicon-git': '&#xeae7;',
		'valicon-codepen': '&#xeae8;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/valicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
