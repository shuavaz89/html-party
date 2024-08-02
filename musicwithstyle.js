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

const PARTY_TIME_CLASSES = [
    "party-time-color",
    "party-time-textShadow",
    "party-time-b oxShadow",
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function middleValue(a, b) {
    return Math.round((a+b)/2);
}

const _cacheWidth = [];
const _cacheHeight = [];
const _cache = [];
const _cache2 = [];
const _cache3 = [];
const _cache4 = [];
let debug_mode = false;
let is_playing = false;
let clear_styles = false;
let audioSource = null;
let analyser = null;
let animate;
let audio1;

var initSetup = function () {
    const partyTimeContainer = document.createElement("div");
    partyTimeContainer.id = "party-time-container";
    partyTimeContainer.classList = "party-time-controls";
    partyTimeContainer.style['color'] = 'white';
    partyTimeContainer.style['position'] = 'fixed';
    partyTimeContainer.style['top'] = '16px';
    partyTimeContainer.style['right'] = '16px';
    partyTimeContainer.style['background-color'] = "rgba(0,0,0,0.24)";
    partyTimeContainer.style['padding'] = "8px";
    partyTimeContainer.style['border-radius'] = "8px";

    // Setup Party Time Button
    const buttonEle = document.createElement("button");
    buttonEle.innerText = "🎉 Party Time!";
    buttonEle.id = "party-time-button";
    buttonEle.classList = "party-time-controls";
    buttonEle.style['margin-right'] = "8px";
    buttonEle.style['background-color'] = "purple";
    buttonEle.style['color'] = "white";
    buttonEle.style['cursor'] = "pointer";
    buttonEle.style['padding'] = "8px";
    buttonEle.style['border'] = "1px solid violet";
    buttonEle.style['border-radius'] = "8px";
    buttonEle.onclick = startParty;
    partyTimeContainer.appendChild(buttonEle);

    const fileUploadEle = document.createElement("input");
    fileUploadEle.setAttribute("type", "file");
    fileUploadEle.id = "party-upload";
    fileUploadEle.classList = "party-time-controls";
    fileUploadEle.style['margin-right'] = "8px";
    fileUploadEle.onchange = handleAudioFile;
    partyTimeContainer.appendChild(fileUploadEle);

    const debugLabelEle = document.createElement("label");
    debugLabelEle.setAttribute("for", "party-debug");
    debugLabelEle.innerText = "Show Freq";
    debugLabelEle.style['font-weight'] = "bold";
    partyTimeContainer.appendChild(debugLabelEle);

    const debugEle = document.createElement("input");
    debugEle.setAttribute("type", "checkbox");
    debugEle.id = "party-debug";
    debugEle.classList = "party-time-controls";
    debugEle.onchange = handleDebug;
    partyTimeContainer.appendChild(debugEle);

    document.body.appendChild(partyTimeContainer);
}

var handleAudioFile = function(event) {
    var files = event.target.files;
    audio1 = new Audio();
    audio1.src = URL.createObjectURL(files[0]);
    audio1.loop = true;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioSource = audioCtx.createMediaElementSource(audio1);
    analyser = audioCtx.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioCtx.destination);

    analyser.fftSize = 128;
}

var handleDebug = function (event) {
    debug_mode = event.target.checked;
}

var startParty = function () {
    const patyTimeButton = document.getElementById("party-time-button");

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
}

var applyStyles = function (eles) {
    for (var i = 0, len = eles.length; i < len; i++) {
        var ele = eles[i];
        ele.style = {

        }
    }
}

var partyTime = function (bufferLength, dataArray) {
    var elements = document.querySelectorAll('*[class*="party-time"]:not(.party-time-controls)');
    for (let i = 0; i < bufferLength; i++) {
        if (elements[i]) {
            vfx(i, elements[i], bufferLength, dataArray);
        }
    }

    for (let j = 0; j < elements.length; j++) {
        if (elements[j].classList.contains("party-time-baby")) {
            const partyChildren = elements[j].querySelectorAll('*:not(.debug-freq)');
            for (let k = 0; k < bufferLength; k++) {
                if (partyChildren[k]) {
                    if (!containsPartyTimeClasses(partyChildren[k])) {
                        partyChildren[k].classList.add(PARTY_TIME_CLASSES[getRandomInt(0, PARTY_TIME_CLASSES.length - 1)]);
                        const partyTimeFreqClass = PARTY_TIME_FREQ_CLASSES[getRandomInt(0, PARTY_TIME_FREQ_CLASSES.length - 1)];
                        if (partyTimeFreqClass) partyChildren[k].classList.add(partyTimeFreqClass);
                    }
                    vfx(k, partyChildren[k], bufferLength, dataArray);
                }
            }
        }
    }
}

var vfx = function (index, ele, bufferLength, dataArray) {
    // Setup frequency
    let freqRange = dataArray[index];
    if (ele.classList.contains("party-time-freq-low")) freqRange = getFreqRange(bufferLength, dataArray, "low");
    if (ele.classList.contains("party-time-freq-mid")) freqRange = getFreqRange(bufferLength, dataArray, "mid");
    if (ele.classList.contains("party-time-freq-high")) freqRange = getFreqRange(bufferLength, dataArray, "high");

    if (ele.classList.contains("party-time-color")) {
        const freq = Math.floor(freqRange / 100);
        const _changed = _cache[index] !== freq;
        if (_changed) {
            _cache[index] = freq;
            ele.style["color"] = FUN_COLORS[getRandomInt(1, FUN_COLORS.length - 1)];
        }
    }

    if (ele.classList.contains("party-time-textShadow")) {
        const freq = Math.floor(freqRange / 100);
        const _changed = _cache3[index] !== freq;
        if (_changed) {
            _cache3[index] = freq;
            const textShadowColor = FUN_COLORS[getRandomInt(1, FUN_COLORS.length - 1)];
            ele.style['color'] = "#FFFFFF";
            ele.style['text-shadow'] = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px " + textShadowColor + ", 0 0 40px " + textShadowColor + ", 0 0 50px " + textShadowColor +", 0 0 60px " + textShadowColor + ", 0 0 70px " + textShadowColor;

        }
    }

    if (ele.classList.contains("party-time-boxShadow")) {
        const freq = Math.floor(freqRange / 100);
        const _changed = _cache4[index] !== freq;
        if (_changed) {
            _cache4[index] = freq;
            const boxShadowColor = FUN_COLORS[getRandomInt(1, FUN_COLORS.length - 1)];
            ele.style['box-shadow'] = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px " + boxShadowColor + ", 0 0 40px " + boxShadowColor + ", 0 0 50px " + boxShadowColor +", 0 0 60px " + boxShadowColor + ", 0 0 70px " + boxShadowColor;
        }
    }

    if (ele.classList.contains("party-time-bkgColor")) {
        const freq2 = Math.floor(freqRange / 100);
        const _changed2 = _cache2[index] !== freq2;
        if (_changed2) {
            _cache2[index] = freq2;
            ele.style["background-color"] = FUN_COLORS[getRandomInt(1, FUN_COLORS.length - 1)];
        }
    }

    if (ele.classList.contains("party-time-colorVolume")) {
        ele.style["color"] = COLOR_FREQ[Math.floor(freqRange / 100)];
    }
    
    if (ele.classList.contains("party-time-fontSize")) {
        var fontSize = freqRange / 10;
        ele.style["font-size"] = (fontSize <= 0 ? 10 : fontSize) + "px";
    }

    if (ele.classList.contains("party-time-width")) {
        if (!_cacheWidth[index]) _cacheWidth[index] = ele.offsetWidth;
        ele.style["width"] = _cacheWidth[index] + (freqRange / 2) + "px";
    }

    if (ele.classList.contains("party-time-height")) {
        if (!_cacheHeight[index]) _cacheHeight[index] = ele.offsetHeight;
        ele.style["height"] = _cacheHeight[index] + (freqRange / 2) + "px";
    }

    if (ele.classList.contains("party-time-posTop")) {
        ele.style["position"] = "relative";
        ele.style["top"] = (freqRange / 10) + "px";
    }

    if (ele.classList.contains("party-time-posRight")) {
        ele.style["position"] = "relative";
        ele.style["right"] = (freqRange / 10) + "px";
    }

    if (ele.classList.contains("party-time-posBottom")) {
        ele.style["position"] = "relative";
        ele.style["bottom"] = (freqRange / 10) + "px";
    }

    if (ele.classList.contains("party-time-posLeft")) {
        ele.style["position"] = "relative";
        ele.style["left"] = (freqRange / 10) + "px";
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

var getFreqRange = function (bufferLength, dataArray, range) {
    const _dataArray = [];
    for (var i = 0; i < bufferLength; i++) {
        if (dataArray[i] !== 0) _dataArray.push(dataArray[i]);
    }
    
    switch(range) {
        case "low":
            return _dataArray[_dataArray.length - 1];
        case "mid":
            return _dataArray[middleValue(0, _dataArray.length - 1)];
        case "high":
            return _dataArray[0];
    }
}

initSetup();
