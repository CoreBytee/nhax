
function loaded() {
    console.log("run")

    if (document.getElementsByClassName("hstyp1")[0]) {
        document.getElementsByClassName("hstyp1")[0].remove()
    }

    TitleBar = document.getElementById("pageHL")
    HackBar = TitleBar.cloneNode(true)
    TitleBar.parentElement.appendChild(HackBar)

    HackBar.setAttribute("class", HackBar.getAttribute("class") + " hstyp1")
    HackBar.innerText = "Theorie"
    HackBar.setAttribute("style", HackBar.getAttribute("style") + " background-image: url() !important; color: black; background-color: yellow;")
    //hstyp1

    
    async function executeaction() {
        console.log("wadawraw");

        ScriptList = document.getElementsByTagName("head")[0].getElementsByTagName("script")
        ScriptData = ScriptList[ScriptList.length - 1].innerText;

        ScriptLines = ScriptData.split(";");
        console.log(ScriptLines)

        for (const Line of ScriptLines) {
            if (Line.split(".addItem(").length == 2) {
                SplitLine = Line.split(".addItem(")[1]
                SplitData = SplitLine.split("\",\"")
                AnswerName = SplitData[0].split("\"")[1]
                AnswerData = SplitData[1]
                //.slice(0, SplitData[1].length - 2).split("|")[0]
                console.log(AnswerName);
                console.log(AnswerData);

                console.log(document.getElementById(AnswerName))
                console.log(document.getElementById(AnswerName).nodeName)

                if (document.getElementById(AnswerName).nodeName == "TEXTAREA") {
                    
                } else if (document.getElementById(AnswerName).nodeName == "INPUT") {
                    document.getElementById(AnswerName).setAttribute("value", AnswerData.split("|")[0])
                    document.getElementById(AnswerName).dispatchEvent(new Event('input'))
                }

                
                

            }
        };


    }

    HackBar.addEventListener("click", executeaction)
}


function testforload() {
    if ( document.getElementById("pageHL") ) {

        var script = document.createElement('script');
        script.src = chrome.runtime.getURL("inject.js");
        document.head.appendChild(script);


        //loaded()
    }
}

window.onload = testforload
