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
	uploadBox.classList.remove("hide-upload")
	uploadBox.classList.add("show-upload")
})

var videoTitle = document.getElementById("video-title")
console.log("== video-title:", videoTitle)

var videoUrl = document.getElementById("video-url")
console.log("== video-url:", videoUrl)

var videoThumbnail = document.getElementById("video-thumbnail")
console.log("== video-thumbnail:", videoThumbnail)

var videoDes = document.getElementById("video-description")
console.log("== video-description:", videoDes)

var forKids = document.getElementById("for-kids")
console.log("== for-kids:", forKids)

var postGenre = document.getElementById("post-genre")
console.log("== post-genre:", postGenre)

var confirmUploadButton = document.getElementById("confirm-upload-button")
console.log("== confirm-upload-button:", confirmUploadButton)

var cancelUploadButton = document.getElementById("cancel-upload-button")
console.log("== cancel-upload-button:", cancelUploadButton)

cancelUploadButton.addEventListener("click", function() {
	videoTitle.value = videoTitle.defaultValue
	videoUrl.value = videoUrl.defaultValue
	videoThumbnail.value = videoThumbnail.defaultValue
	videoDes.value = videoDes.defaultValue
	forKids.checked = forKids.defaultChecked
	postGenre.value = postGenre.defaultValue
	uploadBackdrop.classList.add("hide-upload")
	uploadBox.classList.add("hide-upload")
	uploadBox.classList.remove("show-upload")
})
