var isHUDEnabled = am.isHUDEnabled;
updateHUDLayout();

function setHUDIsEnabled(Enabled){
    isHUDEnabled = Enabled;
    updateHUDLayout();
}

function getHUDisEnabled(){
    return isHUDEnabled;
}

function updateHUDLayout() {
    if(isHUDEnabled === false) {
        $("body").addClass('l-hide-sidebar');
    } else {
        $("body").removeClass('l-hide-sidebar');
        this.displayHUDTutorialModal();
    }
}

function toggleMicroPhone(event) {
    event.classList.toggle("fa-microphone-slash");
    //alert(JSON.stringify(am.channelInfo.getCurrentRemoteUsers()[0].uid));
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

    //to do, add dynamically channel names from the rest api endpoint
    //https://eu-west-1.console.aws.amazon.com/lambda/home?region=eu-west-1#/functions/ListChannels?tab=code
    //endpoint return examples:
    //{"success":true,"data":{"channels":[{"channel_name":"general","user_count":1}],"total_size":1}}
    //{"success":true,"data":{"channels":[],"total_size":0}}

    var ul = document.getElementById("channelsListUl");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("General"));
    ul.appendChild(li);
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
    if (event !== undefined && event !== null) {
        let element = document.getElementById('channels-' + event.id + '-content');
        let childrens = document.getElementById('channels-sub-menu-content').children;
        let showChannel = true;
        for (let i = 0; i < childrens.length; i++) {
            if (childrens.item(i).classList.contains('d-block') && childrens.item(i).id !== 'channels-' + event.id + '-content') {
                childrens.item(i).classList.toggle("d-block");
                if (element !== undefined && element !== null) {
                    element.classList.toggle("d-block");
                }
                showChannel = false;
            }
        }
        rtm.updateChannelMembers(event.id).then();
        if (showChannel === true && element !== null) {
            element.classList.toggle("d-block");
        }
        //event.lastElementChild.classList.toggle("d-none");
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
    let messageContent = document.getElementById('private-chat-content-' + name);
    let audioCallContent = document.getElementById('private-call-content-' + name);
    messageContent.classList.toggle("d-block");
    audioCallContent.classList.toggle("d-block");
}

function showHidePrivateVideoCall(name, carousel = 0) {
    // trigger multi user video call carousel trigger
    if(carousel) {
        enableCarousel();
    }
    let messageContent = document.getElementById('private-chat-content-' + name);
    let videoContent = document.getElementById('private-video-content-' + name);
    messageContent.classList.toggle("d-block");
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
}

function showChannels(event) {
    event.children.item(0).classList.toggle("fa-caret-right");
}

function agreeallcookies() {
    document.getElementById("cookie__statistics").checked = true;
    document.getElementById("cookie__usersession").checked = true;
    setCookie("cookie__statistics", true, 30);
    setCookie("cookie__usersession", true, 30);
    hideCookieModal();
}

function agreeconsentcookies() {
    let cookie__statistics = document.getElementById("cookie__statistics").checked;
    let cookie__usersession = document.getElementById("cookie__usersession").checked;
    setCookie("cookie__statistics", cookie__statistics, 30);
    setCookie("cookie__usersession", cookie__usersession, 30);
    hideCookieModal();
}

function hideCookieModal() {
    $("#modalCookies").modal('hide');
}

function enableCarousel() {
    $('.user__carousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
    });
}

// set cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// get cookie
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function requestFullScreen() {
	el = document.body; // Make the body go full screen.
	// Supports most browsers and their versions.
	var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;

	if (requestMethod) { // Native full screen.
		requestMethod.call(el);
	} else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null) {
			wscript.SendKeys("{F11}");
		}
	}
	return false
}

function displayCookieModal() {
    var cookie__statistics = readCookie('cookie__statistics'); 
    var cookie__usersession = readCookie('cookie__usersession');
    if(cookie__statistics == null || cookie__usersession == null) {
        $("#modalCookies").modal('show');
    }
}

function displayHUDTutorialModal() {
    // check in DB if user already completed the tutorial
    if (localStorage.getItem("tour_completed") !== "true") {
        $("#modalTourStart").modal({
            "show": true,
            "keyboard": false,
            "backdrop": false,
            "focus": true,
            "backdrop": 'static'
        });
    }
}

function enableFullScreenModeAndStartCookieModal(isEnabled){
    if (isEnabled) {
        requestFullScreen();
        document.getElementById("ea-fullscreen").classList.toggle('fa-compress');
    }
    displayCookieModal();
}

function cancelFullScreen() {
    var el = document;
    var requestMethod = el.cancelFullScreen||el.webkitCancelFullScreen||el.mozCancelFullScreen||el.exitFullscreen||el.webkitExitFullscreen;
    if (requestMethod) { // cancel full screen.
        requestMethod.call(el);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

function toggleFullscreenMode()
{
    let el = document.body; // Make the body go full screen.
    let isInFullScreen = (document.fullScreenElement) || (document.mozFullScreen || document.webkitIsFullScreen);

    if (isInFullScreen) {
        cancelFullScreen();
    } else {
        requestFullScreen(el);
    }
    document.getElementById("ea-fullscreen").classList.toggle('fa-compress');
    return false;
}

function initFullscreenModal(){
    $("#modalFullscreen").modal({
        "show": true,
        "keyboard": false,
        "backdrop": false,
        "focus": true,
        "backdrop": 'static'
    });
}

function initExitModal(){
    $("#modalExit").modal({
        "show": true,
        "keyboard": false,
        "backdrop": false,
        "focus": true,
        "backdrop": 'static'
    });
}

// Modal Trigger
$(document).ready(function() {

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
        content: '<ul><li id="browse-channel" class="trigger-browseChannel">Browse channel</li>' +
            '<li class="trigger-createChannel">Create channel</li></ul>',
        template: '<div class="popover popover-create-channel" role="tooltip"><div class="popover-body"></div></div>',
    });

    $('.new-group-channel').on('shown.bs.popover', function () {
        // Browse channel 
        $(document).on("click", "#browse-channel", async function () {
            showBrowseChannelsContent(this);
            let allChannels = await am.getChannels("eu-west-2", "Dev3");
            let allChannelsGrid = "<div><span>No Channels available</span></div>";
            if (allChannels.channelData.Count > 0) {
                allChannelsGrid = '';
                allChannels.channelData.Items.forEach(item => {
                    if (item.IsPrivate === false || item.IsPrivate === undefined) {
                        allChannelsGrid += '<div class="row">' +
                            '<div class="col-md-2 text-left"><strong><span>' + item.Name + '</span></strong></div>' +
                            '<div class="col-md-5 text-center"><span>No info available</span></div>' +
                            '<div class=col-md-3><span id='+item.Name+'-member-count>' + item.Members + '</span></div>' +
                            '<div class="col-md-2 text-right">';

                        if (rtm.channels[item.Name] === undefined && item.Owner !== user.rtm.uid) {
                            allChannelsGrid += "<button class='btn btn-green' onclick=joinChannel(this,'"+item.Name+"')>Join</button>";
                        } else {
                            allChannelsGrid += "<button class='goto-event' onclick=leaveChannel(this,'"+name+"')>Leave</button>"
                        }

                        allChannelsGrid += '</div></div><hr>';
                    }
                });
                document.getElementById("browse-all-channels").innerHTML = allChannelsGrid;
            }
        });
    });

    $('body').on('click', '.trigger-browseChannel', function() {
        $("#modalBrowseChannel").modal('show');
    });
    $('body').on('click', '.trigger-createChannel', function() {
        $("#modalCreateChannel").modal('show');
        closepopOver();
    });
    $('body').on('click', '.trigger-addMembers', function() {
        $("#modalAddMembers").modal('show');
    });

    // trigger channel invite modal
    //$("#modalChannelInvite").modal('show');

    // trigger call request modal
    //$("#modalCallRequest").modal("show");

    $('.search-members').keyup(function(){
        $.filterListItems('#searchbar-' + this.getAttribute('data-key'), ".add-members-" + this.getAttribute('data-key') + " li");
    });

    $('.searchbar').keyup(function(){
        $.filterListItems('#searchbar-' + this.getAttribute('data-key'), ".add-members-" + this.getAttribute('data-key') + " a");
    });

    $('.browse-channel-searchbar').keyup(function(){
        $.filterListItems('#searchbar-' + this.getAttribute('data-key'), ".add-members-" + this.getAttribute('data-key') + " li");
    });

    $.filterListItems = function (searchString, targetItems) {
        let current_query = $(searchString).val().toLowerCase();
        if (current_query !== "") {
            $(targetItems).hide();
            $(targetItems).each(function(){
                let current_keyword = $(this).text().toLowerCase();
                if (current_keyword.indexOf(current_query) >=0) {
                    $(this).show();
                }
            });
        } else {
            $(targetItems).show();
        }
    }

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
        $("#modalAddMembers").modal('show');
    })

    // Start tour
    $(".start-tour").on('click', function() {
        $('#ea_tour_container').load('tutorial.html');
        $('#parent').toggleClass('d-none');
        //window.location.href = window.location.protocol + "//" + window.location.host + "/tutorial.html";
        //elementTour("conversationId", ".tour-conversation", "Start a private conversation with an Enter Agora active participant.", "conversation-tour");
    });

    // Skip tutorial event
    $(".skip-tutorial").click(function(){
        $("#modalSkipTutorial").modal('show');
    });

    $("#ea_tour_completed").on('click', function(){
        $('#ea_tour_container').toggleClass('d-none');
        $('#parent').toggleClass('d-none');
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

    $('.ea-message-compose').keypress(async function (event) {
        if (((event.keyCode || event.which) === 13) && !event.shiftKey && event.target.value.length > 0) {
            await sendMessage(event.target.getAttribute('data-channel'));
        }
    });

    $("textarea.ea-message-compose").focusin(function() {
        if (this.getAttribute("data-channel") !== undefined) {
            $("#"+this.getAttribute('data-channel')+'-ea-user-messages-list').find("div#ea-new-message-label").remove();
        }
    });

    // Enable or diable send button
    var messageElement = document.getElementById('general-message-box');
    messageElement.addEventListener('keyup', activateSendbutton);

});

function activateSendbutton(e) { console.log(e);
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

function getTutorials(forceShow = false) {
    // if (localStorage.getItem("intro") === null && forceShow === true) {
    //     localStorage.setItem('intro', 'started');
    //     let element = document.getElementById('ea_tutorial_container');
    //     let client = new XMLHttpRequest();
    //     client.open('GET', 'tutorial.html');
    //
    //     client.onreadystatechange = function () {
    //         if (client.readyState === 4 && client.status === 200) {
    //             element.innerHTML = client.responseText;
    //             document.getElementById('ea_rtm_container').classList.toggle("d-none");
    //             elementTour("conversationId", ".tour-conversation", "Start a private conversation with an Enter Agora active participant.", "conversation-tour", 'right');
    //         }
    //     }
    //
    //     client.send();
    // }
    window.location.href = window.location.protocol + "//" + window.location.host + "/tutorial.html";
}

async function sendMessage(name) {
    let message = document.getElementById(name + "-message-box");
    if (message.value.length > 0) {
        await rtm.sendChannelMessage(message.value, name);
        await rtm.updateChannelMembers(name);
        await rtm.updateActiveMembers(name);
        this.messageContent(name, message.value)
        message.value = "";
        scrollSmoothToBottom("message-container");
        $(".ea-message-area").removeClass('active');
        $(".ea-message-area img").attr('src', '../images/send.png');
    }
}

async function sendPrivateMessage(event, name) {
    let message = document.getElementById(name + "-message-box");
    await rtm.sendPeerMessage(message.value, name);
    this.messageContent(name, message.value)
    message.value = "";
    scrollSmoothToBottom("message-container");
}

function messageContent(name, message) {
    var element = document.getElementById(name + '-ea-user-messages-list');
    element.insertAdjacentHTML(
        'beforeend', '' +
        '<div class="d-flex flex-row ea-message-row">' +
        '<div class="message-details border-right pr-3">' +
        '<span><b class="ea-user-name">'+user.rtm.uid+' </b></span>' +
        '<span class="ea-msg-time">'+new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) +'</span>' +
        '</div>' +
        '<div class="message-body px-3">' +
        '<p class="m-0">'+message+'</p>' +
        '</div>' +
        '</div>'
    );
}

function scrollSmoothToBottom (id) {
    var div = document.getElementById(id);
    $('#' + id).animate({
       scrollTop: div.scrollHeight - div.clientHeight
    }, 500);
 }

async function createRTMChannel() {
    let channelName = document.getElementById("create-new-custom-channel");
    if (channelName.value.length > 0) {
        await am.createNewChannel('eu-west-2', 'staging', channelName.value, document.getElementById("create-channel-is-private").checked);
        channelName.value = '';
    }
}

async function createChat() {
    await rtm.createChat();
}

async function joinChannel(event, name) {
    event.textContent = "Joining";
    await rtm.joinChannel(name);
    await am.updateMembers("eu-west-2", "staging", name, 'join');
    event.outerHTML = "<button class='goto-event' onclick=leaveChannel(this,'"+name+"')>Leave</button>";
    let channelsUI = document.getElementById("channels-sub-menu-content");
    let isNotExist = true;
    channelsUI.childNodes.forEach(element => {
        if (element.nodeName.toLowerCase() === 'div' && element.id === "channels-"+name+"-content") {
            isNotExist = false;
        }
    });
    if (isNotExist) {
        channelsUI.innerHTML += rtm.getChannelContent(name);
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
}

async function leaveChannel(event, name) {
    event.textContent = "Leaving";
    await rtm.leaveChannel(name);
    await am.updateMembers("eu-west-2", "staging", name, 'leave');
    event.outerHTML = "<button class='btn btn-green' onclick=joinChannel(this,'"+name+"')>Join</button>";
    let channelsUI = document.getElementById("channels-sub-menu-content");
    channelsUI.childNodes.forEach(element => {
        if (element.nodeName.toLowerCase() === 'div' && element.id === "channels-"+name+"-content") {
            element.remove();
        }
    });

    let channelsListUI = document.getElementById("channelsListUl");
    channelsListUI.childNodes.forEach(element => {
        if (element.nodeName.toLowerCase() === 'li' && element.id === name) {
            element.remove();
        }
    });
}

function addMemberToList(name) {
    let element = document.getElementById("searchbar-search-members");
    if (element.value.length > 0) {
        element.value += ','+name.getAttribute("data-key");
    } else {
        element.value += name.getAttribute("data-key");
    }
}