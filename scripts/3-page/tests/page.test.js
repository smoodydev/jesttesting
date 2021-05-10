const buttonClick = require("../page");

// Read in a HTML file instead of creating just the element
// NB - index.html is coming from the route!  
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});


// Note on this test - this SHOULD be expanded as we just check that when the function is called that the content changes.
// It SHOULD be chained to simulating an onclick event for the button and then check if the text is changed.
describe("DOM tests", () => {
    test("Expects par content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
});