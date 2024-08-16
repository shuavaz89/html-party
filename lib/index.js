function addPartyClasses(ele, classes) {
    var partyArray = cloneArray(classes);
    var partyClass = partyArray[getRandomInt(0, partyArray.length - 1)];
    ele.classList.add(partyClass);
    removeArrayItem(partyArray, partyClass);
    partyClass = partyArray[getRandomInt(0, partyArray.length - 1)];
    ele.classList.add(partyClass);
    const partyClassFreqScale = PARTY_TIME_FREQ_SCALE_CLASSES[getRandomInt(0, PARTY_TIME_FREQ_SCALE_CLASSES.length - 1)];
    if (partyClassFreqScale) ele.classList.add(partyClassFreqScale);
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

var partyTimeCollapseState = true;
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

var handleAutoParty = function (event) {
    auto_party = event.target.checked;
}

var handleDebug = function (event) {
    debug_mode = event.target.checked;
}

var startParty = function () {
    const patyTimeButton = document.getElementById("party-time-button");

    analyser.fftSize = 128;

    console.log(audio1.src)

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

    const freqScale = getFreqScale(ele.classList);

    if (ele.classList.contains("party-time-color")) {
        const freq = Math.floor(freqRange / freqScale);
        const _changed = _cache[index] !== freq;
        if (_changed) {
            _cache[index] = freq;
            ele.style.setProperty('color', FUN_COLORS[getRandomInt(0, FUN_COLORS.length - 1)], 'important');
        }
    }

    if (ele.classList.contains("party-time-textShadow")) {
        const freq = Math.floor(freqRange / freqScale);
        const _changed = _cache3[index] !== freq;
        if (_changed) {
            _cache3[index] = freq;
            const textShadowColor = FUN_COLORS[getRandomInt(0, FUN_COLORS.length - 1)];
            ele.style.setProperty('color', '#FFFFFF', 'important');
            ele.style.setProperty('text-shadow', "0 0 "+(freqRange / 10)+"px #fff, 0 0 "+(freqRange / 9)+"px #fff, 0 0 "+(freqRange / 8)+"px " + textShadowColor + ", 0 0 "+(freqRange / 7)+"px " + textShadowColor + ", 0 0 "+(freqRange / 6)+"px " + textShadowColor +", 0 0 "+(freqRange / 5)+"px " + textShadowColor + ", 0 0 "+(freqRange / 4)+"px " + textShadowColor, 'important');
        }
    }

    if (ele.classList.contains("party-time-boxShadow")) {
        const freq = Math.floor(freqRange / freqScale);
        const _changed = _cache4[index] !== freq;
        if (_changed) {
            _cache4[index] = freq;
            const boxShadowColor = FUN_COLORS[getRandomInt(0, FUN_COLORS.length - 1)];
            ele.style.setProperty('box-shadow', "0 0 10px #fff, 0 0 20px #fff, 0 0 30px " + boxShadowColor + ", 0 0 40px " + boxShadowColor + ", 0 0 50px " + boxShadowColor +", 0 0 60px " + boxShadowColor + ", 0 0 70px " + boxShadowColor, 'important');
        }
    }

    if (ele.classList.contains("party-time-bkgColor")) {
        const freq2 = Math.floor(freqRange / freqScale);
        const _changed2 = _cache2[index] !== freq2;
        if (_changed2) {
            _cache2[index] = freq2;
            ele.style.setProperty('background-color', FUN_COLORS[getRandomInt(0, FUN_COLORS.length - 1)], 'important');
        }
    }

    if (ele.classList.contains("party-time-colorVolume")) {
        ele.style.setProperty('color', COLOR_FREQ[Math.floor(freqRange / freqScale)], 'important');
    }
    
    if (ele.classList.contains("party-time-fontSize")) {
        var fontSize = freqRange / (freqScale / 20);
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

var getFreqScale = function (classes) {
    switch(true) {
        case classes.contains("party-time-freq-scale-10"):
            return 10;
        case classes.contains("party-time-freq-scale-20"):
            return 20;
        case classes.contains("party-time-freq-scale-30"):
            return 30;
        case classes.contains("party-time-freq-scale-40"):
            return 40;
        case classes.contains("party-time-freq-scale-50"):
            return 50;
        case classes.contains("party-time-freq-scale-60"):
            return 60;
        case classes.contains("party-time-freq-scale-70"):
            return 70;
        case classes.contains("party-time-freq-scale-80"):
            return 80;
        case classes.contains("party-time-freq-scale-90"):
            return 90;
        default: // party-time-freq-scale-100 | none
            return 100;
    }
}

initSetup();
// createYTPlayer();