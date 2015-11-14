angular.module('crystalCave')
.controller('HomeCtrl', function(){
})
.controller('AboutCtrl', function(){
})
.controller('BooksCtrl', function(){

    this.books = [{
        title: "Why God Why Do Cockroaches Fly?",
        coverSrc: "assets/cockroaches-cover.png",
        blurb: ("Why God Why Do Cockroaches Fly is a book inspired by experiences, and is relatable"+ 
                "to all who have ever had the misfortune of meeting a cockroach. Let your kids ask "+
                "the tough question we all want the answer to – Why God, Why Do Cockroaches Fly? "+
                "Speculate with us, laugh with us, and find the little cockroach in each picture as you "+
                "go! Let your new readers practice with concepts that aren’t limited to a child’s mind, "+
                "opening the conversation regardless of generation! With timeless illustrations, 'Why "+
                "God Why Do Cockroaches Fly?' will bring joy to all who read.")
    },{
        title: "More coming soon!"
    }];

});

