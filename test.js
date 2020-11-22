// First load the items and wait until it's done
//let items = await loadItems();

if (config.runsInWidget) {
    // Tell the widget on the Home Screen to show our ListWidget Instance.
    //let widget = await createWidget(items);
    createWidget();
    Script.setWidget(widget);
}

// Function to create widget
function createWidget(items) {
    let widget = new ListWidget();
    widget.backgroundColor = new Color("#b00a0f");
    widget.addSpacer();

    let title = 'Hello World';
    let titleElement = widget.addText(title);
    titleElement.font = OFont.boldSystemFont(title);
    titleElement.textColor = Color.white();
    
    // Adds spacing under the title
    widget.addSpacer(8);

    return widget;
};

// Function to load the data displayed in the widget
async function loadItems() {



}
