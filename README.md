# NordstromsRackClearanceShoeSearch
An automated test of searching for Clearance Shoe Items on https://www.nordstromrack.com/ using Chrome.

## Test Plan
#### Title: 
Clearance Shoe Search -- Navigating a search for a specific shoe size listed as a clearance item on nordstromrack.com. 
#### Description: 
This test uses Nigthmare.js to walk through one of the many ways a user may navigate to finding a bargain in a specific shoe size. 
Preconditions: For this test, the customer is selecting the 4th shoe size listed for clearance items. This can be changed on line 24 of NordstromRackClearanceShoeSearch.js.
Assumtions: 
1. Chrome browser or supported browser is being used. 
2. Shoe sizes are listed first in the 'Size' dropbox.

#### Test Steps:
1. Navigate to nordstromrack.com.
2. Click the 'Clearance' tab.
3. Select the 4th shoe size listed from 'Size' on the clearance page.
4. View results from selected size.

#### Expected Result: 
Test should navigate through each page (Home, Clearance, and Results of shoe size Search) and take screenshots of the following steps: 
1. loaded 'Clearance' page 
2. view of 'Size' options
3. loaded results of selected shoe size
4. loaded results of selected shoe size further down the page

## How to run this test
##### Clone files to your computer.
##### Quit all other browsers and open Chrome.
##### Go to NordstromsRackClearanceShoeSearch folder in terminal.
##### Enter 'npm install --save nightmare' to install the testing software.
##### Once installed, enter 'node NordstromRackClearanceShoeSearch.js'.
##### Once the testing is complete you should see 'Done!' appear in terminal.
##### Check your GoogleSearchAutoTest folder to see the screenshots taken of the search and results during testing (should be 4 total).
