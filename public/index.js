// DOM Elements
const elements = {
    // Filter related elements
    filterModal: document.getElementById("filter-modal"),
    filterBackdrop: document.getElementById("filter-backdrop"),
    filterCloseButton: document.getElementById("filter-close"),
    showFiltersButton: document.getElementById("show-filters-btn"),
    searchInput: document.getElementById("search-input"),
    
    // Upload related elements
    uploadBackdrop: document.getElementById("upload-backdrop"),
    uploadBox: document.getElementById("upload-box"),
    uploadButton: document.getElementById("upload-button"),
    cancelUploadButton: document.getElementById("cancel-upload-button"),
    
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
    const search = elements.searchInput.value.trim();
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
    console.log('Showing filters'); // Debug log
    elements.filterModal.classList.remove("filter-hidden");
    elements.filterBackdrop.classList.remove("filter-hidden");
    elements.filterBackdrop.classList.add("show-filter");
    document.body.style.overflow = 'hidden';
}

function hideFilters() {
    console.log('Hiding filters'); // Debug log
    elements.filterModal.classList.add("filter-hidden");
    elements.filterBackdrop.classList.remove("show-filter");
    elements.filterBackdrop.classList.add("filter-hidden");
    document.body.style.overflow = '';
}

// Upload Functions
function showUpload() {
    console.log('Showing upload'); // Debug log
    elements.uploadBackdrop.classList.remove("hide-upload");
    elements.uploadBackdrop.classList.add("show-upload");
    elements.uploadBox.classList.remove("hide-upload");
    elements.uploadBox.classList.add("show-upload");
    document.body.style.overflow = 'hidden';
}

function hideUpload() {
    console.log('Hiding upload'); // Debug log
    elements.uploadBackdrop.classList.remove("show-upload");
    elements.uploadBackdrop.classList.add("hide-upload");
    elements.uploadBox.classList.add("hide-upload");
    elements.uploadBox.classList.remove("show-upload");
    document.body.style.overflow = '';
    
    // Reset form
    elements.videoTitle.value = elements.videoTitle.defaultValue;
    elements.videoUrl.value = elements.videoUrl.defaultValue;
    elements.videoDescription.value = elements.videoDescription.defaultValue;
    elements.forKids.checked = elements.forKids.defaultChecked;
    elements.postGenre.value = elements.postGenre.defaultValue;
}

function handleSearch(e) {
    e.preventDefault();
    applyFilters();
}

async function uploadVideo() {
    // Get values from form
    const title = elements.videoTitle.value.trim();
    const url = elements.videoUrl.value.trim();
    const description = elements.videoDescription.value.trim();
    const forKids = elements.forKids.checked;
    const genre = elements.postGenre.value;

    // Basic validation
    if (!title || !url || !description) {
        alert('Please fill out all required fields');
        return;
    }

    // Prepare video data
    const videoData = {
        title,
        url,
        description,
        forKids: forKids.toString(),
        genre,
        thumbnail: "/images/default-thumbnail.jpg" // Using default thumbnail
    };

    try {
        const response = await fetch('/api/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(videoData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Upload successful:', result);
        
        // Clear form and hide upload box
        hideUpload();
        
        // Refresh the page to show new video
        window.location.reload();
    } catch (error) {
        console.error('Error uploading video:', error);
        alert('Failed to upload video. Please try again.');
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Debug log to verify initialization
    console.log('DOM Content Loaded');
    console.log('Filter button:', elements.showFiltersButton);
    console.log('Upload button:', elements.uploadButton);

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
    if (elements.cancelUploadButton) {
        elements.cancelUploadButton.addEventListener("click", hideUpload);
    }
	if (elements.confirmUploadButton) {
        elements.confirmUploadButton.addEventListener("click", uploadVideo);
    }

    // Filter form event listeners
    if (elements.filterForm.applyButton) {
        elements.filterForm.applyButton.addEventListener("click", function(e) {
            e.preventDefault();
            applyFilters();
            hideFilters();
        });
    }

    // Remove the standalone event listener that was causing conflicts
    if (elements.cancelUploadButton) {
        elements.cancelUploadButton.removeEventListener("click", function() {
            videoTitle.value = videoTitle.defaultValue;
            videoUrl.value = videoUrl.defaultValue;
            videoDes.value = videoDes.defaultValue;
            forKids.checked = forKids.defaultChecked;
            postGenre.value = postGenre.defaultValue;
            uploadBackdrop.classList.add("hide-upload");
            uploadBox.classList.add("hide-upload");
            uploadBox.classList.remove("show-upload");
        });
    }
});