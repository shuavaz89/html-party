const PARTY_ELEMENTS = [
    {
        element: "select",
        nodeName: "SELECT",
    },
    {
        element: "textarea",
        nodeName: "TEXTAREA",
    },
    {
        element: "input",
        nodeName: "INPUT",
    },
    {
        element: "svg",
        nodeName: "SVG",
    },
    {
        element: "img",
        nodeName: "IMG",
    },
    {
        element: "button",
        nodeName: "BUTTON",
    },
    {
        element: "a",
        nodeName: "A",
    },
    {
        element: "p",
        nodeName: "P",
    },
    {
        element: "span",
        nodeName: "SPAN",
    },
    {
        element: "h1",
        nodeName: "H1",
    },
    {
        element: "h2",
        nodeName: "H2",
    },
    {
        element: "h3",
        nodeName: "H3",
    },
    {
        element: "h4",
        nodeName: "H4",
    },
    {
        element: "h5",
        nodeName: "H5",
    },
    {
        element: "h6",
        nodeName: "H6",
    },
    {
        element: "caption",
        nodeName: "CAPTION",
    },
    {
        element: "td",
        nodeName: "TD",
    },
];

const FUN_COLORS = [
    "#ec1254",
    "#f27c14",
    "#f5e31d",
    "#1ee8b6", 
    "#26a1d5",
    "#570bb7", "#d042f8", "#2edbef", "#3aefb6", "#f10983",
    "#d61173", "#fb5cab", "#52c1fa", "#178bd5", "#f5ed16"
]

const COLOR_FREQ = [
    "#1e8967", // green
    "#ffd702", // yellow
    "#f48d3f", // orange
    "#d02f4e", // red
];

const PARTY_TEXT_CLASSES = [
    "party-time-color",
    "party-time-textShadow",
    "party-time-colorVolume", // Color by volume level
    "party-time-fontSize",
];

const PARTY_CONTAINER_CLASSES = [
    "party-time-boxShadow",
    "party-time-bkgColor",
    "party-time-height",
    "party-time-width",
    "party-time-posTop",
    "party-time-posRight",
    "party-time-posBottom",
    "party-time-posLeft",
];

const PARTY_TIME_CLASSES = [
    "party-time-color",
    "party-time-textShadow",
    "party-time-boxShadow",
    "party-time-bkgColor",
    "party-time-height",
    "party-time-width",
    "party-time-colorVolume", // Color by volume level
    "party-time-fontSize",
    "party-time-posTop",
    "party-time-posRight",
    "party-time-posBottom",
    "party-time-posLeft",
];

const PARTY_TIME_FREQ_CLASSES = [
    "",
    "party-time-freq-low",
    "party-time-freq-mid",
    "party-time-freq-high"
];
/**
 * Remove an array item
 * @param {array} array 
 * @param {string|number|boolean} item 
 */
function removeArrayItem (array, item) {
    var index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
}

/**
 * Clone an array
 * @param {array} arr 
 * @returns {array} Cloned array
 */
function cloneArray (arr) {
    return JSON.parse(JSON.stringify(arr));
}

/**
 * Get a random integetory from a range
 * @param {number} min 
 * @param {number} max 
 * @returns {number} Randomg integer
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Convert object to style properties for inline styling.
 * @param {HTML Element} ele 
 * @param {object} obj 
 */
function objToStyles(ele, obj) {
    for (var prop in obj) {
        ele.style.setProperty(prop, obj[prop], 'important');
    }
}

/**
 * Get middle value of a range
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Middle Value
 */
function middleValue(a, b) {
    return Math.round((a+b)/2);
}
/**
 * Youtube Streamer
 */
// var player;
// var createYT = function (VIDEO_ID) {
//     if (VIDEO_ID) {
//         player = new YT.Player('party-time-ytplayer', {
//             height: '200', // Set to 0 to hide
//             width: '200', // Set to 0  to hide
//             videoId: VIDEO_ID, //'M7lc1UVf-VE',
//             playerVars: {
//                 'enablejsapi': 1,
//                 'playsinline': 1
//             },
//             events: {
//             'onReady': onPlayerReady,
//             // 'onStateChange': onPlayerStateChange
//             }
//         });
//     }
// }
    // 2. This code loads the IFrame Player API code asynchronously.
    // var tag = document.createElement('script');

    // tag.src = "https://cdn.jsdelivr.net/npm/@thelevicole/youtube-to-html5-loader@5/dist/YouTubeToHtml5.js";
    // document.body.appendChild(tag);
    // var firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    // function onYouTubeIframeAPIReady() {
    //     createYT()
    // }

    // 4. The API will call this function when the video player is ready.
    // function onPlayerReady(event) {
    //     var ytVideo = event.target;
    //     var iframe = ytVideo.getIframe();
    //     console.log("video", ytVideo);
    //     // console.log("getVideoEmbedCode", ytVideo.getVideoEmbedCode());
    //     console.log("iframe", iframe.querySelectorAll("*"));
    //     // event.target.playVideo();
    // }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    // var done = false;
    // function onPlayerStateChange(event) {
    //     if (event.data == YT.PlayerState.PLAYING && !done) {
    //         setTimeout(stopVideo, 6000);
    //         done = true;
    //     }
    // }
    
    // function stopVideo() {
    //     player.stopVideo();
    // }

var partyTimeVidLink = "";
var initVidIframe = true;

var setupYTLink = function (event) {
    var YTLink = event.target.value;
    // var linkArr = YTLink.split("?v=");
    partyTimeVidLink = YTLink// ;linkArr[1];
}


// TEST: https://www.youtube.com/watch?v=Eq5a6L7c_UY
var getYTVid = function () {
    fetch("https://www.youtube.com/watch?v=Eq5a6L7c_UY")
        .then(response => console.log(response.json()))
        .then(data => console.log(data));
    // var vidYTEle = document.getElementById("party-time-yt-player");
    // if (vidYTEle) {
    //     // vidYTEle.setAttribute("src", partyTimeVidLink);
    //     vidYTEle.setAttribute("data-yt2html5", partyTimeVidLink);
    //     vidYTEle.setAttribute("controls", "");
    // } else {
    //     vidYTEle = document.createElement("video");
    //     vidYTEle.id = "party-time-yt-player";
    //     vidYTEle.setAttribute("src", partyTimeVidLink);
    //     vidYTEle.setAttribute("data-yt2html5", partyTimeVidLink);
    //     vidYTEle.setAttribute("controls", "");
    //     document.body.appendChild(vidYTEle)
    // }

    // new YouTubeToHtml5({
    //     autoload: true,
    // });

    // if (initVidIframe) {
    //     initVidIframe = false;
    //     createYT(partyTimeVidId);
    // } else {
    //     player.loadVideoById(partyTimeVidId);   
    // }

    // setTimeout(() => {
    //     const frame = document.getElementById('party-time-ytplayer');
    //     frame.contentWindow.postMessage("", document.URL);
    //     var ytIframeEle = document.getElementById("party-time-ytplayer");
    //     // var iframeWindow = ytIframeEle.contentWindow;
    //     // var ytVidEle = iframeWindow.document.querySelector("video.video-stream");
    //     // console.log("ele", ytVidEle)
    // }, 6000);
    
    // createAudioStream("https://www.youtube.com/embed/" + partyTimeVidId);
}
function generateUI() {
    const partyTimeContainer = document.createElement("div");
    partyTimeContainer.id = "party-time-container";
    partyTimeContainer.classList = "party-time-controls";
    partyTimeContainer.style.setProperty('z-index', '999999', 'important');
    partyTimeContainer.style.setProperty('display', 'flex', 'important');
    partyTimeContainer.style.setProperty('flex-direction', 'column', 'important');
    partyTimeContainer.style.setProperty('color', 'white', 'important');
    partyTimeContainer.style.setProperty('font-size', '12px', 'important');
    partyTimeContainer.style.setProperty('position', 'fixed', 'important');
    partyTimeContainer.style.setProperty('top', '16px', 'important');
    partyTimeContainer.style.setProperty('right', '16px', 'important');
    partyTimeContainer.style.setProperty('background-color', 'rgba(0,0,0,0.24)', 'important');
    partyTimeContainer.style.setProperty('padding', '8px', 'important');
    partyTimeContainer.style.setProperty('border-radius', '8px', 'important');

    var mainEle = document.createElement("div");
    mainEle.classList.add("party-time-controls");

    var buttonEle = document.createElement("button");
    buttonEle.id = "party-time-button";
    buttonEle.classList.add("party-time-controls");
    buttonEle.innerText = "🎉 Party Time!";
    buttonEle.onclick = startParty;
    objToStyles(buttonEle, {
        "margin-right": "8px",
        color: "white",
        cursor: "pointer",
        "background-color": "purple",
        padding: "8px",
        border: "1px solid violet",
        "border-radius": "8px",
        "font-size": "12px",
    });
    mainEle.appendChild(buttonEle);

    var collapseBtnEle = document.createElement("button");
    collapseBtnEle.id = "party-time-collapse-btn";
    collapseBtnEle.classList.add("party-time-controls");
    collapseBtnEle.innerText = "v";
    collapseBtnEle.onclick = togglePartyTimeOptions;
    objToStyles(collapseBtnEle, {
        background: "rgba(0, 0, 0, 0.87)",
        cursor: "pointer",
        border: "0",
        "border-radius": "24px",
        padding: "5px 10px",
        "font-weight": "bold",
        "font-size": "18px",
        transform: "rotate(0deg)",
        color: "white",
    });
    mainEle.appendChild(collapseBtnEle);

    var optionEle = document.createElement("div");
    optionEle.id = "party-time-collapsible";
    optionEle.classList.add("party-time-controls");
    optionEle.style.setProperty('display', 'block', 'important');
    optionEle.style.setProperty('padding', "8px", "important");

    var audioOptionContainerEle = document.createElement("div");
    audioOptionContainerEle.classList.add("party-time-controls");
    objToStyles(audioOptionContainerEle, {
        display: "flex",
        padding: "4px",
        "margin-bottom": "16px"
    })

    var YTOptBtnEle = document.createElement("button");
    YTOptBtnEle.id = "party-time-yt-option-btn";
    YTOptBtnEle.classList.add("party-time-controls");
    YTOptBtnEle.innerText = "Youtube Link";
    YTOptBtnEle.onclick = function () {
        toggleAudioOption("yt");
    }
    objToStyles(YTOptBtnEle, {
        padding: "4px",
        cursor: "pointer",
        border: "1px solid black",
        "border-top-left-radius": "25px",
        "border-bottom-left-radius": "25px",
        "border-left": "0",
        "background-color": "purple",
        color: "white",
    });
    audioOptionContainerEle.appendChild(YTOptBtnEle);

    var audioFileOptBtnEle = document.createElement("button");
    audioFileOptBtnEle.id = "party-time-audio-file-option-btn";
    audioFileOptBtnEle.classList.add("party-time-controls");
    audioFileOptBtnEle.innerText = "Upload File";
    audioFileOptBtnEle.onclick = function () {
        toggleAudioOption("file");
    }
    objToStyles(audioFileOptBtnEle, {
        padding: "4px",
        cursor: "pointer",
        border: "1px solid black",
        "border-top-right-radius": "25px",
        "border-bottom-right-radius": "25px",
        "border-right": "0",
        "background-color": "white",
        color: "black",
    });
    audioOptionContainerEle.appendChild(audioFileOptBtnEle);
    
    optionEle.appendChild(audioOptionContainerEle);

    var ytPlayerContainerEle = document.createElement("div");
    ytPlayerContainerEle.id = "party-time-ytplayer-container";
    ytPlayerContainerEle.classList.add("party-time-controls");

    var ytInputField = document.createElement("input");
    ytInputField.classList.add("party-time-controls");
    ytInputField.setAttribute("placeholder", "Paste youtube link");
    ytInputField.oninput = setupYTLink;
    ytPlayerContainerEle.appendChild(ytInputField);

    var getYtVidBtnEle = document.createElement("button");
    getYtVidBtnEle.classList.add("party-time-controls");
    getYtVidBtnEle.innerText = "Get Video";
    getYtVidBtnEle.onclick = getYTVid;
    ytPlayerContainerEle.appendChild(getYtVidBtnEle);

    // YT Player
    var ytPlayerEle = document.createElement("div");
    ytPlayerEle.id = "party-time-ytplayer";
    ytPlayerEle.classList.add("party-time-controls");
    objToStyles(ytPlayerEle, {
        display: "block",
    })
    ytPlayerContainerEle.appendChild(ytPlayerEle);

    optionEle.appendChild(ytPlayerContainerEle);

    var fileUploadEle = document.createElement("input");
    fileUploadEle.setAttribute("type", "file");
    fileUploadEle.id = "party-upload";
    fileUploadEle.classList.add("party-time-controls");
    fileUploadEle.onchange = handleAudioFile;
    objToStyles(fileUploadEle, {
        width: "150px",
        display: "none",
        "margin-right": "8px",
        "font-size": "12px",
        "background-color": "black",
        color: "white",
    });
    optionEle.appendChild(fileUploadEle);

    var autoPartyLabelEle = document.createElement("label");
    autoPartyLabelEle.setAttribute("for", "party-auto-party")
    autoPartyLabelEle.classList.add("party-time-controls");
    autoPartyLabelEle.innerText = "Auto Party";
    objToStyles(autoPartyLabelEle, {
        "font-weight": "bold",
        color: "white",
        "font-size": "12px"
    });
    optionEle.appendChild(autoPartyLabelEle);

    var autoPartyEle = document.createElement("input")
    autoPartyEle.setAttribute("type", "checkbox");
    autoPartyEle.id = "party-auto-party";
    autoPartyEle.classList.add("party-time-controls");
    autoPartyEle.onchange = handleAutoParty;
    optionEle.appendChild(autoPartyEle);

    var partyDebugLabelEle = document.createElement("label");
    partyDebugLabelEle.setAttribute("for", "party-debug")
    partyDebugLabelEle.classList.add("party-time-controls");
    partyDebugLabelEle.innerText = "Show Freq";
    objToStyles(partyDebugLabelEle, {
        "font-weight": "bold",
        color: "white",
        "font-size": "12px"
    });
    optionEle.appendChild(partyDebugLabelEle);

    var partyDebugEle = document.createElement("input");
    partyDebugEle.setAttribute("type", "checkbox");
    partyDebugEle.id = "party-debug";
    partyDebugEle.classList.add("party-time-controls");
    partyDebugEle.onchange = handleDebug;
    optionEle.appendChild(partyDebugEle);
    
    partyTimeContainer.appendChild(mainEle);
    partyTimeContainer.appendChild(optionEle);
    document.body.appendChild(partyTimeContainer);
}
function addPartyClasses(ele, classes) {
    var partyArray = cloneArray(classes);
    var partyClass = partyArray[getRandomInt(0, partyArray.length - 1)];
    ele.classList.add(partyClass);
    removeArrayItem(partyArray, partyClass);
    partyClass = partyArray[getRandomInt(0, partyArray.length - 1)];
    ele.classList.add(partyClass);
}


function setupPartyClasses(ele) {
    switch(ele.nodeName) {
        case "SELECT":
            addPartyClasses(ele, PARTY_TIME_CLASSES);
            break;
        case "TEXTAREA":
            addPartyClasses(ele, PARTY_TIME_CLASSES);
            break;
        case "INPUT":
            addPartyClasses(ele, PARTY_TIME_CLASSES);
            break;
        case "SVG":
            addPartyClasses(ele, PARTY_CONTAINER_CLASSES);
            break;
        case "IMG":
            addPartyClasses(ele, PARTY_CONTAINER_CLASSES);
            break;
        case "BUTTON":
            addPartyClasses(ele, PARTY_TIME_CLASSES);
            break;
        case "A":
            addPartyClasses(ele, PARTY_TEXT_CLASSES);
            break;
        case "P":
            addPartyClasses(ele, PARTY_TEXT_CLASSES);
            break;
        case "SPAN":
            addPartyClasses(ele, PARTY_TEXT_CLASSES);
            break;
        case "H1":
            addPartyClasses(ele, PARTY_TEXT_CLASSES);
            break;
        case "H2":
            addPartyClasses(ele, PARTY_TEXT_CLASSES);
            break;
        case "H3":
            addPartyClasses(ele, PARTY_TEXT_CLASSES);
            break;
        case "H4":
            addPartyClasses(ele, PARTY_TEXT_CLASSES);
            break;
        case "H5":
            addPartyClasses(ele, PARTY_TEXT_CLASSES);
            break;
        case "H6":
            addPartyClasses(ele, PARTY_TEXT_CLASSES);
            break;
        case "CAPTION":
            addPartyClasses(ele, PARTY_TEXT_CLASSES);
            break;
        case "TD":
            addPartyClasses(ele, PARTY_TIME_CLASSES);
            break;
        default:
            addPartyClasses(ele, PARTY_TIME_CLASSES);
            break;
    }
}

function containsPartyTimeClasses(ele) {
    let hasClass = false;
    for (var i = 0; i < PARTY_TIME_CLASSES.length; i++) {
        if (ele.classList.contains(PARTY_TIME_CLASSES[i])) hasClass = true;
    }

    return hasClass;
}

function removePartyTimeClasses(ele) {
    for (var i = 0; i < PARTY_TIME_CLASSES.length; i++) {
        if (PARTY_TIME_CLASSES[i] && ele.classList.contains(PARTY_TIME_CLASSES[i])) ele.classList.remove(PARTY_TIME_CLASSES[i]);
    }

    for (var j = 0; j < PARTY_TIME_FREQ_CLASSES.length; j++) {
        if (PARTY_TIME_FREQ_CLASSES[j] && ele.classList.contains(PARTY_TIME_FREQ_CLASSES[j])) ele.classList.remove(PARTY_TIME_FREQ_CLASSES[j]);
    }
}

var _cacheIndex = [];
var _cacheWidth = [];
var _cacheHeight = [];
var _cache = [];
var _cache2 = [];
var _cache3 = [];
var _cache4 = [];
let auto_party = false;
let debug_mode = false;
let is_playing = false;
let clear_styles = false;
let audioSource = null;
let analyser = null;
let animate;
let audio1;

var initSetup = function () {
    generateUI();
}

var createAudioStream = function (audioSrc) {
    console.log("audioSrc", audioSrc);
    audio1 = new Audio();
    if (partyTimeAudioOption === "file") {
        audio1.src = URL.createObjectURL(audioSrc);
    }
    // } else {
    //     audio1.src = audioSrc;
    // }
    console.log("audio1", audio1)
    console.log("audio1.src", audio1.src);
    audio1.loop = true;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioSource = audioCtx.createMediaElementSource(audio1);
    analyser = audioCtx.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 128;
}

var handleAudioFile = function(event) {
    var files = event.target.files;
    createAudioStream(files[0]);
}

var partyTimeCollapseState = false;
var togglePartyTimeOptions = function () {
    var partyTimeoptionsEl = document.getElementById("party-time-collapsible");
    var partyTimeOptionsCollapseBtn = document.getElementById("party-time-collapse-btn");

    if (partyTimeCollapseState) {
        partyTimeCollapseState = false;
        partyTimeOptionsCollapseBtn.style.setProperty("transform", "rotate(180deg)", "important");
        partyTimeoptionsEl.style.setProperty("display", "block", "important");
    } else {
        partyTimeCollapseState = true;
        partyTimeOptionsCollapseBtn.style.setProperty("transform", "rotate(0deg)", "important");
        partyTimeoptionsEl.style.setProperty("display", "none", "important");
    }
}

var partyTimeAudioOption = "yt";
var toggleAudioOption = function (type) {
    var audioFileOptBtnEle = document.getElementById("party-time-audio-file-option-btn");
    var ytOptBtnEle = document.getElementById("party-time-yt-option-btn");
    var audioFileEle = document.getElementById("party-upload");
    var YTPlayerEle = document.getElementById("party-time-ytplayer-container");
    partyTimeAudioOption = type;

    if (type === "file") {
        objToStyles(audioFileOptBtnEle, {
            "background-color": "purple",
            color: "white",
        });
        objToStyles(ytOptBtnEle, {
            "background-color": "white",
            color: "black",
        });
        audioFileEle.style.setProperty("display", "block", "important");
        YTPlayerEle.style.setProperty("display", "none", "important");
    }

    if (type === "yt") {
        objToStyles(audioFileOptBtnEle, {
            "background-color": "white",
            color: "black",
        });
        objToStyles(ytOptBtnEle, {
            "background-color": "purple",
            color: "white",
        });
        audioFileEle.style.setProperty("display", "none", "important");
        YTPlayerEle.style.setProperty("display", "block", "important");
    }
}

var handleAutoParty = function (event) {
    auto_party = event.target.checked;
}

var handleDebug = function (event) {
    debug_mode = event.target.checked;
}

var startParty = function () {
    const patyTimeButton = document.getElementById("party-time-button");

    analyser.fftSize = 128;

    if (audio1) audio1.pause();

    if (!audio1.src) return;

    if (is_playing) {
        audio1.pause();
        clearStyles();
        is_playing = false;
        clear_styles = true;
        patyTimeButton.innerText = "🎉 Party Time!";
        cancelAnimationFrame(animate);
        return;
    }

    patyTimeButton.innerText = "Stop The Party... 😔"

    is_playing = true;    

    audio1.play();
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    animate = function () {
        if (clear_styles) {
            clearStyles();
            return;
        }
        analyser.getByteFrequencyData(dataArray);
        partyTime(bufferLength, dataArray);
        requestAnimationFrame(animate);
    }

    animate();
};

var clearStyles = function () {
    var elements = document.querySelectorAll('*[class*="party-time"]:not(.party-time-controls)');
    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].removeAttribute("style");
        if (elements[i].classList.contains("party-time-baby")) {
            var elementsChildren = elements[i].querySelectorAll('*[class*="party-time"]:not(.party-time-controls)');
            for (var j = 0; j < elementsChildren.length; j++) removePartyTimeClasses(elementsChildren[j]);
        }
    }
    var debugs = document.querySelectorAll('.debug-freq');
    for (var j = 0, len = debugs.length; j < len; j++) {
        debugs[j].remove();
    }
    clear_styles = false;
    _cacheIndex = [];
    _cacheWidth = [];
    _cacheHeight = [];
    _cache = [];
    _cache2 = [];
    _cache3 = [];
    _cache4 = [];
}

var applyStyles = function (eles) {
    for (var i = 0, len = eles.length; i < len; i++) {
        var ele = eles[i];
        ele.style = {

        }
    }
}

var partyTime = function (bufferLength, dataArray) {
    const _dataArray = []
    for (var i = 0; i < bufferLength; i++) {
        if (dataArray[i] !== 0) _dataArray.push(dataArray[i]);
    }

    if (auto_party) {
        if (!document.body.classList.contains("party-time-bkgColor")) document.body.classList.add("party-time-bkgColor");
        if (!document.body.classList.contains("party-time-baby")) document.body.classList.add("party-time-baby");
    }

    var elements = document.querySelectorAll('*[class*="party-time"]:not(.party-time-controls)');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i]) {
            if (elements[i].classList.contains("party-time-baby")) {
                const partyChildren = elements[i].querySelectorAll('select:not(.debug-freq):not(.party-time-controls),textarea:not(.debug-freq):not(.party-time-controls),input:not(.debug-freq):not(.party-time-controls),svg:not(.debug-freq):not(.party-time-controls),img:not(.debug-freq):not(.party-time-controls),button:not(.debug-freq):not(.party-time-controls),a:not(.debug-freq):not(.party-time-controls),p:not(.debug-freq):not(.party-time-controls),span:not(.debug-freq):not(.party-time-controls),h1:not(.debug-freq):not(.party-time-controls),h2:not(.debug-freq):not(.party-time-controls),h3:not(.debug-freq):not(.party-time-controls),h4:not(.debug-freq):not(.party-time-controls),h5:not(.debug-freq):not(.party-time-controls),h6:not(.debug-freq):not(.party-time-controls),caption:not(.debug-freq):not(.party-time-controls),td:not(.debug-freq):not(.party-time-controls)');
                for (let k = 0; k < partyChildren.length; k++) {
                    if (partyChildren[k]) {
                        if (!containsPartyTimeClasses(partyChildren[k])) {
                            setupPartyClasses(partyChildren[k]);
                            const partyTimeFreqClass = PARTY_TIME_FREQ_CLASSES[getRandomInt(0, PARTY_TIME_FREQ_CLASSES.length - 1)];
                            if (partyTimeFreqClass) partyChildren[k].classList.add(partyTimeFreqClass);
                        }
                        vfx(k, partyChildren[k], bufferLength, _dataArray);
                    }
                }
            } else {
                vfx(i, elements[i], bufferLength, _dataArray);
            }
        }
    }
}

var vfx = function (index, ele, bufferLength, dataArray) {
    // Setup frequency
    if (!_cacheIndex[index]) _cacheIndex[index] = getRandomInt(0, bufferLength - 1) 
    let freqRange = (dataArray[_cacheIndex[index]] || dataArray[_cacheIndex[index]] !== 0) ? dataArray[_cacheIndex[index]] : dataArray[getRandomInt(0, bufferLength - 1)] ; // If not exist then randomize;
    if (ele.classList.contains("party-time-freq-low")) freqRange = getFreqRange(dataArray, "low");
    if (ele.classList.contains("party-time-freq-mid")) freqRange = getFreqRange(dataArray, "mid");
    if (ele.classList.contains("party-time-freq-high")) freqRange = getFreqRange(dataArray, "high");

    if (ele.classList.contains("party-time-color")) {
        const freq = Math.floor(freqRange / 100);
        const _changed = _cache[index] !== freq;
        if (_changed) {
            _cache[index] = freq;
            ele.style.setProperty('color', FUN_COLORS[getRandomInt(0, FUN_COLORS.length - 1)], 'important');
        }
    }

    if (ele.classList.contains("party-time-textShadow")) {
        const freq = Math.floor(freqRange / 100);
        const _changed = _cache3[index] !== freq;
        if (_changed) {
            _cache3[index] = freq;
            const textShadowColor = FUN_COLORS[getRandomInt(0, FUN_COLORS.length - 1)];
            ele.style.setProperty('color', '#FFFFFF', 'important');
            ele.style.setProperty('text-shadow', "0 0 "+(freqRange / 10)+"px #fff, 0 0 "+(freqRange / 9)+"px #fff, 0 0 "+(freqRange / 8)+"px " + textShadowColor + ", 0 0 "+(freqRange / 7)+"px " + textShadowColor + ", 0 0 "+(freqRange / 6)+"px " + textShadowColor +", 0 0 "+(freqRange / 5)+"px " + textShadowColor + ", 0 0 "+(freqRange / 4)+"px " + textShadowColor, 'important');
        }
    }

    if (ele.classList.contains("party-time-boxShadow")) {
        const freq = Math.floor(freqRange / 100);
        const _changed = _cache4[index] !== freq;
        if (_changed) {
            _cache4[index] = freq;
            const boxShadowColor = FUN_COLORS[getRandomInt(0, FUN_COLORS.length - 1)];
            ele.style.setProperty('box-shadow', "0 0 10px #fff, 0 0 20px #fff, 0 0 30px " + boxShadowColor + ", 0 0 40px " + boxShadowColor + ", 0 0 50px " + boxShadowColor +", 0 0 60px " + boxShadowColor + ", 0 0 70px " + boxShadowColor, 'important');
        }
    }

    if (ele.classList.contains("party-time-bkgColor")) {
        const freq2 = Math.floor(freqRange / 100);
        const _changed2 = _cache2[index] !== freq2;
        if (_changed2) {
            _cache2[index] = freq2;
            ele.style.setProperty('background-color', FUN_COLORS[getRandomInt(0, FUN_COLORS.length - 1)], 'important');
        }
    }

    if (ele.classList.contains("party-time-colorVolume")) {
        ele.style.setProperty('color', COLOR_FREQ[Math.floor(freqRange / 100)], 'important');
    }
    
    if (ele.classList.contains("party-time-fontSize")) {
        var fontSize = freqRange / 5;
        ele.style.setProperty('font-size', (fontSize <= 0 ? 10 : fontSize) + "px", 'important');
    }

    if (ele.classList.contains("party-time-width")) {
        if (!_cacheWidth[index]) _cacheWidth[index] = ele.offsetWidth;
        ele.style.setProperty('width', _cacheWidth[index] + (freqRange / 2) + "px", 'important');
    }

    if (ele.classList.contains("party-time-height")) {
        if (!_cacheHeight[index]) _cacheHeight[index] = ele.offsetHeight;
        ele.style.setProperty('height', _cacheHeight[index] + (freqRange / 2) + "px", 'important');
    }

    if (ele.classList.contains("party-time-posTop")) {
        ele.style.setProperty('position', 'relative', 'important');
        ele.style.setProperty('top', (freqRange / 5) + "px", 'important');
    }

    if (ele.classList.contains("party-time-posRight")) {
        ele.style.setProperty('position', 'relative', 'important');
        ele.style.setProperty('right', (freqRange / 5) + "px", 'important');
    }

    if (ele.classList.contains("party-time-posBottom")) {
        ele.style.setProperty('position', 'relative', 'important');
        ele.style.setProperty('bottom', (freqRange / 5) + "px", 'important');
    }

    if (ele.classList.contains("party-time-posLeft")) {
        ele.style.setProperty('position', 'relative', 'important');
        ele.style.setProperty('left', (freqRange / 5) + "px", 'important');
    }

    if (debug_mode) {
        const debugEleFreq = ele.querySelector(".debug-freq");
        if (debugEleFreq) {
            debugEleFreq.innerText = "Freq: " + freqRange + "Hz";
        } else {
            const _debugFreqEle = document.createElement("span");
            _debugFreqEle.classList.add("debug-freq");
            _debugFreqEle.style['display'] = "inline-block";
            _debugFreqEle.style['font-size'] = "12px";
            _debugFreqEle.style['padding'] = "4px";
            _debugFreqEle.style['background-color'] = "rgba(0,0,0,0.48)";
            _debugFreqEle.style['color'] = "#FFFFFF";
            _debugFreqEle.style['border-radius'] = "8px";
            _debugFreqEle.innerText = "Freq: " + freqRange + "Hz";
            ele.appendChild(_debugFreqEle);
        }
    } else {
        const debugEleFreq = ele.querySelector(".debug-freq");
        if (debugEleFreq) debugEleFreq.remove();
    }
}

var getFreqRange = function (dataArray, range) {
    switch(range) {
        case "low":
            return dataArray[dataArray.length - 1];
        case "mid":
            return dataArray[middleValue(0, dataArray.length - 1)];
        case "high":
            return dataArray[0];
    }
}

initSetup();
// createYTPlayer();