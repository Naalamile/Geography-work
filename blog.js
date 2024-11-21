function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    dropdown.classList.toggle('hidden');
}

function selectSort(sortOption) {
    document.getElementById('selected-sort').innerText = sortOption;
    toggleDropdown(); // Hide dropdown after selecting an option
}

// Optional: Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown-menu');
    const trigger = event.target.closest('.flex.items-center');
    if (!trigger && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');
    }
});

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-menu');
    const icon = document.querySelector('.dropdown-icon'); // Icon to indicate open/close state

    dropdown.classList.toggle('hidden');

    // Toggle the dropdown icon
    if (icon) {
        icon.classList.toggle('bx-chevron-down');
        icon.classList.toggle('bx-chevron-up');
    }
}

function selectSort(sortOption) {
    document.getElementById('selected-sort').innerText = sortOption;
    toggleDropdown(); // Hide dropdown after selecting an option
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('dropdown-menu');
    const trigger = event.target.closest('.flex.items-center'); // The button to open the dropdown
    if (!trigger && dropdown && !dropdown.contains(event.target)) {
        dropdown.classList.add('hidden');

        // Reset the icon to closed state if dropdown is hidden
        const icon = document.querySelector('.dropdown-icon');
        if (icon && !dropdown.classList.contains('hidden')) {
            icon.classList.add('bx-chevron-down');
            icon.classList.remove('bx-chevron-up');
        }
    }
});

// Prevent dropdown from closing when clicking inside the dropdown itself
document.querySelectorAll('#dropdown-menu a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the outside click event from triggering
    });
});
