<script>
	// Author: jkush321
	// Name: Text Size
	// Description: Makes text grow and shrink repeatedly, extremely annoying to the user.

	var diff = .75;
	var rate = .125;
	var time = 0;

	setInterval(function(){
		time++;
		document.body.style.fontSize = diff*2 + Math.sin(time*rate)*diff + "em";
	}, 50);
</script>