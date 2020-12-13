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





/***
 * Script to work out how many ferries there currently are running in torpoint
 */


(async () => {
    const response = await fetch('https://www.tamarcrossings.org.uk/#torpoint-ferry');
    const text = await response.text();
    const doc = new DOMParser().parseFromString(text, "text/html");
    
    // Get the date time on the site for reference
    const timeStamp = doc.getElementsByClassName('last-update-ferry')[0].innerHTML;
    
    // Get the westbound ferry status
    const westBoundFerry = doc.getElementsByClassName('status-for-ferry-west')[0].getElementsByClassName('status-text-block')[0].getElementsByClassName('status-text')[0].innerHTML;
    
    // Get the eastboundferry status
    const eastBoundFerry = doc.getElementsByClassName('status-for-ferry-east')[0].getElementsByClassName('status-text-block')[0].getElementsByClassName('status-text')[0].innerHTML;
  
    // Set the divs
    document.getElementById('timeStamp').innerHTML = `<b>Last Status:</b> ${timeStamp}`;
    document.getElementById('westBoundStatus').innerHTML = `<b>Devonport Status:</b> ${westBoundFerry}`;
    document.getElementById('eastBoundStatus').innerHTML = `<b>Torpoint Status:</b> ${eastBoundFerry}`;
  })();




