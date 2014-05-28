'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.nodes = [
    {'item': 'org.apache.maven:maven:3.1.1',
     'subs': [
      {'item': 'org.apache.maven:maven-core:3.1.1'},
      {'item': 'com.google.guice:guice:2.0.1'},
     ],
    },
    {'item': 'org.apache.maven:maven-compat:3.1.1',
     'subs': [
        {'item': 'org.apache.maven:maven-artifact:3.1.1'},
        {'item': 'org.apache.maven:maven-plugin-api:3.1.1'},
        {'item': 'org.apache.maven:maven-compat:3.1.1'},
        {'item': 'org.sonatype.sisu:sisu:1.0',
         'subs':[
          {'item': 'com.google.guice:guice:2.1.1'},
        ]},
     ]
    }
  ];
});
