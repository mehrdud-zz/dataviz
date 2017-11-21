var labelType, useGradients, nativeTextSupport, animate;

(function () {



    var ua = navigator.userAgent,
        iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
        typeOfCanvas = typeof HTMLCanvasElement,
        nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
        textSupport = nativeCanvasSupport
            && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
    //I'm setting this based on the fact that ExCanvas provides text support for IE
    //and that as of today iPhone/iPad current text support is lame
    labelType = (!nativeCanvasSupport || (textSupport && !iStuff)) ? 'Native' : 'HTML';
    nativeTextSupport = labelType == 'Native';
    useGradients = nativeCanvasSupport;
    animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
    elem: false,
    write: function (text) {
        if (!this.elem)
            this.elem = document.getElementById('log');
        this.elem.innerHTML = text;
        this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
    }
};



var rawData2 =

    {
        "system": [
            {
                "Name": "AutoInAPI",
                "Description": "AutoIn API receives bank entries posted by Banking Robots or human, and passes items to BankImportAPI.",
                "Type": "API",
                "Layer": "DMZ",
                "SoftwareDiagram": "http://teams.worldpay.local/sites/cats/iad-gs/Documents/Products%20and%20Projects/WPAP/Platform/Technical%20Capabilities/AutoInAPI/AutoInAPI%20-%20HLV.png",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "Bankout",				
				"Product": "N/A",
				"Design conerns": "", "used": false,
				"Functionality": "Account statement entries"				
            },
            {
                "Name": "MAS",
                "Description": "Merchant Administration System (MAS) allows customers to view and manage their virtual currency accounts.  Customers can also convert their credits to any currency, and transfer to any bank account in the world.",
                "Type": "WebApp",
                "Layer": "DMZ",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "Merchant",
				"Design conerns": "", "used": false,
				"Functionality": "Account balance,Bank-out,FX rate,Settlement"				
            },
            {
                "Name": "MerchantAPI",
                "Description": "Merchant API is the only public API offered by WPAP. Customers integrate with MechantAPI for a seamless integration.",
                "Type": "API",
                "Layer": "DMZ",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "Merchant",
				"Design conerns": "", "used": false,
				"Functionality": "* APM transaction,Bank-out transactions,Bank details templates,WP bank details,Refunds "				
            },
            {
                "Name": "OneClick",
                "Description": "OneClick integrates with 3rd party payment method  (e.g. iDeal or Alipay) to receive money from shoppers.",
                "Type": "WebApp",
                "Layer": "DMZ",
                "SoftwareDiagram": "http://teams.worldpay.local/sites/cats/iad-gs/Documents/Products%20and%20Projects/WPAP/Platform/Technical%20Capabilities/OneClick/OneClick%20-%20HLV.png",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "OneClick",
				"Design conerns": "", "used": false,
				"Functionality": "APM integration"				
            },
            {
                "Name": "TM",
                "Description": "Treasury Management provides a platform for Worldpay users to manage products configuration, manage WP currency accounts, on-boarding customers, and process bank-out batches.",
                "Type": "WebApp",
                "Layer": "DMZ",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "Treasury",
				"Design conerns": "", "used": false,
				"Functionality": "* Bank-out management,Report management,Invoice management,APM settings,Bank settings,Schedule jobs,Merchant configuration"				
            },
            {
                "Name": "BankImportAPI",
                "Description": "BankImportAPI processes bank account entries passed by AutoInAPI  and stores entries into EPACS database.",
                "Type": "API",
                "Layer": "Core",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "N/A",
				"Design conerns": "", "used": false,
				"Functionality": "Account statement entries"				
            },
            {
                "Name": "EPACSAPI",
                "Description": "EPACS API is the core API of WPAP. It accommodates most of business logic and save records into EPACS database.",
                "Type": "API",
                "Layer": "Core",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "Backend",
				"Design conerns": "", "used": false,
				"Functionality": "MIS reports"				
            },
            {
                "Name": "MISAPI",
                "Description": "MISAPI connects EPACS MIS database and generates offline reports for internal and external users.",
                "Type": "API",
                "Layer": "Core",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "Reporting",
				"Design conerns": "", "used": false,
				"Functionality": ""				
            },
            {
                "Name": "InvoiceAPI",
                "Description": "Invoice API retrieves Invoice and passes records to TM for users to download invoices. ",
                "Type": "API",
                "Layer": "Core",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "Backend",				
				"Product": "Backend",
				"Design conerns": "", "used": false,
				"Functionality": ""				
            },			
            {
                "Name": "OneClickAPI",
                "Description": "OneClick API is mainly used by OneClick to retrieve and save records into EPACS database.",
                "Type": "API",
                "Layer": "Core",
                "SoftwareDiagram": "http://teams.worldpay.local/sites/cats/iad-gs/Documents/Products%20and%20Projects/WPAP/Platform/Technical%20Capabilities/OneClick/OneClick%20-%20HLV.png",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "OneClick",				
				"Product": "OneClick",
				"Design conerns": "", "used": false,
				"Functionality": "APM API"				
            },            
            {
				"Name": "PaymentMehtodAPI",
                "Description": "PaymentMethodAPI is designed to manage any country and currency combination offered by APMs.",                
                "Type": "API",
                "Layer": "Core",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "",
				"Design conerns": "SOP compliance",
				"Functionality": "APM- countries and currencies combiantion ????"				
            },
            {
                "Name": "AlertingManager",
                "Description": "AlertingManager was created as a product that would aggregate transaction data for the purpose of creating on-the-fly business intelligence driven alerting.",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "",
				"Design conerns": "", "used": false,
				"Functionality": ""				
            },
            {
                "Name": "AutoInsManager",
                "Description": "AutoInsManager searches for a unique reference, identifies the transaction owner, and move funds to the right account.",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "",
				"Design conerns":"Single thread",
				"Functionality": "Identify transactions from account statements"			
            },
            {
                "Name": "EPACSManager",
                "Description": "EPACS Manager sends user registration emails.",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "",
				"Design conerns":"Can be retired",
				"Functionality": "Send user registration emails"
            },
            {
                "Name": "ExecutionManager",
                "Description": "ExecutionManager creates account movements and generate events (e.g. Notification event)",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "",
				"Design conerns":"Single point of failure,  this is a single thread process. There is a strong dependency between this app and half of AP apps. ",
				"Functionality": "Creates account movements, Generates events (e.g. notification, pay-out)"				
            },
            {
                "Name": "FilePickupAgent",
                "Description": "The File Pickup Agent is a Windows Service which implements the transfer of files through the concept of a “watcher”. A watcher is set up to poll a source location for new files on a configurable time interval. Multiple “watchers” can be set up in the File Pickup Agent, each with different configuration settings.",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "Backend",				
				"Product": "",
				"HLD": "http://teams.worldpay.local/sites/cats/iad-gs/_layouts/15/DocIdRedir.aspx?ID=HHFPTVYUPR6H-315-2634",
				"Design conerns": "", "used": false,
				"Functionality": "Moves files from A to B"				
            },
            {
                "Name": "MISReportsManager",
                "Description": "MISReprotsManager create offline reports for internal and external users.",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "Accounting",				
				"Product": "",
				"Design conerns": "", "used": false,
				"Functionality": "Create predefined reports"				
            },
            {
                "Name": "NotificationManager",
                "Description": "NotificationsManager is a process that polls for notifications (in the DB) to be sent out to merchants",
                "Type": "WindowsService",
                "Layer": "AppServer",                
				"BusinessFlowDiagram": "http://teams.worldpay.local/sites/cats/iad-gs/_layouts/15/DocIdRedir.aspx?ID=HHFPTVYUPR6H-315-3979",				
				"Domain": "Merchant",
				"Product": "Pay out",
				"Design conerns":"Single thread, Cannot have two notification mangers running at the same time",
				"Functionality": "Sends notifications to merchants"				
            },
            {
                "Name": "OneClickManager",
                "Description": "OneClick Manager check transactions status with APMs.",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "http://teams.worldpay.local/sites/cats/iad-gs/Documents/Products%20and%20Projects/WPAP/Platform/Technical%20Capabilities/OneClick/OneClick%20-%20HLV.png",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "OneClick",
				"Design conerns":"Mixed features and multiple thread continuously polling data from DB",
				"Functionality": "Checks transaction status with APMs, Downloads APM reconciliation reports, Downloads APM reconciliation reports"				
            },
            {
                "Name": "PayoutManager",
                "Description": "Payout Manager validates bank-out times (what??), finds bank-out route, and generate bank files. ",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "Bank",				
				"Product": "Bank out",
				"Design conerns":"Single thread, multiple features are put inside this app",
				"Functionality": "Validate pay-out items, Check merchant liquidity funds, Block pay-out items, Find best pay-out routes, Generate bank files"				
            },
            {
                "Name": "RealtimePayoutManager",
                "Description": "The component is used for the realtime payouts such as refunds or payouts that require realtime processing. A refund is a reversal of a successful transaction, processed by our system. Every refund has to interact with an APM API in order to perform the refund/payout and afterwards to update our system records. The RealTimePayoutManager component is the one responsible for the APM integration in this context. The payout process is complex flow within our platform, several components interact in order to achieve this such as: RefundsManager, PayoutManager, ExecutionManager, RealTimePayoutManager, MAS. These components will not be detailed here, instead the flow will be presented with emphasis on the RealTimePayoutManager.",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "http://teams.worldpay.local/sites/cats/iad-gs/_layouts/15/DocIdRedir.aspx?ID=HHFPTVYUPR6H-315-3977",
				"ComponentDiagram": "",
				"Domain": "APM",				
				"Product": "APM?",
				"Design conerns":"Single thread",
				"Functionality": "APM Refund, APM Pay-out"				
            },
            {
                "Name": "RefundsManager",
                "Description": "RefundsManager is an agent that is used to validate refund requests performed via the MerchantAPI. Refunds perfomed from MAS do reach RefundsManager. The component validates the refund request based on multiple rules such as: has a corresponding statement item, has not already been refunded, the corresponding payment type is within the allowed types and so on. Along with the validations the component can delay the processing of the refund. On top of these features, the component prepares the corresponding payout for processing. Further down the line, the created item is then picked up by PayoutManager for processing. This component does not interact with the APM, and at the point the refund reaches the RefundsManager, no transaction has been created. ",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "http://teams.worldpay.local/sites/cats/iad-gs/Documents/Products%20and%20Projects/WPAP/Platform/Architecture/DDD/RefundBusinessFlowDiagram.png",
				"ComponentDiagram": "http://teams.worldpay.local/sites/cats/iad-gs/Documents/Products%20and%20Projects/WPAP/Platform/Business%20Capabilities/Refund/WPAP%20Refund%20Flow.png",
				"HLD": "http://teams.worldpay.local/sites/cats/iad-gs/_layouts/15/DocIdRedir.aspx?ID=HHFPTVYUPR6H-315-2818",
				"Domain": "Pay out",				
				"Product": "",
				"Design conerns": "", "used": false,
				"Functionality": "Valiate refund requests"				
            },
            {
                "Name": "ReportsManager",
                "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "Report",				
				"Product": "Reporting",
				"Design conerns": "", "used": false,
				"Functionality": "Process report orders via MAS, Generate reports"
            },
            {
                "Name": "ScheduleManager",
                "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "Backend",				
				"Product": "Backend",
				"Design conerns": "", "used": false,
				"Functionality": "Schedule tasks, Generate settlement reports"
            },
            {
                "Name": "ScreeningManager",
                "Description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "Risk and Compliance",				
				"Product": "Backend",
				"Design conerns": "", "used": false,
				"Functionality": "Integrate with 3rd party to screen names (OFAX), Enhance payout items"				
            },
            {
                "Name": "TransmissionBroker",
                "Description": "The Transmission Broker is a generic process for handling the processing of any file type and is not specifically designed for Bankouts",
                "Type": "WindowsService",
                "Layer": "AppServer",
                "SoftwareDiagram": "",
				"BusinessFlowDiagram": "",
				"ComponentDiagram": "",
				"Domain": "",				
				"Product": "Backend",
				"Design conerns": "", "used": false,
				"Functionality": "Process pay-out request files via SFTP, Process Barclay account statement for corporate funding"			
            }
        ]
    }


var colourPalettes = [
    {
        "palette": [
            { "colour": "#b41437" },
            { "colour": "#007867" },
            { "colour": "#393939" },
            { "colour": "#919191" }		
        ]
    },

    {
        "palette": [
			{ "colour": "#b41437" },
            { "colour": "#007867" },
            { "colour": "#393939" },
            { "colour": "#919191" }		
        ]
    }
];


function getUniqueValues(sourceArray, propertyName) {
    var uniqueArray = [];
	
	//because my javascript is poor!
	var lookupArray = [];
	console.log("Getting unique values for " + propertyName  + "in an array with length of"+ sourceArray.length);
	var counter = 0;
    for (index = 0; index < sourceArray.length; index++) {
        var propertyValue = sourceArray[index][propertyName];
        if (!lookupArray[propertyValue]){
            lookupArray[propertyValue] = propertyValue;
			uniqueArray[counter] = propertyValue;
			console.log("Number found: " + propertyValue);
			counter++;
		}
    }
	
	console.log("Number of unique items found "+ uniqueArray.length);
    return lookupArray;
}

function shapeRawData(sourceArray, propertyName, secondaryDataDimension, colours) {
	for(var item in sourceArray){
		item.used = false;
	}
	
	
	console.log("shapeRawData based on " + propertyName);
    var uniqueLayer = getUniqueValues(sourceArray, propertyName);
	var secondaryUniqueLayer = getUniqueValues(sourceArray, secondaryDataDimension);

    var resultArray = [];
	var uniqueLayerLength = uniqueLayer.length;
	
	console.log("Number of top level items identified: " + uniqueLayerLength);
	
	
	
     for(var topLevelItem in uniqueLayer) {

        var index = resultArray.length;
		var colourIndex = index % colours.length;

        var child = {
            id: (index + 1) * 100,
            name: topLevelItem,
            data: {
                Description: topLevelItem,
                $area: 2000,
                $color: colours[colourIndex].colour,
                Type: topLevelItem,
                Layer: topLevelItem,
				Name: topLevelItem
            },
            children: []
        };		
		
		console.log("Top level item identified:  --- " + topLevelItem);
        resultArray.push(child);
    }
	
	
	// var includeSecondaryItem = false;
	 // for (itemIndex = 0; itemIndex < resultArray.length; itemIndex++) {
		
		// for (var secondaryLevelItem in secondaryUniqueLayer) {
			// includeSecondaryItem = false;	
			// for (sourceItemIndex = 0; sourceItemIndex < sourceArray.length; sourceItemIndex++) {
				// sourceItem = sourceArray[sourceItemIndex];
				// if (sourceItem[propertyName] == resultArray[itemIndex].data.Name &&
					// sourceItem[secondaryDataDimension] == secondaryLevelItem &&
					// includeSecondaryItem == false) {
					
					// var index = resultArray[itemIndex].children.length;					
					
					// var child = {
						// id: (index + 1) * 1000,
						// name: secondaryLevelItem,
						// data: {
							// Description: secondaryLevelItem + "test",
							// $area: 1000,
							// $color: "transparent",
							// Type: secondaryLevelItem,
							// Layer: secondaryLevelItem,
							// Name: secondaryLevelItem
						// },
						// children: []
					// };
					// resultArray[itemIndex].children.push(child);
					// includeSecondaryItem = true;					
					// }
				// }
		 	
			// }
			
			

	// }
 

 
 // the items are not unique
    var accumulativeId = 1;
    for (itemIndex = 0; itemIndex < resultArray.length; itemIndex++) {
        var firstTopLevelItem = resultArray[itemIndex];
		//for(secondItemIndex = 0; secondItemIndex<resultArray[itemIndex].children.length; secondItemIndex++){
			for (sourceItemIndex = 0; sourceItemIndex < sourceArray.length; sourceItemIndex++) {
            sourceItem = sourceArray[sourceItemIndex];
            if (			
			sourceItem[propertyName] == resultArray[itemIndex].data.Name &&
			//sourceItem[secondaryDataDimension] == resultArray[itemIndex].children[secondItemIndex].data.Name &&
			sourceItem.used == false
			
			) {

               // var index = resultArray[itemIndex].children[secondItemIndex].children.length;

			   var colourIndex = itemIndex % colours.length;
			   
                var leaf = {
                    id: accumulativeId,
                    name: sourceItem.Name + accumulativeId,
                    data: {
                        Description: sourceItem.Description,
                        SoftwareDiagram: sourceItem.SoftwareDiagram,
						BusinessFlowDiagram: sourceItem.BusinessFlowDiagram,
						ComponentDiagram: sourceItem.ComponentDiagram,
						Domain: sourceItem.Domain,									
						DesignConcerns: sourceItem.DesignConcerns,
						Functionality: sourceItem.Functionality,
						Dependencies: sourceItem.Dependencies,
                        $area: 300,
                        $color: colours[colourIndex].colour,
                        Type: sourceItem.Type,
                        Layer: sourceItem.Layer,
						Name: sourceItem.Name
                    },
                    children: []
                };
                accumulativeId++;

                leaf.data[propertyName] = sourceItem.Name;

                //resultArray[itemIndex].children[secondItemIndex].children.push(leaf);
				resultArray[itemIndex].children.push(leaf);
				 
				 sourceItem.used = true;
            }

    //    }
			
			
		}
        
        
    }

    var resultObject = {
        children: resultArray,
        id: "root",
        name: "WPAP",
        data: {
            $area: 10000,
            $color: "#2c3e50",
			Type: "Platform",
			Layer: "Top",
			Name: "WPAP"
        }
    };
    return resultObject;
}

function init(dataDimension, secondaryDataDimension, colourPaletteIndex, RawData) {
	
    
	
	
    var colours = colourPalettes[colourPaletteIndex].palette;
    //init data 
    $("#infovis").html("");

    
    // var reshapedData = json;
    var reshapedData = shapeRawData(rawData.system, dataDimension,secondaryDataDimension, colours);
	var customNode= "root";

    //end
    //init TreeMap
    var tm = new $jit.TM.Squarified({	
        //where to inject the visualization
        injectInto: 'infovis',
        //parent box title heights
        titleHeight: 40,
        //enable animations
        animate: animate,
        //box offsets
        offset: 1,
        //Attach left and right click events
        Events: {
            enable: true,
            onClick: function (node) {			
                if (node) {
					// if (node._depth == 2) 
						// return false;
					var nodeId = $(node).attr("id");
					
					if(nodeId != customNode) {
						tm.enter(node);
						customNode = nodeId;
					
                    if (node._depth == 2) {					
						console.log(nodeId); 
						document.getElementById(nodeId).onClick = '';
						tm.events.config.enable = false;
						var imagesHTML = "<div class=\"card mainCard infocard\" >";
                        imagesHTML += 
						"<div class=\"\">" + 
						"<h2 class=\"card-header\">" + node.data.Name + "</h2>" +
						"<h3>" +
						"<span class=\"badge badge-pill  badge-danger\">" + node.data.Layer + "</span>" +
						"&nbsp;" + 
						"<span class=\"badge badge-pill  badge-success\">" + node.data.Type + "</span>" +						
						"</h3></div>";
						
						imagesHTML += 
							"<div class=\"jumbotron\"><p>"+node.data.Description+"</p></div>";
							
						imagesHTML += "<div class=\"row\">";
						if (node.data.SoftwareDiagram) {
                            imagesHTML += "<div class=\"col-sm-3\"><div class=\"card\"><a taget=\"_blank\" href=\""+
							node.data.SoftwareDiagram +							
							"\"><img  style=\"height: 210px; width: 280px; padding: 10px;\" src=\"" + node.data.SoftwareDiagram + "\" /><a/></div></div>";
						}
						
                        if (node.data.BusinessFlowDiagram)
                            imagesHTML += "<div class=\"col-sm-3\"><div class=\"card\"><img  style=\"height: 210px; width: 280px; padding: 10px;\" src=\"" + node.data.BusinessFlowDiagram + "\" /></div></div>";
						
						if (node.data.ComponentDiagram)
                            imagesHTML += "<div class=\"col-sm-3\"><div class=\"card\"><img  style=\"height: 210px; width: 280px; padding: 10px;\" src=\"" + node.data.ComponentDiagram + "\" /></div></div>";                        
						imagesHTML += "</div>"
						
						imagesHTML += 
						"<div class=\"row\">" + 
						"<div class=\"row\">";
						
						if (node.data.SoftwareDiagram) 
							"<button type=\"button\" class=\"btn btn-primary\"   onclick=\"javascript:openDiagram('" +  node.data.SoftwareDiagram  + "', '" + node.data.Name +": Software Diagram');\">Software Diagram</button>";
						
						if (node.data.BusinessFlowDiagram)
							imagesHTML += 
								"<button type=\"button\" class=\"btn btn-secondary\" onclick=\"javascript:openDiagram('" +  node.data.BusinessFlowDiagram  + "', '" + node.data.Name +": Business Flow Diagram');\">Business Flow Diagram</button>";
						
						if (node.data.ComponentDiagram)
							imagesHTML += 
								"<button type=\"button\" class=\"btn btn-secondary\" onclick=\"javascript:openDiagram('" +  node.data.ComponentDiagram  + "', '" + node.data.Name +": Component Diagram');\">Component Diagram</button>";
						
						imagesHTML += 
							"</div>";
						
						imagesHTML += "</div>"
						
						imagesHTML += "<div class=\"card-block\">";				 
						
						imagesHTML += "<p class=\"card-text\"><ul class=\"list-group list-group-flush\">";
						
						if(node.data.Domain)
							imagesHTML += "<li class=\"list-group-item\">Domain: " + node.data.Domain + "</li>";						
						
						if(node.data.DesignConcerns)
							imagesHTML += "<li class=\"list-group-item\">Design concerns: " + node.data.DesignConcerns + "</li>";
						
						if(node.data.Functionality){
							var functionalities = node.data.Functionality.split(" ");
							imagesHTML += 
								"<li>Functionality: <br />";
							
							imagesHTML += 
								"<div><div class=\"list-group\">";
								
							for(index=0;index<functionalities.length;index++){
								if(index%2==0)
									imagesHTML += "<div class=\"list-group-item  list-group-item-primary\">" + functionalities[index] + "</div>";						
								else
									imagesHTML += "<div class=\"list-group-item  list-group-item-success\">" + functionalities[index] + "</div>";

							}
							imagesHTML += "</div></div>"; 
							
							imagesHTML += "</li>";
						}
						
						if(node.data.Dependencies)
							imagesHTML += "<li class=\"list-group-item\">Dependencies: " + node.data.Dependencies + "</li>";
						
						imagesHTML+= "</ul</p></div>";
						
						imagesHTML += "</div>";
						
						$("#node_" + node.id).html(imagesHTML);
						
						
						console.log(this);
						
                    }

                }
		}
				
            },
            onRightClick: function () {
                $(".card").attr("class", "card cardFadeout");


                setTimeout(function () {
                    $(".card").each(function (index) {
                        $(this).html("");
                    }); 
                }, 2000);

 
				customNode = "out";
                tm.out();
            }
        },
        duration: 1000,
        //Enable tips
        Tips: {
            enable: false,
            //add positioning offsets
            offsetX: 20,
            offsetY: 20,
            //implement the onShow method to
            //add content to the tooltip when a node
            //is hovered
            onShow: function (tip, node, isLeaf, domElement) {
                var html =
					"<div class=\"tip-title\">" + 
					node.data.Name + 
					"</div><div class=\"tip-text\">";
					
						
                var data = node.data;
                if (data.Type) {
                    html += "<span>type: " + data.Type + "</span><br />";
                }
                if (data.Layer) {
                    html += "<span>Layer: " + data.Layer + "</strong><span />";
                }
                tip.innerHTML = html; 
            }
        },
        //Add the name of the node in the correponding label
        //This method is called once, on label creation.
        onCreateLabel: function (domElement, node) {	 
		var htmlContent = '';
		
		switch(node._depth){
			case 0:
				domElement.innerHTML =
					'<div style="background: #f01e14;font-size: 26px;font-family=\"Adelle Sans Light\""><span>' + node.data.Name + '</span></div>';			
			break;			

			case 1:
				domElement.innerHTML =
					'<div style="font-size: 16px;font-family=\"Adelle Sans Light\";"><span>' + node.data.Name + '</span></div>';				
			break;	
			
			case 2:	
			default:		 	
				var description = 
					(node.data.Description.length > 103)? 
					node.data.Description.substring(0,100)+"..." :
					node.data.Description;
				
				domElement.innerHTML =
					'<span><strong>' + node.data.Name + '</strong>' +				
					'</span></div>' +
					'<div id="node_' + node.id + '" style="color:lightgray;font-size:1.2em;">' +
					description+
					'</div>';							
			break;			 
		}
		
		//console.log("createLabel depth: " + node._depth + ", name: " + node.data.Name);
		 


            var style = domElement.style;
            style.display = '';
            style.border = '1px solid transparent';
			style.height = node.data.offsetHeight;            

            domElement.onmouseover = function () {
                style.border = '1px solid #9FD4FF';
            };
            domElement.onmouseout = function () {
                style.border = '1px solid transparent';
            };
			
			 
        }
    });
    tm.loadJSON(reshapedData);
    tm.refresh(); 
}

function openDiagram(diagramURL, tabName){
	 window.open(diagramURL,  tabName); 
}