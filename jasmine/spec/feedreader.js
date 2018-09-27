/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //test for url
         it('url defined', function() {
            for(let feed of allFeeds) {
              //console.log(feed);
              expect(feed.url).toBeDefined();
              expect(feed.url.length).not.toBe(0);
               }
         });
         
        
         //test for name
            it('name defined', function() {
            for(let feed of allFeeds) {
              //console.log(feed);
              expect(feed.name).toBeDefined();
              expect(feed.name.length).not.toBe(0);
               }
         });
         

     });

  


    // new test suite named "The menu" 

    describe('The menu', function() {



        //Test that ensures the menu element is hidden by default.

         it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });

         // Test that ensures the menu changes visibility when the menu icon is clicked.

          it('on', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            //expect(body.classList.contains('menu-hidden')).toBe(true);
            expect(body.classList.contains('menu-hidden')).toBe(false);
            //menu.click();
            //expect(body.classList.contains('menu-hidden')).not.toBe(false);
          });

          it('off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
          });
          

        });

    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function() {

         beforeEach(function(done) {
            loadFeed(0, done);
         });

         it('finishes work', function() {
            const feeds = document.querySelectorAll('.feed .entry');
            expect(feed.length > 0).toBe(true);
            //expect(feed.children.length > 0).toBe(false);
         });


         });

    /* New test suite named "New Feed Selection" */
    describe('New Feed Selection',function() {
        const feed = document.querySelector('.feed');
        let firstFeed =[];
        beforeEach(function(done){
        loadFeed(0,function() {
            firstFeed = $('.feed').html()
            loadFeed(1, done);
        });
         // console.log(feed.children[0].innerText);  
         //Array.from(feed.children).forEach(function(entry) {
            //firstFeed.push(entry.innerText);
         //});
          //loadFeed(1, done);
        });

        it('content changes', function() {
            //console.log(feed.children[0].innerText);
            // Array.from(feed.children).forEach(function(entry,index) {
            //console.log(entry.innerText, firstFeed[index], entry.innerText === firstFeed[index]);
            //expect(entry.innerText === firstFeed[index]).toBe(true);
            let secondFeed = $('.feed')
            expect(firstFeed === secondFeed). toBe(false);
            });
        });
        
        
    });

}());
