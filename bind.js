const boxes =document.querySelectorAll(".box")

boxes.forEach((box) => {

	box.addEventListener("click",function(event) {
		event.target.style.backgroundColor = event.target.getAttribute('data-color');
		let audio = new Audio(event.target.getAttribute('data-audio'));
		audio.play();
		audio.onended = () => {
			event.target.style.backgroundColor = "#000";
		}
	});

});