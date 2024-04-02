
# Send Form Data to google Sheet

Sending form data to a Google Sheet allows you to collect and organize information submitted through a web form directly into a spreadsheet. By integrating Google Apps Script with your HTML form, you can capture user input and append it to a specific sheet within your Google Sheets document. This process streamlines data collection, enabling efficient analysis and management of responses.


## Screenshot

![App Screenshot](https://i.ibb.co/XXb4BKQ/127-0-0-1-5500-index-html-8.png)





## Demo

[Pages](https://vebpath.github.io/SHEETFORM)


## Sheet Script
```
let sheet = SpreadsheetApp.openByUrl(SheetLink);
let sheetName = sheet.getSheetByName('Sheet1');
function doPost(e){
  let data = e.parameter;
  sheetName.appendRow([data.COURSE, data.NAME, data.EMAIL, data.PHONE, data.ADDRESS, data.MESSAGE, data.GENDER]);
  return ContentService.createTextOutput('data saved');
}
```

## JAVASCRIPT CODE

```
let form = document.querySelector("#form");
let url 'DEPLOY URL';
form.addEventListener("submit", (e) => {
  e.preventDefault();
  init()
  let formData = new FormData(form);

  fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res)=>res.text())
    .then((data)=>{
  //DO STUFF HERE
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
```
