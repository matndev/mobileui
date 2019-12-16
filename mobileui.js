
$("nav.mui-switch-menu > a").click(function(){
    $(".tab-content").slideDown("slow");
});

$(document).ready(function(){
    $('#roomlist a').click(function(){
        $('#roomlist li').removeClass('active');
        $(this).closest('li').addClass('active');
    });
});

$(document).ready(function(){
    $('#notifications button').click(function(){
        $(this).closest('li').slideUp("fast", "linear", function() { $(this).remove(); });
    });
});

// SUB MENU UNDER ROOM ITEMS
var toolbar =   '<li class="list-group-item d-flex flex-row mui-toolbar-menu">'+
                '<button class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35L4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z"/></svg></button>'+
                '<button class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg></button>'+
                '</li>';
$(document).ready(function(){
    $(".mui-manage-room").click(function(){
        if ( $(this).closest(".mui-pre-submenu").next().hasClass('mui-toolbar-menu') ) {
            $( ".mui-toolbar-menu" ).remove();
        }
        else {
            $( ".mui-toolbar-menu" ).remove();
            $( toolbar ).insertAfter( $(this).closest(".mui-pre-submenu") );
        }
    });
});
