angular.module('crystalCave')
.controller('HomeCtrl', function(){
    this.buylink = "http://www.amazon.com/Why-God-Do-Cockroaches-Fly-ebook/dp/B018055P1K/ref=sr_1_1?ie=UTF8&qid=1447639662&sr=8-1&keywords=why+god+why+do+cockroaches+fly";
})
.controller('AboutCtrl', function(){
})
.controller('ContactCtrl', function(){
})
.controller('BooksCtrl', function(){
    this.buylink = "http://www.amazon.com/Why-God-Do-Cockroaches-Fly-ebook/dp/B018055P1K/ref=sr_1_1?ie=UTF8&qid=1447639662&sr=8-1&keywords=why+god+why+do+cockroaches+fly";

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

