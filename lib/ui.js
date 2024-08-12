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

    var fileUploadEle = document.createElement("input");
    fileUploadEle.setAttribute("type", "file");
    fileUploadEle.id = "party-upload";
    fileUploadEle.classList.add("party-time-controls");
    fileUploadEle.onchange = handleAudioFile;
    objToStyles(fileUploadEle, {
        width: "150px",
        "margin-right": "8px",
        "font-size": "12px",
    });
    mainEle.appendChild(fileUploadEle);

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
    optionEle.style.setProperty('display', 'none', 'important');
    optionEle.style.setProperty('padding', "8px", "important");

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
   
    // YT Player
    // partyTimeContainer.innerHTML += '<div id="player"></div>'
    
    partyTimeContainer.appendChild(mainEle);
    partyTimeContainer.appendChild(optionEle);
    document.body.appendChild(partyTimeContainer);

    // setTimeout(() => {
    //     createYT('e-syzbglE6g');
    // }, 3000);
}