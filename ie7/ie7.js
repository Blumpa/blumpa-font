/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Blumpa\'">' + entity + '</span>' + html;
	}
	var icons = {
		'b-logotipov0.2': '&#xe600;',
		'b-logotipo-altv0.2': '&#xe601;',
		'b-logov0.2': '&#xe602;',
		'b-armariosv0.2': '&#xe603;',
		'b-passarv0.2': '&#xe604;',
		'b-janelasv0.2': '&#xe605;',
		'b-animaisv0.2': '&#xe606;',
		'b-lavarv0.2': '&#xe608;',
		'b-roupasv0.2': '&#xe609;',
		'b-fornov0.2': '&#xe60a;',
		'b-geladeirav0.2': '&#xe60b;',
		'b-externav0.2': '&#xe60c;',
		'b-paredesv0.2': '&#xe60d;',
		'b-mudancasv0.2': '&#xe802;',
		'b-mudarv0.2': '&#xe800;',
		'b-posreformasv0.2': '&#xe801;',
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
		c = c.match(/b-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
