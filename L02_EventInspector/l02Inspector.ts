namespace Inspector {
    //install load listener on window/document; load handleLoad
    window.addEventListener("load", handleLoad);
    
    let div0: HTMLDivElement = <HTMLDivElement> document.querySelector("#div0");
    let div1: HTMLDivElement = <HTMLDivElement> document.querySelector("#div1");
    let span: HTMLSpanElement = document.createElement("span");
    
    //handleLoad: install mouse move listener on document; install click- and keyup-listeners on document, body and all divs
    function handleLoad (): void {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("mousemove", setInfoBox);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("mousemove", setInfoBox);
        div1.addEventListener("click", logInfo);
        div1.addEventListener("keyup", logInfo);
    }
    
    //mouse move -> setInfoBox; _event:MouseEvent -> display mouse position and event's target in span -> set span style only at current position
    function setInfoBox(_event: MouseEvent): void {
        _event.stopPropagation();
        if (document.body.contains(span) == true) {
            document.body.removeChild(span); }
        span.innerText = _event.currentTarget  + "  position left " + _event.pageX + " px" +   "  position top " + _event.pageY + " px";
        span.style.left = _event.pageX  + 9 + "px";
        span.style.top = _event.pageY + 11  + "px";
        span.setAttribute("class", "span");
        document.body.appendChild (span);
    }
    
    //key up -> logInfo: if _click -> console Output
    function logInfo(_event: Event): void {
        _event.stopPropagation();
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);   
    }
    
    }