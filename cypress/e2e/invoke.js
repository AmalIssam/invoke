///<Reference types = 'cypress'/>
describe('First Test', () => {
    it('Print The Price', () => {
        cy.visit("https://www.automationteststore.com")
        //to bring the item itself so i csn take the price of it
        //cy.get(".thumbnail").as("Items")
        //cy.get("@Items").find(".oneprice").each(element, index, list)=>{
            //cy.log("the" + element.text() + "is located at index#" + index);
        //}
        /*--------------*/
        cy.get(".thumbnail").as("Items")
        cy.get("@Items").find(".oneprice").invoke('text').as("itemPrice")
        cy.get('@itemPrice').then((Pricetext)=>{
            let myListOfPricees= Pricetext.split("$")
            let total=0
            for(let i =0 ; i<myListOfPricees.length; i++)
            cy.log(myListOfPricees[i])
            total+= Number(myListOfPricees[i])
            
        }
       // cy.log(total)        
        )
        //cy.log(total)


    });

    cy.log(total)        

});