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
	uploadBackdrop.classList.remove("hide-upload")
	uploadBox.classList.add("show-upload")
})

var videoTitle = document.getElementById("video-title")
console.log("== video-title:", videoTitle)

var videoUrl = document.getElementById("video-url")
console.log("== video-url:", videoUrl)

var videoDes = document.getElementById("video-description")
console.log("== video-description:", videoDes)

var forKids = document.getElementById("for-kids")
console.log("== for-kids:", forKids)

var postGenre = document.getElementById("post-genre")
console.log("== post-genre:", postGenre)

var confirmUploadButton = document.getElementById("confirm-upload-button")
console.log("== confirm-upload-button", confirmUploadButton)
