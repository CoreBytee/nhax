async function testEnabled() {
    return ((await (await fetch("https://raw.githubusercontent.com/CoreBytee/nhax/main/enabled.json")).json()).enabled != true)
}

        

async function testforload() {
    if ( testEnabled() == true ) {
        console.log("[nhax] Not enabled, exiting...");
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        while (true) {
            for (let i = 0; i < 360; i++) {
                document.body.style.setProperty("-webkit-transform", `rotate(${i}deg)`, null);
                await sleep(2)
            }
        }
    }

    if ( document.getElementById("pageHL") ) {
        var script = document.createElement('script');
        script.src = chrome.runtime.getURL("inject.js");
        document.head.appendChild(script);
    }
}

window.onload = testforload
