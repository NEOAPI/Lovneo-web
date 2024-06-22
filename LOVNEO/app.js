$(document).ready(function(){
    // Toggle project info
    $('.project-title').click(function(){
        $(this).next('.project-info').slideToggle();
        $(this).find('.indicator').toggleClass('fa-plus fa-minus');
    });

    // Show platform selection modal on download button click
    $('.downloadBtn').click(function(){
        var targetModal = $(this).data('target'); // Get the target modal ID
        $(targetModal).show(); // Show the modal
    });

    // Close the modal when clicking on the close button
    $('.close').click(function(){
        $(this).closest('.modal').hide();
    });

    // Close the modal when clicking outside of it
    $(window).click(function(event){
        if ($(event.target).hasClass('modal')) {
            $(event.target).hide();
        }
    });

    // Handle platform selection
    $('#androidBtn').click(function(){
        // Add your logic for Android download here
        alert('Downloading Android version...');
        $(this).closest('.modal').hide(); // Hide the modal after selection
    });

    $('#iosBtn').click(function(){
        // Add your logic for iOS download here
        alert('Downloading iOS version...');
        $(this).closest('.modal').hide(); // Hide the modal after selection
    });
});
