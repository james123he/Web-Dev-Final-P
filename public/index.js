console.log("== document:", document)
console.log("== document.body:", document.body)

var uploadBackdrop = document.getElementById("upload-backdrop")
console.log("== upload-backdrop:", uploadBackdrop)

var uploadBox = document.getElementById("upload-box")
console.log("== upload-box:", uploadBox)

var uploadButton = document.getElementById("upload-button")
console.log("== upload-button:", uploadButton)

uploadButton.addEventListener("click", function() {
	uploadBackdrop.classList.remove("hide-upload")
	uploadBackdrop.classList.add("show-upload")
	uploadBackdrop.classList.remove("hide-upload")
	uploadBox.classList.add("show-upload")
})

