var app = angular.module('app', []);

app.controller('MainController', ['$scope', function($scope) {
    $scope.experiences =
    [
        {
            title: 'Volunteer Versus',
            text: '"Which group volunteered the most?" "Who has the most hours?" These questions have come up often over the years in my experiences volunteering. Inspired by a strong rivalry between two famous volunteering organizations as well as the inconveniences of viewing volunteering records, I sought out to design an app that would simplify managing records as well as bring stats-based competition into volunteering. The result is Volunteer Versus! Doing the project was very fun as I really got to use Ruby on Rails as well as multiple other related tools. Worked across the stack; did this solo!',
            image: 'assets/img/vv.png',
            link: 'https://volunteerversus.herokuapp.com'
        },
        {
            title: 'Gitlet',
            text: 'I made a copy of Git in Java. Yes, Git—the exact version control system that was involved in pushing this very website! Although Gitlet was given as a class project, I had to design everything from scratch—no skeleton code or anything like that. Another thing was that I had to write all the tests by myself. All these things were definitely non-trivial and the project was relatively large. Certainly, this was one of the most practical and challenging projects I have done to date.',
            image: 'assets/img/gitlet.png',
            link: '#'
        },
        {
            title: 'Upsilon Pi Epsilon',
            text: 'I contributed to the web development committee at UPE, the Computer Science Honor Society at UC Berkeley. Me and a few others worked on adding new features to their website and improving the code base. Recently, we improved office hours such that officers could manage hours with a simple interface—no code knowledge needed. Also, we added the ability to schedule appointments for mock interviews and other things. It has been a great learning experience; I picked up some knowledge of the Django framework (and ultimately backend) here!',
            image: 'assets/img/upe.png',
            link: 'http://upe.berkeley.edu'
        },
        {
            title: 'Oppia',
            text: 'Founded by a few employees at Google, Oppia is an open-source project that aims to allow anyone to create interactive "explorations" and simulate one-on-one tutoring. I contributed to the project by adding infinite scrolling to the gallery on the website, picking up AngularJS in the process! Being only in the first semester at UC Berkeley at the time, I thought that this project was great and because of it, I was able to start contributing using my programming skills early on!',
            image: 'assets/img/oppia.png',
            link: 'https://www.oppia.org'
        },
    ];
    $scope.interests =
    [
        {
            name: 'The Verge',
            text: 'One of the top sites to go to for technology news. Been following it since it was "This is my Next".',
            link: 'http://www.theverge.com/',
            image: 'assets/img/theverge.png'
        },
        {
            name: 'MacRumors',
            text: 'Good source of news about Apple-related things. Forums are useful, too. Discovered it during a history day project years ago.',
            link: 'http://www.macrumors.com/',
            image: 'assets/img/macrumors.png'
        },
        {
            name: 'iDownloadBlog',
            text: 'Very useful for finding out all that\'s needed for jailbreaks and the like.',
            link: 'http://www.idownloadblog.com/',
            image: 'assets/img/idownloadblog.png'
        },
        {
            name: 'IGN',
            text: 'The reviews that IGN gives on my favorite shows (like Arrow and Flash) are places for interesting discussions.',
            link: 'http://www.ign.com/',
            image: 'assets/img/ign.png'
        }
    ];
}]);
