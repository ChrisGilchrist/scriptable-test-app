// First load the items and wait until it's done
let items = await loadItems();

if (config.runsInWidget) {
    // Tell the widget on the Home Screen to show our ListWidget Instance.
    
    // Get the first item in the data list
    let item = items.data[0];
    let widget = await createWidget(item);
    //createWidget();
    Script.setWidget(widget);
}

// Function to create widget
async function createWidget(item) {
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

    let data_url = "https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation;areaName=england&structure={%22date%22:%22date%22,%22newCases%22:%22newCasesByPublishDate%22}";
    let req = new Request(url);
    let json = await req.loadJSON();
    return json.items();
    

}
