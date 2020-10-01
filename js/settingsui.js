/**
 * Handle the settings UI from this file.
 * 
 * The dynamic creation of the UI as well as the saving
 * of the data.
 * 
 * The UI should be able to read the config and create the UI
 * accordingly. It should be able to read the changes and
 * accordingly return an updated config.
 */


// CONSTANTS //


function createSwitch($name, $currentValue) {
    /**
     * @desc Create a switch that works like a boolean
     * 
     * Create switch that will be able to store only two
     * values, true or false.
     * 
     * This is basically for those options in the config
     * that accepts a bool.
     * 
     * @param string $name - Name of the element that is to be created
     * @param boolean $currentValue - Current value of the switch
     * @return HTMLDivElement - The element that needs to be
     *                          appended to the parent
     */
    const switchEl = document.createElement("input");
    const switchContainer = document.createElement("div");
    const switchName = document.createElement("h2");
    
    switchEl.setAttribute("type", "checkbox");
    switchEl.setAttribute("checked", $currentValue);
    switchName.innerText = $name;

    switchContainer.appendChild(switchName);
    switchContainer.appendChild(switchEl);

    return switchContainer;
}

function createText($name, $currentValue) {
    /**
     * This is for those options in the config that is a
     * string. An input container will be created that will
     * hold the current value and will be allowed to be changed.
     * 
     * @desc Create input box for string kinda config options
     * @param string $name - Name of the element to be created
     * @param string $currentValue - Current value of the element
     * @return HTMLDivElement - The element that needs to be appended
     *                          to the parent
     */
    const textContainer = document.createElement("div");
    const textEl = document.createElement("input");
    const textName = document.createElement("h2");

    textEl.setAttribute("type", "text");
    textEl.value = $currentValue;
    textName.innerText = $name;

    textContainer.appendChild(textName);
    textContainer.appendChild(textEl);

    return textContainer;
}