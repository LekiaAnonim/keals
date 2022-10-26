const $b2bc79db8d6ef99e$var$textContainer = document.querySelector("#my-typewriter");
let $b2bc79db8d6ef99e$var$count = 0;
let $b2bc79db8d6ef99e$var$index = 0;
let $b2bc79db8d6ef99e$var$currentText = "";
let $b2bc79db8d6ef99e$var$containerText = "";
let $b2bc79db8d6ef99e$var$direction = true;
const $b2bc79db8d6ef99e$export$245947e8fe008c97 = ({ texts: texts , letterPause: letterPause = 1200 , typeSpeed: typeSpeed = 0 , eraseSpeed: eraseSpeed = 100 , blinkSpeed: blinkSpeed = 300 , speed: speed = 200 ,  })=>{
    // Blink Cursor
    const blinkCursor = document.createElement("span");
    blinkCursor.textContent = "|";
    setInterval(()=>{
        blinkCursor.style.opacity = blinkCursor.style.opacity == 0 ? 1 : 0;
    }, blinkSpeed);
    const typing = ()=>{
        // Reset count after loop
        if ($b2bc79db8d6ef99e$var$count === texts.length) $b2bc79db8d6ef99e$var$count = 0;
        // Grab current text from array
        $b2bc79db8d6ef99e$var$currentText = texts[$b2bc79db8d6ef99e$var$count];
        // Start erasing when all letters completed
        if ($b2bc79db8d6ef99e$var$containerText.length === $b2bc79db8d6ef99e$var$currentText.length) $b2bc79db8d6ef99e$var$direction = false;
        // Start typing when letter length equals 1
        if ($b2bc79db8d6ef99e$var$containerText.length === 1) $b2bc79db8d6ef99e$var$direction = true;
        if ($b2bc79db8d6ef99e$var$direction) {
            // typing speed if available
            if (typeSpeed > 0) speed = typeSpeed;
            $b2bc79db8d6ef99e$var$containerText = $b2bc79db8d6ef99e$var$currentText.slice(0, $b2bc79db8d6ef99e$var$index++);
            $b2bc79db8d6ef99e$var$textContainer.textContent = $b2bc79db8d6ef99e$var$containerText;
            $b2bc79db8d6ef99e$var$textContainer.appendChild(blinkCursor);
            if ($b2bc79db8d6ef99e$var$containerText.length === $b2bc79db8d6ef99e$var$currentText.length) // If letterPause if defined
            {
                if (letterPause > 0) // Pause at last letter
                speed = letterPause;
            }
        } else {
            // Erase speed if available
            if (eraseSpeed > 0) // change speed to eraseSpeed
            speed = eraseSpeed;
            $b2bc79db8d6ef99e$var$containerText = $b2bc79db8d6ef99e$var$currentText.slice(0, $b2bc79db8d6ef99e$var$currentText.length - $b2bc79db8d6ef99e$var$index++);
            $b2bc79db8d6ef99e$var$textContainer.textContent = $b2bc79db8d6ef99e$var$containerText;
            $b2bc79db8d6ef99e$var$textContainer.appendChild(blinkCursor);
            // Move to next word when completed
            if ($b2bc79db8d6ef99e$var$containerText.length === 1) {
                $b2bc79db8d6ef99e$var$count++;
                $b2bc79db8d6ef99e$var$index = 0;
                $b2bc79db8d6ef99e$var$direction = true;
            }
        }
        setTimeout(typing, speed);
    };
    typing();
};


export {$b2bc79db8d6ef99e$export$245947e8fe008c97 as typeWriter};
//# sourceMappingURL=myTypewriter.js.map