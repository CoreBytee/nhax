console.log("injected")

function Change(Object) {
    var event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });
      
    Object.dispatchEvent(event);
}

if (document.getElementsByClassName("hstyp1")[0]) {
    document.getElementsByClassName("hstyp1")[0].remove()
}

TitleBar = document.getElementById("pageHL")
HackBar = TitleBar.cloneNode(true)
TitleBar.parentElement.appendChild(HackBar)

HackBar.setAttribute("class", HackBar.getAttribute("class") + " hstyp1")
HackBar.innerText = "Theorie"
HackBar.setAttribute("style", HackBar.getAttribute("style") + " background-image: url() !important; color: black; background-color: white;")


var QuestionName = null

for (Var in globalThis) {
    if (Var.startsWith("exercise")) {
        QuestionName = Var
    }
}

var Question = globalThis[QuestionName]

console.log(Question)


function executeaction() {
    Question.showCorrectAnswer()
    Question.showCorrectAnswer()
    $(".BTN.okBtn").removeClass("inactive");
    //for (Index in Question.items) {
    //    ItemData = Question.items[Index]
    //    console.log(ItemData)
    //    console.log(Index)
    //    var Obj = document.getElementById(ItemData.id)
    //    if (ItemData.targetText) {
    //        Obj.value = ItemData.targetText.split("|")[0]
    //        Change(Obj)
    //    }
    //    if (ItemData.targetSelection) {
    //        Obj.children[0].click()
    //    }
    //    if (ItemData.exercise.type == 6) {
    //        console.log("dd")
    //    }
    //}
}

HackBar.addEventListener("click", executeaction)
