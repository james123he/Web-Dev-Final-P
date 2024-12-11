// DOM Elements
const elements = {
    // Filter related elements
    filterModal: document.getElementById("filter-modal"),
    filterBackdrop: document.getElementById("filter-backdrop"),
    filterCloseButton: document.getElementById("filter-close"),
    showFiltersButton: document.getElementById("show-filters-btn"),
    
    // Upload related elements
    uploadBackdrop: document.getElementById("upload-backdrop"),
    uploadBox: document.getElementById("upload-box"),
    uploadButton: document.getElementById("upload-button"),
    
    // Video form elements
    videoTitle: document.getElementById("video-title"),
    videoUrl: document.getElementById("video-url"),
    videoDescription: document.getElementById("video-description"),
    forKids: document.getElementById("for-kids"),
    postGenre: document.getElementById("post-genre"),
    confirmUploadButton: document.getElementById("confirm-upload-button"),

	filterForm: {
        genre: document.getElementById("genre-select"),
        kidFriendly: document.getElementById("kid-friendly-checkbox"),
        applyButton: document.getElementById("apply-filters-btn")
    }
};

function applyFilters() {
    const search = document.getElementById('search-input').value.trim();
    const genre = elements.filterForm.genre.value.trim();
    const kidFriendly = elements.filterForm.kidFriendly.checked;
    
    let url = '/search?';
    let params = [];
    
    if (search) {
        params.push('query=' + encodeURIComponent(search));
    }
    if (genre) {
        params.push('genre=' + encodeURIComponent(genre));
    }
    if (kidFriendly) {
        params.push('forKids=true');
    }
    
    url += params.join('&');
    window.location.href = url;
}


// Filter Functions
function showFilters() {
    if (elements.filterModal && elements.filterBackdrop) {
        elements.filterModal.classList.remove("filter-hidden");
        elements.filterBackdrop.classList.remove("filter-hidden");
    }
}

function hideFilters() {
    if (elements.filterModal && elements.filterBackdrop) {
        elements.filterModal.classList.add("filter-hidden");
        elements.filterBackdrop.classList.add("filter-hidden");
    }
}

// Upload Functions
function showUpload() {
    if (elements.uploadBackdrop && elements.uploadBox) {
        elements.uploadBackdrop.classList.remove("hide-upload");
        elements.uploadBox.classList.add("show-upload");
    }
}

// Event Listeners
function initializeEventListeners() {
    // Filter event listeners
    if (elements.showFiltersButton) {
        elements.showFiltersButton.addEventListener("click", showFilters);
    }

    if (elements.filterCloseButton) {
        elements.filterCloseButton.addEventListener("click", hideFilters);
    }

    if (elements.filterBackdrop) {
        elements.filterBackdrop.addEventListener("click", hideFilters);
    }

    // Upload event listeners
    if (elements.uploadButton) {
        elements.uploadButton.addEventListener("click", showUpload);
    }

	if (elements.filterForm.applyButton) {
        elements.filterForm.applyButton.addEventListener("click", function(e) {
            e.preventDefault();
            applyFilters();
            hideFilters(); 
        });
    }
}

function handleSearch(e) {
    e.preventDefault();
    applyFilters(); 
}

cancelUploadButton.addEventListener("click", function() {
	videoTitle.value = videoTitle.defaultValue
	videoUrl.value = videoUrl.defaultValue
	videoDes.value = videoDes.defaultValue
	forKids.checked = forKids.defaultChecked
	postGenre.value = postGenre.defaultValue
	uploadBackdrop.classList.add("hide-upload")
	uploadBox.classList.add("hide-upload")
	uploadBox.classList.remove("show-upload")
})

// Debug logging (can be removed in production)
function logDebugInfo() {
    console.log("== Document Elements ==");
    console.log("document:", document);
    console.log("document.body:", document.body);
    
    console.log("\n== Filter Elements ==");
    console.log("filterModal:", elements.filterModal);
    console.log("filterBackdrop:", elements.filterBackdrop);
    console.log("filterCloseButton:", elements.filterCloseButton);
    console.log("showFiltersButton:", elements.showFiltersButton);
    
    console.log("\n== Upload Elements ==");
    console.log("uploadBackdrop:", elements.uploadBackdrop);
    console.log("uploadBox:", elements.uploadBox);
    console.log("uploadButton:", elements.uploadButton);
	console.log("== confirm-upload-button:", confirmUploadButton)
	console.log("== cancel-upload-button:", cancelUploadButton)
    
    console.log("\n== Form Elements ==");
    console.log("videoTitle:", elements.videoTitle);
    console.log("videoUrl:", elements.videoUrl);
    console.log("videoDescription:", elements.videoDescription);
    console.log("forKids:", elements.forKids);
    console.log("postGenre:", elements.postGenre);
    console.log("confirmUploadButton:", elements.confirmUploadButton);

}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    logDebugInfo(); // Remove this in production
});