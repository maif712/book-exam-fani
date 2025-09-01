document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Delete Modal Logic
    const deleteModal = document.getElementById('deleteModal');
    const deleteButtons = document.querySelectorAll('.btn-delete');
    const cancelDelete = document.getElementById('cancelDelete');
    const confirmDelete = document.getElementById('confirmDelete');
    const bookTitleToDelete = document.getElementById('bookTitleToDelete');

    if (deleteModal) {
        deleteButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Find the table row and get the book title
                const row = e.target.closest('tr');
                const title = row.querySelector('td[data-label="Title"]').textContent;

                bookTitleToDelete.textContent = title;
                deleteModal.style.display = 'block';
            });
        });

        if (cancelDelete) {
            cancelDelete.addEventListener('click', () => {
                deleteModal.style.display = 'none';
            });
        }

        if (confirmDelete) {
            confirmDelete.addEventListener('click', () => {
                // In a real app, you would perform the delete action here.
                // For this static example, we'll just close the modal.
                console.log(`Deleting book: ${bookTitleToDelete.textContent}`);
                deleteModal.style.display = 'none';
                // Optionally, remove the row from the table to simulate deletion
                // This part is more complex with static HTML, so we will omit for now.
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === deleteModal) {
                deleteModal.style.display = 'none';
            }
        });
    }
});
