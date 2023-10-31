var is_HUD = true;
var browseChannel = true;
if(!is_HUD) {
    $("body").addClass('l-hide-sidebar');
} else {
    $("body").removeClass('l-hide-sidebar');
}

function toggleMicroPhone(event) {
    event.classList.toggle("fa-microphone-slash");
    am.callControls.closeVideoTrack();
}
function toggleCamera(event) {
    event.classList.toggle("fa-video-slash");
}
async function showContent(event) {
    let element = document.getElementById('show-' + event.id);
    let childrens = element.parentElement.children;
    let clickedOtherMenuItem = true;

    for (let i = 0; i < childrens.length; i++) {
        if (childrens.item(i).classList.contains('d-block') && childrens.item(i).id !== 'show-' + event.id) {
            childrens.item(i).classList.toggle("d-block");
            clickedOtherMenuItem = false;
        }
    }
    if (clickedOtherMenuItem === true) {
        element.parentElement.classList.toggle("active");
    }
    element.classList.toggle("d-block");

    var ul = document.getElementById("channelsListUl");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("General"));
    ul.appendChild(li);

    if(element.id == 'show-settings') {
        $("#settings-audio-content").addClass('d-block');
        settingsTutorial();
    }

}
function showSettingsContent(event) {
    let element = document.getElementById('settings-' + event.id + '-content');
    let childrens = document.getElementById('settings-sub-menu-content').children;
    for (let i = 0; i < childrens.length; i++) {
        if (childrens.item(i).classList.contains('d-block') && childrens.item(i).id !== 'settings-' + event.id + '-content') {
            childrens.item(i).classList.toggle("d-block");
            if (element !== null && element !== undefined) {
                element.classList.toggle("d-block");
            }
        }
    }
}
function showNotificationContent(event) {
    let element = document.getElementById('notifications-' + event.id + '-content');
    let childrens = document.getElementById('notifications-sub-menu-content').children;
    for (let i = 0; i < childrens.length; i++) {
        if (childrens.item(i).classList.contains('d-block') && childrens.item(i).id !== 'notifications-' + event.id + '-content') {
            childrens.item(i).classList.toggle("d-block");
            element.classList.toggle("d-block");
        }
    }
}
function showTutorialsContent(event) {
    let element = document.getElementById('tutorials-' + event.id + '-content');
    let childrens = document.getElementById('tutorials-sub-menu-content').children;
    for (let i = 0; i < childrens.length; i++) {
        if (childrens.item(i).classList.contains('d-block') && childrens.item(i).id !== 'tutorials-' + event.id + '-content') {
            childrens.item(i).classList.toggle("d-block");
            element.classList.toggle("d-block");
        }
    }
}
function showChannelsContent(event) {
    let element = document.getElementById('channels-' + event.id + '-content');
    let childrens = document.getElementById('channels-sub-menu-content').children;
    let showChannel = true;
    for (let i = 0; i < childrens.length; i++) {
        if (childrens.item(i).classList.contains('d-block') && childrens.item(i).id !== 'channels-' + event.id + '-content') {
            childrens.item(i).classList.toggle("d-block");
            element.classList.toggle("d-block");
            showChannel = false;
        }
    }
    if (showChannel === true) {
        element.classList.toggle("d-block");
    }
    $("#channels-general-content").addClass('d-none');
    if(event.id == 'multi-user') {
        tour.hide();
        setTimeout(function(){ 
            enableCarousel();
        }, 100);
        setTimeout(function(){ 
            elementTour("tour-showConversation", ".tour-showConversation", "Anytime during a call, you can click on Conversations to chat with the other members of the call. One thing to keep in mind is that private conversations held in a private chat won't be migrated to a group one.", "tour-showConversation", 'top');
        }, 1000);
    }
    
}

function showBrowseChannelsContent(event) {
    let element = document.getElementById('channels-' + event.id + '-content');
    let childrens = document.getElementById('channels-sub-menu-content').children;
    let showChannel = true;
    for (let i = 0; i < childrens.length; i++) {
        if (childrens.item(i).classList.contains('d-block') && childrens.item(i).id !== 'channels-' + event.id + '-content') {
            childrens.item(i).classList.toggle("d-block");
            childrens.item(i).classList.add("d-none");
            element.classList.toggle("d-block");
            showChannel = false;
        }
    }
    if (showChannel === true) {
        element.classList.toggle("d-block");
    }
    closepopOver();
}

function closepopOver() {
    $('.new-group-channel').popover('hide');
}

function showHidePrivateAudioCall(name) {
    tour.hide();
    $("#modalCallRequest").modal('show');
    setTimeout(function(){ 
        elementTour("ShowcallrequestPopup", ".call-accept-tour", "This is the invite that the other user will receive from you. Even if he/she is in another call, he/she has the option of accepting your call and closing their current one.", "call-accept-tour-class", 'top');
    }, 500);
}

function showHidePrivateVideoCall(name, carousel = 0) {
    // trigger multi user video call carousel trigger
    if(carousel) {
        enableCarousel();
    }
    let videoContent = document.getElementById('private-video-content-' + name);
    let CallContent = document.getElementById('private-call-content-' + name);
    CallContent.classList.toggle("d-block");
    videoContent.classList.toggle("d-block");
}


function showMessagesAndAudioCall(event, name) {
    if (event === undefined) {
        document.getElementById('close-chat-content-' + name)
            .lastElementChild.textContent = 'Conversations';
    } else {
        if (event.lastElementChild.textContent === 'Conversations') {
            event.lastElementChild.textContent = 'Close Conversations';
        } else {
            event.lastElementChild.textContent = 'Conversations';
        }
    }
    let element = document.getElementById('channels-' + name + '-content');
    let audioCallContent = document.getElementById('private-chat-content-' + name);
    element.classList.toggle("ea-2-column");
    audioCallContent.classList.toggle("d-block");
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-backToexperiences", ".tour-backToexperiences", "Let's go back to the Enteragora experience.", "tour-backToexperiences", 'top');
    }, 500);
}

function showChannels(event) {
    event.children.item(0).classList.toggle("fa-caret-right");
}

function hideCookieModal() {
    $("#modalCookies").modal('hide');
    setTimeout(function(){ window.location.reload(); }, 500);
}

function enableCarousel() {
    $('.user__carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
    });
}
function addMemberToList(name) {
    let element = document.getElementById("searchbar-search-members");
    if (element.value.length > 0) {
        element.value += ','+name.getAttribute("data-key");
    } else {
        element.value += name.getAttribute("data-key");
    }
    tour.hide();
    elementTour("ChatMembersBtn", ".tour-addMembers", "Start a chat with him!", "chat-button-tour", 'right');
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

async function joinChannel(event, name) {
    tour.hide();
    event.textContent = "Joining";
    //await rtm.joinChannel(name);
    //await am.updateMembers("eu-west-2", "staging", name, 'join');
    event.outerHTML = "<button class='goto-event' onclick=leaveChannel(this,'"+name+"')>Leave</button>";
    let channelsUI = document.getElementById("channels-sub-menu-content");
    let isNotExist = true;
    channelsUI.childNodes.forEach(element => {
        if (element.nodeName.toLowerCase() === 'div' && element.id === "channels-"+name+"-content") {
            isNotExist = false;
        }
    });
    if (isNotExist) {
        channelsUI.innerHTML += getChannelContent(name);
        triggerContentMenu();
    }
    let channelsListUI = document.getElementById("channelsListUl");
    let menuIsNotExist = true;
    channelsListUI.childNodes.forEach(element => {
        if (element.nodeName.toLowerCase() === 'li' && element.id === name) {
            menuIsNotExist = false;
        }
    });
    if (menuIsNotExist) {
        channelsListUI.innerHTML += "<li class='sub-menu-link' id='"+name+"' onclick='showChannelsContent(this)'>"+name+"</li>";
    }
    $('#channels').collapse('toggle');
    $("#agora-plans").trigger('click');
    setTimeout(function(){ 
        elementTour("tour-channel-history", ".tour-channel-history", "You can see the full message history of a channel after you've joined. <button onclick='channelHistoryClick();' class='btn-shepherd'>Ok</button>", "tour-channel-history", 'bottom');
    }, 500); 

    $(".tour-channel-leave-btn").on('click', function(){
        tour.hide();
        $("#channels-agora-plans-content").removeClass('d-block');
        elementTour("tour-direct-channel", ".tour-direct-channel", "Let's create a new channel", "tour-direct-channel", 'top');
    });
}

function getChannelContent(channelName) {
    return "<div class='col-md-12 d-none no-padding' id=channels-"+channelName+"-content>" +
        "<div class='row h-100vh p-3 ea-bg-white'> " +
        "<div class='col-md-12 no-padding h-15'>" +
        "<div class='channel-header pt-3'>" +
        "<div class='d-flex justify-content-between align-items-center'> " +
        "<div class='d-flex align-items-end'> " +
        "<div class=channel-name> " +
        "<div class=dropdown> " +
        "<button class='btn dropdown-toggle channel-dropdown' type=button id=dropdownMenuButton data-toggle=dropdown aria-haspopup=true aria-expanded=false> " +
        "<i class='fa fa-lock-open zero-zoom' aria-hidden=true></i> <span class='channel_name'>"+channelName+"</span> " +
        "</button> " +
        "<div class='dropdown-menu bg-grey' aria-labelledby=dropdownMenuButton> " +
        "<div class=form-group> " +
        "<input id=searchbar-group-"+channelName+" data-key=group-"+channelName+" type=text class='searchbar form-control p-0' placeholder='Search for members...'> " +
        "</div> " +
        "<button type='button' class='btn btn-primary btn-D83643 mb-3 tour-channel-leave-btn'>Leave Channel</button> " +
        "<a class=dropdown-item href=#>In call:</a> " +
        "<div class=dropdown-divider></div> " +
        "<a class=dropdown-item href=#>Will Hambling</a> " +
        "<a class=dropdown-item href=#>Mihai Perdum</a> " +
        "<div class=dropdown-divider></div> " +
        "<a class=dropdown-item href=#>Members:</a> " +
        "<div class=all-members-group-"+channelName+" id="+channelName+"-all-members></div> " +
        "</div> " +
        "</div> </div> " +
        "</div> " +
        "<div class='ml-3 mr-auto fs-14 color-A9A9A9 tour-channel-members-count'><span class="+channelName+"-member-count id="+channelName+"-member-count>4</span> Members " +
        "</div> " +
        "<div class='useractions user-message-panel'> " +
        "<ul class=message-box-full-action> " +
        "<li class=pr-3><a href=><i class='fa fa-phone txf-225'></i></a></li> " +
        "<li><a class=backToHome href=javascript:void(0);>Back to experience</a></li> " +
        "</ul> " +
        "<ul class=message-box-half-action> " +
        "<li><a href=javascript:void(0);><i class='fa fa-times' aria-hidden=true></i></a> </li> " +
        "</ul> " +
        "</div> " +
        "</div> " +
        "</div> " +
        "<hr class=mt-2/>" +
        "</div> " +
        "<div class='col-md-12 no-padding h-70 overflow-auto' id=message-container> " +
        "<div class=channel-content> " +
        "<div class=ea-user-messages-list id="+channelName+"-ea-user-messages-list> " +

        "<div class='d-flex flex-row ea-message-row'>" +
        "<div class='message-details border-right pr-3'>" +
        "<span><b class='ea-user-name'>Mitul Rajani </b></span>" +
        "<span class='ea-msg-time ml-2'>4:22 PM</span>" +
        "</div>" +
        "<div class='message-body px-3'>" +
        "<p class='m-0'>Hello Will! Seems like our meeting has moved up!</p>" +
        "</div>" +
        "</div>" +

        "<div class='d-flex flex-row ea-message-row'>" +
        "<div class='message-details border-right pr-3'>" +
        "<span><b class='ea-user-name'>William Hambling </b></span>" +
        "<span class='ea-msg-time ml-2'>4:23 PM</span>" +
        "</div>" +
        "<div class='message-body px-3'>" +
        "<p class='m-0'>Yep! We're waiting for our newest Enteragora member. He should be here sure.</p>" +
        "</div>" +
        "</div>" +

        "<div class='d-flex flex-row ea-message-row tour-channel-history'>" +
        "<div class='message-details border-right pr-3'>" +
        "<span><b class='ea-user-name'>Ruxandra Radulescu</b></span>" +
        "<span class='ea-msg-time ml-2'>4:23 PM</span>" +
        "</div>" +
        "<div class='message-body px-3'>" +
        "<p class='m-0'>Can hardly wait to meet him.</p>" +
        "</div>" +
        "</div>" +

        "</div> " +
        "</div> " +
        "</div> " +
        "<div class='row no-padding channel-footer h-15 w-100'> " +
        "<div class='col-md-12 border-top px-0'> " +
        "<textarea placeholder='Type message here ...' data-channel="+channelName+" class='ea-message-compose h-100'" +
        " id="+channelName+"-message-box></textarea> " +
        "<button class='zero-zoom ea-message-area' id=send-channel-message onClick=sendMessage('"+channelName+"')> " +
        "<img src=images/send.png alt=Send/> " +
        "</button> " +
        "</div> " +
        "</div> " +
        "</div> " +
        "</div>";
}

function newChannelContent(channelName) {
    return "<div class='col-md-12 d-none no-padding' id=channels-"+channelName+"-content>" +
        "<div class='row h-100vh p-3 ea-bg-white'> " +
        "<div class='col-md-12 no-padding h-15'>" +
        "<div class='channel-header pt-3'>" +
        "<div class='d-flex justify-content-between align-items-center'> " +
        "<div class='d-flex align-items-end'> " +
        "<div class=channel-name> " +
        "<div class=dropdown> " +
        "<button class='btn dropdown-toggle tour-private-channel-menu' type=button id=dropdownMenuButton data-toggle=dropdown aria-haspopup=true aria-expanded=false> " +
        "<i class='fa fa-lock-open zero-zoom' aria-hidden=true></i> <span class='channel_name'>"+channelName+"</span> " +
        "</button> " +
        "<div class='dropdown-menu bg-grey' aria-labelledby=dropdownMenuButton> " +
        "<div class=form-group> " +
        "<input id=searchbar-group-"+channelName+" data-key=group-"+channelName+" type=text class='searchbar form-control p-0' placeholder='Search for members...'> " +
        "</div> " +
        "<button type='button' class='btn btn-primary btn-D83643 mb-3 tour-channel-leave-btn'>Leave Channel</button> " +
        "<a class=dropdown-item href=#>In call:</a> " +
        "<div class=dropdown-divider></div> " +
        "<a class=dropdown-item href=#>Members:</a> " +
        "<div class=all-members-group-"+channelName+" id="+channelName+"-all-members>" +

        "<div class='dropdown-item d-flex align-items-center justify-content-between'>" +
        "<span>William Hambling</span>" +
        "<span><i class='fa fa-user-plus zero-zoom' aria-hidden=true></i></span>" +
        "</div>" +
        "<div class='dropdown-item d-flex align-items-center justify-content-between'>" +
        "<span>Mitul Rajani</span>" +
        "<span class='tour-addMemberTochennal'><i class='fa fa-user-plus zero-zoom' aria-hidden=true></i></span>" +
        "</div>" +
        "<button type='button' class='btn btn-primary btn-07F26D mb-3 tour-channel-addgroup-btn'>Add to group</button> " +
        
        "</div> " +
        "</div> " +
        "</div> </div> " +
        "</div> " +
        "<div class='ml-3 mr-auto fs-14 color-A9A9A9 new-privatechannel'><span class="+channelName+"-member-count id="+channelName+"-member-count>1</span> Members " +
        "</div> " +
        "<div class='useractions user-message-panel'> " +
        "<ul class=message-box-full-action> " +
        "<li class=pr-3><a href='javacript:void(0);' class='tour-private-channel-call'><i class='fa fa-phone txf-365'></i></a></li> " +
        "<li><a class=backToHome href=javascript:void(0);>Back to experience</a></li> " +
        "</ul> " +
        "<ul class=message-box-half-action> " +
        "<li><a href=javascript:void(0);><i class='fa fa-times' aria-hidden=true></i></a> </li> " +
        "</ul> " +
        "</div> " +
        "</div> " +
        "</div> " +
        "<hr class=mt-2/>" +
        "</div> " +
        "<div class='col-md-12 no-padding h-70 overflow-auto' id=message-container> " +
        "<div class=channel-content> " +
        "<div class=ea-user-messages-list id="+channelName+"-ea-user-messages-list> " +
        "</div> " +
        "</div> " +
        "</div> " +
        "<div class='row no-padding channel-footer h-15 w-100'> " +
        "<div class='col-md-12 border-top px-0'> " +
        "<textarea placeholder='Type message here ...' data-channel="+channelName+" class='ea-message-compose h-100'" +
        " id="+channelName+"-message-box></textarea> " +
        "<button class='zero-zoom ea-message-area' id=send-channel-message onClick=sendMessage('"+channelName+"')> " +
        "<img src=images/send.png alt=Send/> " +
        "</button> " +
        "</div> " +
        "</div> " +
        "</div> " +
        "</div>";
}

function sentMessage() {
    var inputVal = $("#sentMessage").val(); 
    $('#sentMessage').val('');
            $("#appendMessage").append(`
                <div class="d-flex flex-row ea-message-row">
                    <div class="message-details border-right pr-3">
                        <span><b class="ea-user-name">You</b></span> <span
                            class="ea-msg-time">${formatAMPM(new Date)}</span>
                    </div>
                    <div class="message-body px-3">
                        <p class="m-0">${inputVal}</p>
                    </div>
                </div>
            `);
            setTimeout(function(){ 
                $('#sentMessage').val('');
                tour.hide();
                elementTour("privateUser", ".privateUser-tour", "Congratulations! You have sent your first private message to another participant.", "privateUser-tour-class", 'right');
                $("#william-hambling").removeAttr('onclick');
            }, 1000); 
            $(".ea-message-area").removeClass('active');
            $(".ea-message-area img").attr('src', '../images/send.png');
}

function triggerContentMenu() {
    $(".tour-channel-members-count").on('click', function(){
        tour.hide();
        setTimeout(function(){ 
        $(".channel-dropdown").trigger('click');
            setTimeout(function(){ 
                elementTour("tour-channel-leave-btn-id", ".tour-channel-leave-btn", "You can review in this screen who the owner of the chennal is, who is in the channel's call, members and who is available to add. For now let's leave this channel.", "tour-channel-leave-btn-class", 'bottom');
            }, 500); 
        }, 500); 
    });
}

// Modal Trigger
$(document).ready(function() {

    $(document).on("keypress", "#sentMessage", function(e){
        if(e.which == 13){
            sentMessage();
        }
    });
    
    $('[data-toggle="tooltip"]').tooltip();

    $('#settings-video-content .fa-question-circle').tooltip({
        container : '#settings-video-content'
    });

    $('#settings-privacy-content .privacy-tooltip').tooltip({
        container : '#settings-privacy-content'
    });

    // Popover trigger
    //$('[data-toggle="popover"]').popover();
    $('.recent-message').popover({
        container: '.recent-message',
        html: true,
        trigger: 'hover'
    }) 

    $('.new-group-channel').popover({
        html: true,
        placement: 'right',
        container: '#show-conversations',
        content: '<ul><li id="browse-channel" class="trigger-browseChannel" onclick="getChannels()">Browse channel</li><li class="trigger-createChannel">Create channel</li></ul>',
        template: '<div class="popover popover-create-channel" role="tooltip"><div class="popover-body"></div></div>',
    });

    $('.new-group-channel').on('shown.bs.popover', function () {
        // Browse channel 
        tour.hide();
        $(document).on("click", "#browse-channel", function () {
            tour.hide();
            showBrowseChannelsContent(this);
            setTimeout(function(){
                elementTour("tour-join-channel", ".tour-join-channel", "#agora-plans seems like an interesting place to be in. Let's join this one.", "tour-join-channel", 'right');
            }, 500);
        });
        if(browseChannel) {
            elementTour("trigger-browseChannel", ".trigger-browseChannel", "Let first see what channels are available.", "trigger-browseChannel", 'right');
            browseChannel = false;
        } else {
            elementTour("trigger-createChannel", ".trigger-createChannel", "Click on a create a new channel to open the create new chennel menu.", "trigger-createChannel", 'right');
        }
    });

    $('body').on('click', '.trigger-createChannel', function() {
        tour.hide();
        $("#modalCreateChannel").modal('show');
        closepopOver();
        setTimeout(function(){ 
            elementTour("tour-make-channel-private-id", ".tour-make-channel-private", "Let's make our chennel private so that only members that you invite are part of it. <button class='btn-shepherd' onclick='privateChannelClick();'>Ok</button>", "tour-make-channel-private-class", 'top');
        }, 1000);
        
    });
    $('body').on('click', '.trigger-addMembers', function() {
        $("#modalAddMembers").modal('show');
    });
    $('body').on('click', '.trigger-add-people', function(){
        $("#modalAddParticipant").modal('show');
    });

    // back to experience
    $(".backToHome").on('click', function(){
        $("#show-conversations, #show-tutorials, #show-notifications, #show-settings").removeClass('d-block');
        $("#playerUI > .headers_content").removeClass('active');
    });

    // Menu item active
    $("#ea-nav-bar .dropdown i").on('click', function(){
        $("#ea-nav-bar .dropdown i").removeClass('active');
        $(this).addClass('active');
    });

    // direct message channel
    $(".direct-message-channel").on('click', function(){
        $("#modalAddMembers").modal({
            "show": true,
            "keyboard": false,
            "backdrop": false,
            "focus": true,
            "backdrop": 'static'
        });
    });

    // Skip tutorial event
    $(".skip-tutorial").click(function(){
        $("#modalSkipTutorial").modal('show');
    });

    // Add an extra class to the modal backdrop to make it customizable
    $('#modalSkipTutorial').on('show.bs.modal', function (e) {
        setTimeout(function(){
            $('.modal-backdrop').addClass('modal-backdrop--skip-tutorial');
        });
    }); 
    $('#modalSkipTutorial').on('hide.bs.modal', function (e) {
        setTimeout(function(){
            $('.modal-backdrop').removeClass('modal-backdrop--skip-tutorial');
        });
    }); 

    // Close Tutorial
    $(".event-close-tutorial").click(function(){
        $("#modalTourStart").modal('hide');
    });

    // Skip tutorial event
    $(".skip-tutorial").click(function(){
        $("#modalSkipTutorial").modal('show');
    });

    // Add an extra class to the modal backdrop to make it customizable
    $('#modalSkipTutorial').on('show.bs.modal', function (e) {
        setTimeout(function(){
            $('.modal-backdrop').addClass('modal-backdrop--skip-tutorial');
        });
    }); 
    $('#modalSkipTutorial').on('hide.bs.modal', function (e) {
        setTimeout(function(){
            $('.modal-backdrop').removeClass('modal-backdrop--skip-tutorial');
        });
    }); 

    // Close Tutorial
    $(".event-close-tutorial").click(function(){
        $("#modalTourStart").modal('hide');
    });

    // Add an extra class to the modal backdrop to make it customizable
    $('#modalSkipTutorial').on('show.bs.modal', function (e) {
        setTimeout(function(){
            $('.modal-backdrop').addClass('modal-backdrop--skip-tutorial');
        });
    }); 
    $('#modalSkipTutorial').on('hide.bs.modal', function (e) {
        setTimeout(function(){
            $('.modal-backdrop').removeClass('modal-backdrop--skip-tutorial');
        });
    });

    $(".event-close-tutorial").click(function() {
        $("#modalSkipTutorial").modal('hide');
        tourEnd();
    });
    $(".event-Tourskip-no").click(function() {
        $("#modalSkipTutorial").modal('hide');
        tourStart();
    });

});


// Tutorial Configurations
var tour;
function elementTour(id, element, text, classname, position) {
    tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
          cancelIcon: {
            enabled: true,
            label: 'Skip'
          },
          classes: 'ea-tour '+classname+'',
          scrollTo: { behavior: 'smooth', block: 'center' }
        }
      });

    // TODO Uncomment
    ['close', 'cancel'].forEach(event => Shepherd.on(event, () => {
        $("#modalSkipTutorial").modal('show');
    }));
      
      tour.addStep({
        text: text,
        attachTo: {
          element: element,
          on: position
        },
        id: id
      });
      
      tour.start();
}

function acceptEnergyMeter() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tourMicrophone", ".tour-microphone", "When ever you are speaking into your microphone this icon will show up. this way you'll know for sure that the other guests  can hear you. You can also mute your microphone on the fly <button class='btn-shepherd' onclick='shareVideo();'>Ok</button>", "tourMicrophone-tour", 'right');
    }, 500);    
}

function channelHistoryClick() {
    tour.hide();
    elementTour("tour-channel-members-count-id", ".tour-channel-members-count", "You can check who is part of a channel by clicking here.", "tour-channel-members-count-class", 'bottom');
}

// function membersCountClick() {
    
// }

function shareVideo() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-video-call", ".tour-video-call", "You can always sahre your camera during a private group or group audio call", "share-video-tour", 'top');
    }, 1000); 
}
function tourVideocallUserClick() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-videocall-sender", ".tour-videocall-sender", "The feed from your camera will always up top as a thumbnail. Even when you speak, your feed will not be positioned in the center. <button onclick='tourVideocallthumbClick();' class='btn-shepherd'>Ok</button>", "tour-videocall-sender", 'bottom');
    }, 1000); 
}

function tourVideocallthumbClick() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-camera", ".tour-camera", "You can turn off your camera on the fly while in the menus or while enjoying Enteragora's stunning experience. <button onclick='tourcameraClick();' class='btn-shepherd'>Ok</button>", "tour-camera", 'right');
    }, 1000); 
}

function tourcameraClick() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("swithc-audio", ".tour-switch-audio", "You can choose to switch back to audio only any time. You will no longer be able to see the other video feeds as well as your own.<button onclick='switchAudioClick();' class='btn-shepherd'>Ok</button>", "tour-switch-audio", 'top');
    }, 1000);
}
function switchAudioClick() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-add-people", ".tour-add-people", "Any member of a private conversation can choose to add new participants to an ongoing call.", "tour-add-people", 'top');
    }, 1000); 
}
function tourlandingcallboxClick() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-quality-meter", ".tour-quality-meter", "Now that we're here let's able to talk about the experience quality meter. <button onclick='qualitymeterboxClick();' class='btn-shepherd'>Ok</button>", "tour-quality-meter", 'left');
    }, 1000); 
}
function qualitymeterboxClick() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-quality-meter-one", ".tour-quality-meter-one", "<strong>Green</strong> means that your connection is really good and you should have a fgreat experience. <br /> <strong>Yellow</strong> means that your connection is a bit spotty and you may experience a bit of stuttering or loss of visual quality. <br /> <strong>Red</strong> means that your network is experiencing some difficulties and you may need to check up on your router. The experience in this is going to be a rough. <button onclick='qualitymeterboxOneClick();' class='btn-shepherd'>Ok</button>", "tour-quality-meter-one", 'left');
    }, 1000); 
}
function qualitymeterboxOneClick() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-returnTo-call", ".tour-returnTo-call", "You can return to the call window anytime by hovering over who is speaking and then clicking on the Return button.", "tour-returnTo-call", 'left');
    }, 1000); 
}
function privateChannelClick() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-channel-textbox-id", ".tour-channel-textbox", "Give a name to the chennal and hit the send button. Whitespces are not permitted as well as any other special characters, aside from hypen.", "tour-channel-textbox-class", 'top');
    }, 1000); 
}
// function addMemberToPrivatChennel() {
    
// }

function triggerNotification() {
    tour.hide();
    $('.menu-notification').popover({
        container: '.menu-notification',
        html: true,
        placement: 'right',
        trigger: 'click',
        template: '<div class="popover tour-popover-notification" role="tooltip"><div class="popover-body"></div></div>',
    });
    $(".menu-notification").trigger('click');
    setTimeout(function(){ 
        elementTour("tour-popover-notification-id", ".tour-popover-notification", "Seems like you got a remainder> Let's verify what Enteragora's daily agenda has in store for you. Click on the notification bubble to continue.", "tour-popover-notification-class", 'right');
    }, 1000); 

    $(".tour-popover-notification").on('click', function(){
        tour.hide();
        $(".tour-popover-notification").popover('hide');
        $("#notifications").trigger('click');
        elementTour("tour-event-agenda-id", ".tour-event-agenda", "Seems like an event is already taking place, Not to worry, that if this would be a real world event, you would get a prompt that would lead you to its auditorum.<button onclick='triggerUpcomingEvent();' class='btn-shepherd'>Ok</button>", "tour-event-agenda-class", 'bottom');
        
    });
}

function triggerUpcomingEvent() {
    tour.hide();
    elementTour("tour-upcoming-event-id", ".tour-upcoming-event", "You can also review your upcoming events. The current dates are only examples that will be localized according to the region you are accessing Enteragora from. <button onclick='showSettingsMenu();' class='btn-shepherd'>Ok</button>", "tour-upcoming-event-class", 'top');
}

function showSettingsMenu() {
    tour.hide();
    elementTour("tour-settings-id", ".tour-settings", "Before we close off the tutorial, let's go over Enteragora's settings.", "tour-settings-class", 'right');
}

function createChannel() {
    tour.hide();
    let channelName = document.getElementById("create-new-custom-channel");
    if (channelName.value.length > 0) { 
        $('#modalCreateChannel').modal('hide');
        let channelsUI = document.getElementById("channels-sub-menu-content");
        channelsUI.innerHTML += newChannelContent(channelName.value);
        let channelsListUI = document.getElementById("channelsListUl");
        channelsListUI.innerHTML += "<li class='sub-menu-link' id='"+channelName.value+"' onclick='showChannelsContent(this)'>"+channelName.value+"</li>";
        $('#channels').collapse('toggle');
        $("#"+channelName.value+"").trigger('click');
        setTimeout(function(){ 
            elementTour("tour-new-privatechannel", ".new-privatechannel", "Let's add a member to our newly created private channel", "new-privatechannel-class", 'bottom');
        }, 500); 
    }
    $(".new-privatechannel").click(function(){
        tour.hide();
        setTimeout(function(){ 
            $(".tour-private-channel-menu").trigger('click');
            elementTour("tour-addMemberTochennal-class", ".tour-addMemberTochennal", "let's add Mitul Rajani to your chennal", "tour-addMemberTochennal-class", 'bottom');

            $(".tour-addMemberTochennal").on('click', function(){
                tour.hide();
                setTimeout(function() { 
                    $(".tour-private-channel-menu").trigger('click');
                    elementTour("tour-channel-addgroup-btn-id", ".tour-channel-addgroup-btn", "Click on add to group. Upon doing so, Mitul Rajani is going to receive an invite. If he accept, he will join your channel.", "tour-channel-addgroup-btn-class", 'bottom');
                }, 1000);
            });

            $(".tour-channel-addgroup-btn").on('click', function(){
                tour.hide();
                setTimeout(function() { 
                    elementTour("tour-private-channel-call-id", ".tour-private-channel-call", "Congratulations! You have added a new member to your channel. Now let's join the chennel's call. Keep in mind that compared to direct or group calls, you are not calling the other members but rather you are joining the ongoing call. The other members can also freely join by clicking the same button. <button onclick='triggerNotification();' class='btn-shepherd'>Ok</button>", "tour-private-channel-call-class", 'bottom');
                }, 1000);
            });

        }, 500);
    });
}

function settingsTutorial() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-settings-speakers-zone-id", ".tour-settings-speakers-zone", "If you ever notice that you have issues hearing or being heard, make sure to review your Microphone and Speakers. If you have multiple device connected, you can switch to your currently used one.<button onclick='showVideoSettings();' class='btn-shepherd'>Ok</button>", "tour-settings-speakers-zone-class", 'bottom');
    }, 1000); 
}

function showVideoSettings() {
    tour.hide();
    $("#video").trigger('click');
    setTimeout(function(){ 
        elementTour("tour-settings-camera-zone-id", ".tour-settings-camera-zone", "From the Video menu, you can check your hardware camera and choose the one you are currently using in case you have multiple device connected.<button onclick='pointPerformace();' class='btn-shepherd'>Ok</button>", "tour-settings-camera-zone-class", 'bottom');
    }, 500); 
}

function pointPerformace() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-settings-performance-zone-id", ".tour-settings-performance-zone", "Reducing both Image and Quality and performance will help if you have some internet issues. You can save substantial bandwidth if you decrease the Performance rating to a lower setting. <button onclick='triggerPrivacy();' class='btn-shepherd'>Ok</button>", "tour-settings-performance-zone-class", 'bottom');
    }, 500); 
}

function triggerPrivacy() {
    tour.hide();
    $("#privacy").trigger('click');
    setTimeout(function(){ 
        elementTour("tour-settings-privacy-zone-id", ".tour-settings-privacy-zone", "When you joined Enteragora for the first time, a cookie pop-up appeared. You can modify your choices by going to the Privacy menu. <button onclick='pointCallerbox();' class='btn-shepherd'>Ok</button>", "tour-settings-privacy-zone-class", 'bottom');
    }, 500); 
}

function pointCallerbox() {
    tour.hide();
    setTimeout(function(){ 
        elementTour("tour-caller-box-id", ".tour-caller-box", "To retun from anywhere in the Enteragora menus to an ongoing call, click on who is currently speaking. This is useful if you have multiple channels or direct discussions ongoing and you want to quickly go back to your call.", "tour-caller-box-class", 'bottom');
    }, 500);
}

function tourEnd() {
    document.getElementById("ea_tour_container").remove();
    document.getElementById("parent").classList.toggle('d-none');
    document.getElementsByClassName("shepherd-modal-is-visible")[0].remove();
    document.getElementsByClassName("tour-tutorials-class")[0].classList.toggle("d-none");
    $('#parent').load('player.html');
    localStorage.setItem("tour_completed", "true");
}

function tourStart() {
    document.getElementById("ea_tour_container").remove();
    document.getElementById("parent").classList.toggle('d-none');
    document.getElementsByClassName("shepherd-modal-is-visible")[0].remove();
    document.getElementsByClassName("tour-tutorials-class")[0].classList.toggle("d-none");
    $('#parent').load('player.html');
    localStorage.setItem("tour_completed", "true");
}

$(document).ready(function() {
    // Tour flows start
    // Modal Step 1
    elementTour("conversationId", ".tour-conversation", "Start a private conversation with an Enter Agora active participant.", "conversation-tour", 'right');

    // // Modal Step 2
    $("#conversations").on('click', function(){
        tour.hide();
        elementTour("directMessageId", ".direct-message-channel", "Hover over Direct messages and click on the + sign.", "directMessages-tour", 'right');
    });

    // // Modal Step 3
    $(".direct-message-channel").on('click', function(){
        tour.hide();
        setTimeout(function(){ 
            elementTour("ShowMembersPopup", ".add-members-search-members", "Add this participant to the list to start a private conversation with him.", "add-members-search-members-class", 'right');
        }, 1000);
    });

    // Modal Step 4
    // $(".add-members-search-members").on('click', function(){
    //     tour.hide();
    //     elementTour("ChatMembersBtn", ".tour-addMembers", "Start a chat with him!", "chat-button-tour", 'right');
    // });

    // Modal Step 5
    $(".tour-addMembers").on('click', function(){
        tour.hide();
        $("#modalAddMembers").modal('hide');
        $('#directMessages').collapse('toggle');
        $("#william-hambling").trigger( "click" );
        setTimeout(function(){ 
            elementTour("MessageMember", ".tutorial-message-compose", "Click the input field an start writing a message to this user and press on Enter to send. Don't worry he's only a tour user. The real will won't receive this message.", "chat-area-tour", 'top');
        }, 1000);

        // $("#modalAddMembers").modal('hide');
        
    });

    $(".privateUserCall").on('click', function(){
        tour.hide();
        elementTour("private-user-call", ".tour-private-call", "Let's start voice call with tutorial Will. Every time you call someone, they will receive an invite to your call request", "private-call-tour", 'bottom');
    });

    $(".call-accept-tour").on('click', function(){
        tour.hide();
        let messageContent = document.getElementById('private-chat-content-william-hambling');
        let audioCallContent = document.getElementById('private-call-content-william-hambling');
        messageContent.classList.toggle("d-block");
        audioCallContent.classList.toggle("d-block");
        $("#modalCallRequest").modal('hide');
        elementTour("private-user-call-energy-meter", ".energy-meter-tour", "You currently hearing tutorial will speaking. This icon will always appear when the other user you are talking to is speaking. <button onclick='acceptEnergyMeter();' class='btn-shepherd'>Ok</button>", "private-call-energy-meter-tour", 'left');
    });

    $(".tour-video-call").on('click', function(){
        tour.hide();
        showHidePrivateVideoCall('william-hambling');
        elementTour("tour-videocall-user", ".tour-videocall-user", "The current speaker will appear in the center of the screen. Given it's a private conversation with only 2 participants, the other guest will always remain pinned to the front screen. <button onclick='tourVideocallUserClick();' class='btn-shepherd'>Ok</button>", "tour-videocall-user", 'left');
    });

    $(".tour-add-people").on('click', function(){
        tour.hide();
        setTimeout(function(){ 
            elementTour("tour-add-participant", ".tour-add-participant", "Hover your mouse over Ruxandra's name and then click on the add to group button", "tour-add-participant", 'left');
        }, 1000);
    });

    $(".tour-add-participant").on('click', function(){
        tour.hide();
        elementTour("tour-addto-group", ".tour-addto-group", "Add Ruxandra Radulescu to the group call. She will receive the same invite we've seen earlier.", "btn-tour-addto-group", 'top');
    });

    $(".tour-addto-group").on('click', function(){
        tour.hide();
        $("#modalAddParticipant").modal('hide');
        $("#direct-messages-members").append(`<li class="sub-menu-link d-flex align-items-center"
        id="multi-user" onclick="showChannelsContent(this)">
        <span class="userStatus"><span class="ls-user-count">3</span></span>
        <span class="inline-block tour-group-chat">Will, Ruxandra</span>
        <span class="userclose ml-auto d-none"><i class="fa fa-times" aria-hidden="true"></i></span>
        </li>`);
        setTimeout(function(){ 
            elementTour("tour-group-chat", ".tour-group-chat", "A new entry will be created under your direct messages and the new call will start with both Will and Ruxandra.", "tour-group-chat", 'right');
        }, 1000);
    });
    $(".tour-backToexperiences").on('click', function(){
        tour.hide();
        $('.tour-landing-box').removeClass('d-none');
        setTimeout(function(){ 
            elementTour("tour-landing-call-box", ".tour-landing-call-box", "While in a call you can see who is currently speaking or even their video feed if they are sharing their camera. <button onclick='tourlandingcallboxClick();' class='btn-shepherd'>Ok</button>", "tour-landing-call-box", 'left');
        }, 1000);
    });

    $(".tour-returnTo-call").on('click', function(){
        tour.hide();
        $(".headers_content").addClass('active');
        $("#show-conversations").toggleClass('d-block');
        setTimeout(function(){ 
            //$('#multi-user').trigger('click');
            elementTour("tour-endcall", ".tour-endcall", "Congratulations! You have mastered calls. Let's end this group call and continue with channels. Keep in mind that even if you initiated a group call, ending it will not affect the other participants' call.", "tour-endcall", 'top');
        }, 1000);
    });

    $(".tour-endcall").on('click', function(){
        tour.hide();
        $("#channels-multi-user-content").toggleClass('d-block');
        $("#channels-multi-user-content").removeClass('ea-2-column');
        elementTour("tour-direct-channel", ".tour-direct-channel", "Click on the + sign to explore Channels", "tour-direct-channel", 'top');
    });

    $(".tour-endcall").on('click', function(){
        tour.hide();
        $("#channels-multi-user-content").toggleClass('d-block');
        $("#channels-multi-user-content").removeClass('ea-2-column');
        elementTour("tour-direct-channel", ".tour-direct-channel", "Click on the + sign to explore Channels", "tour-direct-channel", 'top');
    });

    $(".tour-caller-box").on('click', function(){
        tour.hide();
        elementTour("tour-tutorials-id", ".tour-tutorials", "Congratulations! You have completed Enteragora's HUD tutorial. We will lock off the communications menu for now until you reach your floor. If you ever need to consult the things you've learned with this tutorial, feel free to open the How to menu. <button onclick='tourEnd();' class='btn-shepherd'>Finish</button>", "tour-tutorials-class", 'right');
    });
    // Tour flows End

    // Enable or diable send button
    var messageElement = document.getElementById('general-message-box');
    var tourElement = document.getElementById('sentMessage');
    messageElement.addEventListener('keyup', activateSendbutton);
    tourElement.addEventListener('keyup', activateSendbutton);
});

function activateSendbutton(e) {
    if(e.target.value != "") {
        e.target.parentNode.lastElementChild.classList.add("active");
        e.target.parentNode.children[1].childNodes[1].outerHTML = '<img src=\"images/send-white.png\" alt=\"Send\">';
        if(e.which == 13) {
            e.target.parentNode.lastElementChild.classList.remove("active");
            e.target.parentNode.children[1].childNodes[1].outerHTML = '<img src=\"images/send.png\" alt=\"Send\">';
        }
    } else {
        e.target.parentNode.lastElementChild.classList.remove("active");
        e.target.parentNode.children[1].childNodes[1].outerHTML = '<img src=\"images/send.png\" alt=\"Send\">';
    }
}