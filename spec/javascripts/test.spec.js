// include spec/javascripts/helpers/some_helper_file.js and app/assets/javascripts/foo.js
//= require helpers/some_helper_file
//= require foo
describe("Jasmine + Rails test", function() {
    it("works", function() {
        expect(true).toBeTruthy();
    });
});



 it("Functions can probably access objects", function() {
   var team = {
     Washington: "Nationals"
   };

   expect(team.Washington).not.toBeUndefined();
   expect(team.giants).toBeUndefined();
 });


 it("undefined variables are accounted for", function() {
   var team, expos = "expos";

   expect(team).toBeFalsy();
   expect(expos).not.toBeFalsy();
 });

 it("The 'application allows us to find information from an array", function() {
   var a = ["Nationals", "Padres", "Mets", "Yankees"];

   expect(a).toContain("Yankees");
   expect(a).not.toContain("Pirates");
 });


 it("The 'application allows us to retrieve information from an array", function() {
   var a = ["Nationals", "Padres", "Mets", "Yankees"];

   expect(a[0]).toBe("Nationals");
   expect(a[2]).not.toBe("Pirates");
 });

 it("Function will allow application to determine the loser", function() {
   var loser = 0,
     other = 4;

   expect(loser).toBeLessThan(other);
   expect(other).not.toBeLessThan(loser);
 });

 it("Function will show who the winner is when the result is evoked", function() {
   var winner = 10,
     other = 4;

   expect(winner).toBeGreaterThan(other);
   expect(other).not.toBeGreaterThan(winner);
 });
