class RTMClient {
    constructor () {
        this.channels = {}
        this._logined = true
    }

    async init (appId) {
        if (am.isHUDEnabled === true) {
            this.client = AgoraRTM.createInstance(appId);
            this.subscribeClientEvents();
            await this.login(user.rtm.uid, user.rtm.token);
            await this.joinChannel('general');
            await this.updateChannelMembers('general');
            await am.createNewChannel();
            await this.sendChannelMessage(user.rtm.uid + " has joined", "general");
        }
    }

    async createChat() {
        let channel_name = document.getElementById("searchbar-search-members").value;
        if (channel_name.length > 0) {
            await this.addPrivateChatMember(channel_name.split(",").length > 1 ? user.rtm.uid + ',' + channel_name : channel_name);
        }
    }

    async addPrivateChatMember(channel_name) {
        let peerMembersUl = document.getElementById("direct-messages-members");
        let isNotExist = true;
        let members = channel_name.split(",");
        peerMembersUl.childNodes.forEach(element => {
            if (element.nodeName.toLowerCase() === 'li' && element.id === channel_name) {
                isNotExist = false;
            }
        });
        if (isNotExist) {
            let li = document.createElement("li");
            li.classList = "sub-menu-link d-flex align-items-center";
            li.id = channel_name;
            li.setAttribute("onclick", "showChannelsContent(this)");
            li.innerHTML = '<span class="userStatus"><i class="fa fa-square status fs-5 online zero-zoom" aria-hidden="true"></i></span><span class="inline-block">' + channel_name + '</span><span class="userclose ml-auto d-none"><i class="fa fa-times" aria-hidden="true"></i></span>';
            peerMembersUl.appendChild(li);
            //document.getElementById("channels-sub-menu-content").innerHTML += this.getChatContent(channel_name);
            if (members.length > 1) {
                document.getElementById("group-messages-content").innerHTML += this.getGroupChatContent(channel_name, members.length);
            } else {
                document.getElementById("peer-messages-content").innerHTML += this.getChatContent(channel_name);
            }
        }
        $('#modalAddMembers').modal('hide');
        if (this.client === undefined) {
            await this.initializeRTM();
        }

        if (members.length > 1) {
            if (this.channels[channel_name] === undefined) {
                let res = await this.joinChannel(channel_name);
                console.log(res);
                this.subscribeChannelEvents(channel_name);
            }

            for (let i = 1; i < members.length; i++) {
                await rtm.sendPeerMessage(channel_name + '<<<MULTI_USER_MESSAGE>>>' + members[1] + ':' + user.rtm.uid + ' Created This Group.', members[1]);
            }

            // await this.sendChannelMessage("Group Message", channel_name);

            // this.messageContent(user.rtm.uid, "Message Here", channel_name);
        } else if (members.length === 1) {
            this.subscribeClientEvents();
            //await rtm.sendPeerMessage('Hi', channel_name);
        }
        return isNotExist;
    }


    // subscribe client events
    subscribeClientEvents () {
        const clientEvents = [
            'ConnectionStateChanged',
            'MessageFromPeer'
        ]
        clientEvents.forEach((eventName) => {
            this.client.on(eventName, async (...args) => {
                if (eventName === 'MessageFromPeer') {
                    // console.log('emit ', eventName, ...args);
                    let to = args[1];
                    let message = args[0].text;
                    let data = message.split('<<<MULTI_USER_MESSAGE>>>');

                    if (data.length > 1) {
                        if (this.channels[data[0]] === undefined || this.channels[data[0]].channel === undefined) {
                            // Join to the group chat channel
                            let channel_name = data[0].split(',');
                            let addedChat = this.addPrivateChatMember(data[0]);
                            if (addedChat) {
                                this.getChatContent(to, channel_name.length)
                            }
                            await this.joinChannel(data[0]);
                        }
                    } else {
                        let addedChat = this.addPrivateChatMember(to);
                        if (addedChat) {
                            this.getChatContent(to)
                        }
                        this.messageContent(args[1], message, (data.length > 1) ? to : null);
                    }
                }
                // log event message
                // this.emit(eventName, ...args)
            })
        })
    }

    messageContent(name, message, channelName = null) {
        if (channelName === null) {
            var element = document.getElementById( name + '-ea-user-messages-list');
        } else {
            var element = document.getElementById( channelName + '-ea-user-messages-list');
        }

        if ($("#" + element.id).children('div#ea-new-message-label').length <= 0) {
            if ($("#" + element.id).find('div.ea-message-row div.message-details span b.ea-user-name:last').text().trim() === name){
                element.insertAdjacentHTML(
                    'beforeend', '' +
                    '<div class="ea-new-message" id="ea-new-message-label"><span>New message</span><hr/></div>' +
                    '<div class="d-flex flex-row ea-message-row">' +
                    '<div class="message-details border-right pr-3">' +
                    '<span></span>' +
                    '<span class="ea-msg-time"></span>' +
                    '</div>' +
                    '<div class="message-body px-3">' +
                    '<p class="m-0">'+message+'</p>' +
                    '</div>' +
                    '</div>'
                );
            } else {
                element.insertAdjacentHTML(
                    'beforeend', '' +
                    '<div class="ea-new-message" id="ea-new-message-label"><span>New message</span><hr/></div>' +
                    '<div class="d-flex flex-row ea-message-row">' +
                    '<div class="message-details border-right pr-3">' +
                    '<span><b class="ea-user-name">'+ name +' </b></span>' +
                    '<span class="ea-msg-time">'+new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) +'</span>' +
                    '</div>' +
                    '<div class="message-body px-3">' +
                    '<p class="m-0">'+message+'</p>' +
                    '</div>' +
                    '</div>'
                );
            }
        } else {
            if ($("#" + element.id).find('div.ea-message-row div.message-details span b.ea-user-name:last').text().trim() === name) {
                element.insertAdjacentHTML(
                    'beforeend', '' +
                    '<div class="d-flex flex-row ea-message-row">' +
                    '<div class="message-details border-right pr-3">' +
                    '<span></span>' +
                    '<span class="ea-msg-time"></span>' +
                    '</div>' +
                    '<div class="message-body px-3">' +
                    '<p class="m-0">' + message + '</p>' +
                    '</div>' +
                    '</div>'
                );
            } else {
                element.insertAdjacentHTML(
                    'beforeend', '' +
                    '<div class="d-flex flex-row ea-message-row">' +
                    '<div class="message-details border-right pr-3">' +
                    '<span><b class="ea-user-name">'+ name +' </b></span>' +
                    '<span class="ea-msg-time">'+new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) +'</span>' +
                    '</div>' +
                    '<div class="message-body px-3">' +
                    '<p class="m-0">'+message+'</p>' +
                    '</div>' +
                    '</div>'
                );
            }
        }
    }

    // subscribe channel events
    subscribeChannelEvents (channelName) {
        const channelEvents = [
            'ChannelMessage',
            'MemberJoined',
            'MemberLeft'
        ]
        channelEvents.forEach((eventName) => {
            this.channels[channelName].channel.on(eventName, async (...args) => {
                // console.log('emit ', eventName, args)
                console.log('emit ', args);
                console.log('emit ', channelName);
                if (eventName === 'ChannelMessage' && args[0].text !== undefined && args[0].text !== '') {
                    // let to = args[1];
                    // let message = args[0].text;
                    // let data = channelName.split(',');

                    // if (data.length > 1) {
                        // if (this.channels[data[0]] === undefined || this.channels[data[0]].channel === undefined) {
                        //     alert("Create Group chat @ Receiver end");
                        //     console.log(args[0]);
                        //     console.log(args[1]);
                        //     let addedChat = this.addPrivateChatMember(data[0]);
                        //     if (addedChat) {
                        //         this.getChatContent(to, data[0].split(',').length)
                        //     }
                        //     await this.joinChannel(data[0]);
                        // }
                        // let destMessage = message.split(":");
                        // console.log("<<<<<<DEST MESSAGE>>>>>>");
                        // console.log(destMessage);
                        // if (destMessage.length > 1 && user.rtm.uid === destMessage[0]) {
                        //     this.messageContent(args[1], destMessage[1], (data.length > 1) ? to : null);
                        // }
                    // } else {
                        this.messageContent(args[1], args[0].text, channelName);
                    // }
                }
                await this.updateChannelMembers(channelName);
                await this.updateActiveMembers(channelName);
                await this.updateActiveMembersContent(this.channels[channelName].channel, channelName);
                // this.emit(eventName, {channelName, args: args});
            })
        })
    }

    // call channels
    async getChannelMembers(channel, channelName) {
        let element = document.getElementById(channelName + "-member-count");
        if (element !== null) {
            element.innerHTML = channel.memberCount;
        }
        return await channel.getMembers();
    };

    async updateChannelMembers(channelName) {
        if (this.channels[channelName] !== undefined && this.channels[channelName].channel !== undefined) {
            this.getChannelMembers(this.channels[channelName].channel, channelName).then(members => {
                let membersList = '';
                members.forEach((member) => {
                    console.log(member);
                    membersList += '<a class="dropdown-item" href="#">'
                    if (member === user.display_name) {
                        membersList += member + ' (you)'
                    } else {
                        membersList += member
                    }
                    membersList += '</a>'
                });
                let element = document.getElementById(channelName + "-all-members");
                if (element !== null) {
                    element.innerHTML = membersList;
                }
            });

            let element = document.getElementById(channelName + "-member-count");
            if (element !== null) {
                element.innerHTML = this.channels[channelName].channel.memberCount > 0 ? this.channels[channelName].channel.memberCount : 1;
            }
        }
    };

    async updateActiveMembersContent(channel, channelName) {
        let peerMessage = '';
        channel.memberJoinStateLru.map.forEach((member) => {
            // console.log(member.value.k);
            if (member.value.k !== user.display_name) {
                peerMessage = this.getChatContent(member.value.k);
            }
        });
        document.getElementById("peer-messages-content").innerHTML = '';
        document.getElementById("peer-messages-content").innerHTML = peerMessage;
    };

    getGroupChatContent(channelName, membersCount = 1) {
        return "<div class='col-md-12 d-none no-padding' id=channels-"+channelName+"-content>" +
            "<div class='row h-100vh p-3 ea-bg-white'> " +
            "<div class='col-md-12 no-padding h-15'>" +
            "<div class='channel-header pt-3'>" +
            "<div class='d-flex justify-content-between align-items-center'> " +
            "<div class='d-flex align-items-end'> " +
            "<div class=channel-name> " +
            "<div class=dropdown> " +
            "<button class='btn dropdown-toggle' type=button id=dropdownMenuButton data-toggle=dropdown aria-haspopup=true aria-expanded=false> " +
            "<i class='fa fa-lock-open zero-zoom' aria-hidden=true></i> <span class='channel_name'>"+channelName+"</span> " +
            "</button> " +
            "<div class='dropdown-menu bg-grey' aria-labelledby=dropdownMenuButton> " +
            "<div class=form-group> " +
            "<input id=searchbar-group-"+channelName+" data-key=group-"+channelName+" type=text class='searchbar form-control p-0' placeholder='Search for members...'> " +
            "</div> " +
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
            "<div class='ml-3 mr-auto fs-14 color-A9A9A9'><span class="+channelName+"-member-count id="+channelName+"-member-count>" + membersCount + "</span> Members " +
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

    getChannelContent(channelName, membersCount = 1) {
        return "<div class='col-md-12 d-none no-padding' id=channels-"+channelName+"-content>" +
            "<div class='row h-100vh p-3 ea-bg-white'> " +
            "<div class='col-md-12 no-padding h-15'>" +
            "<div class='channel-header pt-3'>" +
            "<div class='d-flex justify-content-between align-items-center'> " +
            "<div class='d-flex align-items-end'> " +
            "<div class=channel-name> " +
            "<div class=dropdown> " +
            "<button class='btn dropdown-toggle' type=button id=dropdownMenuButton data-toggle=dropdown aria-haspopup=true aria-expanded=false> " +
            "<i class='fa fa-lock-open zero-zoom' aria-hidden=true></i> <span class='channel_name'>"+channelName+"</span> " +
            "</button> " +
            "<div class='dropdown-menu bg-grey' aria-labelledby=dropdownMenuButton> " +
            "<div class=form-group> " +
            "<input id=searchbar-group-"+channelName+" data-key=group-"+channelName+" type=text class='searchbar form-control p-0' placeholder='Search for members...'> " +
            "</div> " +
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
            "<div class='ml-3 mr-auto fs-14 color-A9A9A9'><span class="+channelName+"-member-count id="+channelName+"-member-count>" + membersCount + "</span> Members " +
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

    getChatContent(name, membersCount = 1) {
        return  '<div class="col-md-12 d-none no-padding" id="channels-' + name + '-content">' +
            '<div class="row h-100vh d-none p-3 ea-bg-black" id="private-call-content-' + name + '">' +
            '<div class="col-md-12 no-padding h-15"> ' +
            '<div class="channel-header pt-3">' +
            '<div class="d-flex justify-content-between align-items-center">' +
            '<div class="d-flex align-items-end"> ' +
            '<span class="channel-name">' + name + '</span> ' +
            '<i class="fa fa-square information status online zero-zoom" aria-hidden="true"></i> ' +
            '</div> ' +
            '<div class="ml-3 mr-auto fs-14 color-A9A9A9"><span class="'+name+'-member-count" id="'+name+'-member-count">' + membersCount + '</span> Members</div>' +
            '<div class="useractions user-message-panel"> ' +
            '<ul> ' +
            '<li><a class="backToHome" href="javascript:void(0);">Back to experience</a></li> ' +
            '</ul> ' +
            '</div> ' +
            '</div> ' +
            '</div> ' +
            '<hr class="mt-2 mb-0"> ' +
            '<div class="d-flex justify-content-end align-items-center"> ' +
            '<div class="ea-microphone-energy-meter mt-2"> ' +
            '<img class="active" src="../images/EA-UI-icons_Energy_Meter.svg" alt="" title=""> ' +
            '</div> ' +
            '</div> </div> ' +
            '<div class="col-md-12 no-padding h-70 overflow-auto"> ' +
            '<div class="channel-content h-100"> ' +
            '<div class="d-flex align-items-center justify-content-center h-100"> ' +
            '<i class="fa fa-user zero-zoom fs-192 icon-color-494949" aria-hidden="true"></i> ' +
            '</div> ' +
            '</div> ' +
            '</div> ' +
            '<div class="row no-padding channel-footer h-15 w-100"> ' +
            '<div class="border-top-707070 col-md-12"> ' +
            '<div class="row h-100 align-items-center justify-content-center call-actions-list"> ' +
            '<div class="col-md-2 text-center d-flex h-100 align-items-center justify-content-center"> ' +
            '<a href="javascript:void(0);" class="text-decoration-none ea-color-white"> ' +
            '<i class="fa fa-phone txf-225 fs-26" aria-hidden="true"></i> ' +
            '<span class="fs-14 d-block">End call</span> ' +
            '</a> ' +
            '</div> ' +
            '<div class="col-md-2 text-center d-flex h-100 align-items-center justify-content-center"> ' +
            '<a href="javascript:void(0);" class="text-decoration-none ea-color-white"> ' +
            '<i class="fa fa-video fs-26" aria-hidden="true"></i> ' +
            '<span class="fs-14 d-block">Share video</span> ' +
            '</a> ' +
            '</div> ' +
            '<div class="col-md-2 text-center d-flex h-100 align-items-center justify-content-center"> ' +
            '<a href="javascript:void(0);" class="text-decoration-none ea-color-white trigger-addMembers"> ' +
            '<i class="fa fa-user-plus fs-26" aria-hidden="true"></i> ' +
            '<span class="fs-14 d-block">Add people</span> ' +
            '</a> ' +
            '</div> ' +
            '<div class="col-md-2 text-center d-flex h-100 align-items-center justify-content-center text-nowrap recent-message" data-placement="top" data-content="<b>' + name + ':</b> Lorem ipsum dolor sit amet…" data-original-title="" title=""> ' +
            '<a href="javascript:void(0);" class="text-decoration-none ea-color-white" id="close-chat-content-' + name + '" onclick="showMessagesAndAudioCall(this, "' + name + '")"> ' +
            '<i class="fa fa-comment-alt fs-26" aria-hidden="true"></i> ' +
            '<span class="fs-14 d-block">Conversations</span> ' +
            '</a> ' +
            '<span class="ea-message-count">2</span> ' +
            '</div> ' +
            '</div> ' +
            '</div> ' +
            '</div> ' +
            '</div> ' +
            '<div class="row h-100vh p-3 ea-bg-black d-none" id="private-video-content-' + name + '"> ' +
            '<div class="col-md-12 no-padding h-7"> ' +
            '<div class="channel-header pt-3"> ' +
            '<div class="d-flex justify-content-between align-items-center"> ' +
            '<div class="d-flex align-items-end"> ' +
            '<span class="channel-name"></span> ' +
            '</div> ' +
            '<div class="useractions user-message-panel"> ' +
            '<ul> ' +
            '<li><a class="backToHome" href="javascript:void(0);">Back to experience</a></li> ' +
            '</ul> ' +
            '</div> ' +
            '</div> ' +
            '</div> ' +
            '<hr class="mt-2 mb-0"> ' +
            '</div> ' +
            '<div class="col-md-12 no-padding h-75"> ' +
            '<div class="channel-content h-25 my-10"> ' +
            '<div class="d-flex align-items-center justify-content-center h-100"> ' +
            '<div class="video__single_user h-100"> ' +
            '<div class="row video-group"> ' +
            '<div class="col"> ' +
            '<p id="local-player-name" class="player-name"></p> ' +
            '<div id="local-player" class="player"></div> ' +
            '</div> ' +
            '<div class="w-100"></div> ' +
            '<div class="col"> ' +
            '<div id="remote-playerlist"></div> </div> </div><span class="thumbimage__user_name">Me</span></div> </div> </div> <div class="channel-content h-75"> <div class="d-flex align-items-center justify-content-center video__noBackground h-100"> <i class="fa fa-user zero-zoom fs-192 icon-color-494949" aria-hidden="true"></i> </div> </div> </div> ' +
            '<div class="row no-padding channel-footer h-15 w-100 mt-15"> <div class="border-top-707070 col-md-12"> <div class="row h-100 align-items-center justify-content-center call-actions-list"> <div class="col-md-2 text-center d-flex h-100 align-items-center justify-content-center"> <a href="javascript:void(0);" class="text-decoration-none ea-color-white"> <i class="fa fa-phone txf-225 fs-26" aria-hidden="true"></i> <span class="fs-14 d-block">End call</span> </a> </div> <div class="col-md-2 text-center d-flex h-100 align-items-center justify-content-center"> <a href="javascript:void(0);" class="text-decoration-none ea-color-white"> <i class="fa fa-video fs-26" aria-hidden="true"></i> <span class="fs-14 d-block">Share video</span> </a> </div> <div class="col-md-2 text-center d-flex h-100 align-items-center justify-content-center"> <a href="javascript:void(0);" class="text-decoration-none ea-color-white trigger-addMembers"> <i class="fa fa-user-plus fs-26" aria-hidden="true"></i><span class="fs-14 d-block">Add people</span></a></div><div class="col-md-2 text-center d-flex h-100 align-items-center justify-content-center text-nowrap recent-message" data-placement="top" data-content="<b>' + name + ':</b> Lorem ipsum dolor sit amet…" data-original-title="" title=""><a href="javascript:void(0);" class="text-decoration-none ea-color-white" id="close-chat-content-' + name + '" onclick="showMessagesAndAudioCall(this, "' + name + '")"><i class="fa fa-comment-alt fs-26" aria-hidden="true"></i><span class="fs-14 d-block">Conversations</span></a><span class="ea-message-count">2</span></div></div></div></div></div><div class="row h-100vh p-3 ea-bg-white d-none d-block" id="private-chat-content-' + name + '"><div class="col-md-12 no-padding h-15"><div class="channel-header pt-3"><div class="d-flex justify-content-between align-items-center"><div class="d-flex align-items-end"><span class="channel-name">' + name + '</span><i class="fa fa-square information status online zero-zoom" aria-hidden="true"></i></div><div class="useractions user-message-panel"><ul class="message-box-full-action"><li class="pr-3" onclick="showHidePrivateAudioCall("' + name + '")"><a href="javascript:void(0);"><i class="fa fa-phone ea-rotate-90"></i></a></li><li class="pr-3" onclick="showHidePrivateVideoCall("' + name + '")"><a href="javascript:void(0);"><i class="fas fa-video"></i></a></li><li><a class="backToHome" href="javascript:void(0);">Back to experience</a></li></ul><ul class="message-box-half-action"><li onclick="showMessagesAndAudioCall(undefined, "' + name + '")"><a href="javascript:void(0);"><i class="fa fa-times" aria-hidden="true"></i></a></li> </ul></div></div></div><hr class="mt-2"></div><div class="col-md-12 no-padding h-70 overflow-auto"><div class="channel-content"><div class="ea-user-messages-list" id="'+name+'-ea-user-messages-list"></div></div></div><div class="row no-padding channel-footer h-15 w-100"><div class="col-md-12 border-top px-0"><textarea placeholder="Type message here ..." class="ea-message-compose h-100" id="'+ name +'-message-box"></textarea>' +
            '<button class="zero-zoom ea-message-area" id="send-channel-message" onclick="sendPrivateMessage(this, ' +
            "'"+name+"'" +
            ')" >\n' +
            '<img src="images/send.png" alt="Send">\n' +
            '</button></div></div></div></div>';
    }

    async updateActiveMembers(channelName) {
        if (this.channels[channelName] !== undefined) {
            this.getChannelMembers(this.channels[channelName].channel, channelName).then(members => {
                let privateMessageUsers = '';
                members.forEach((member) => {
                    if (member !== user.display_name) {
                        privateMessageUsers += '<li id="' + member + '" onclick="showChannelsContent(this)">' +
                            '<span class="inline-block">' + member + '</span>' +
                            '<span data-key="' + member + '" data-value="' + member + '" onclick="addMemberToList(this)"><i class="fas fa-user-plus"></i></span>' +
                            '</li>';
                    }
                });
                document.getElementById("add-members-search-members").innerHTML = privateMessageUsers;
            });
        }
    };

    async login (accountName, token) {
        this.accountName = accountName
        if (this.client === undefined) {
            this.client = AgoraRTM.createInstance(user.rtm.appId);
        }
        return this.client.login({ uid: this.accountName, token })
    }

    async logout () {
        return this.client.logout()
    }

    async joinChannel (name) {
        console.log('joinChannel', name)
        if (this.client === undefined) {
            await this.initializeRTM();
        }
        const channel = this.client.createChannel(name)
        this.channels[name] = {
            channel,
            joined: true // channel state
        }
        console.log(this.channels[name])
        this.subscribeChannelEvents(name);
        let response = channel.join();
        document.getElementById(name + "-member-count").innerHTML = this.channels[name].channel.memberCount;
        await rtm.updateChannelMembers(name);
        await rtm.updateActiveMembers(name);
        return response;
    }

    async leaveChannel (name) {
        console.log('leaveChannel', name)
        if (!this.channels[name] ||
            (this.channels[name] &&
                !this.channels[name].joined)) return
        return this.channels[name].channel.leave()
    }

    async sendChannelMessage (text, channelName) {
        if (!this.channels[channelName] || !this.channels[channelName].joined) {
            this.client = AgoraRTM.createInstance(user.rtm.appId);
            this.subscribeClientEvents();
            await this.login(user.rtm.uid, user.rtm.token);
            await this.joinChannel('general');
        }
        return this.channels[channelName].channel.sendMessage({ text })
    }

    async initializeRTM() {
        this.client = AgoraRTM.createInstance(user.rtm.appId);
        await this.login(user.rtm.uid, user.rtm.token);
        this.subscribeClientEvents();
    }

    async sendPeerMessage (text, peerId) {
        console.log('sendPeerMessage', text, peerId)
        if (this.client === undefined) {
            await this.init(user.rtm.appId);
        }
        console.log("Before Send");
        return await this.client.sendMessageToPeer({ text }, peerId.toString());
    }

    async queryPeersOnlineStatus (memberId) {
        console.log('queryPeersOnlineStatus', memberId);
        return this.client.queryPeersOnlineStatus([memberId]);
    }

    //send image
    async uploadImage (blob, peerId) {
        const mediaMessage = await this.client.createMediaMessageByUploading(blob, {
            messageType: 'IMAGE',
            fileName: 'agora.jpg',
            description: 'send image',
            thumbnail: blob,
            // width: 100,
            // height: 200,
            // thumbnailWidth: 50,
            // thumbnailHeight: 200,
        })
        return this.client.sendMessageToPeer(mediaMessage, peerId)
    }

    async sendChannelMediaMessage (blob, channelName) {
        console.log('sendChannelMessage', blob, channelName)
        if (!this.channels[channelName] || !this.channels[channelName].joined) return
        const mediaMessage = await this.client.createMediaMessageByUploading(blob, {
            messageType: 'IMAGE',
            fileName: 'agora.jpg',
            description: 'send image',
            thumbnail: blob,
            // width: 100,
            // height: 200,
            // thumbnailWidth: 50,
            // thumbnailHeight: 200,
        })
        return this.channels[channelName].channel.sendMessage(mediaMessage)
    }

    async cancelImage (message) {
        const controller = new AbortController()
        setTimeout(() => controller.abort(), 1000)
        await this.client.downloadMedia(message.mediaId, {
            cancelSignal: controller.signal,
            onOperationProgress: ({currentSize, totalSize}) => {
                console.log(currentSize, totalSize)
            },
        })
    }
}

let rtm = new RTMClient();