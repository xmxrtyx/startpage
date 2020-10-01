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