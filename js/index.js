// Create an element with class dot
// <li class="dot"></li>

const $stage = document.querySelector('.stage')

const addADot = (event) => {

	// $stage.innerHTML += `<li class="dot"></li>`

	// document.querySelector('.dot:last-child').style.left = `${Math.random() * 100}%`
	// document.querySelector('.dot:last-child').style.top = `${Math.random() * 100}%`
	console.log(event)


	// Create the new element
	const $dot = document.createElement('li')

	// Add a class to it
	$dot.classList.add('dot')

	// Move the element around
	$dot.style.left = `${Math.random() * 100}%`
	$dot.style.top = `${Math.random() * 100}%`

	// Insert it into the document
	$stage.appendChild($dot)

}


window.addEventListener('click', addADot)


// 1. Insert the dot at the point (left/top) you clicked, not randomly
// 2. Insert the dot at the point, BUT, apply as a %, not a px value
// 3. Randomize the size
// 4. Randomize the colour

// ADVANCED:
// - If the new element is inserted such that it would be partially outside the window boundary, move it over in the appropriate direction.
