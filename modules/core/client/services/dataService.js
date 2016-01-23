/**
 * Created by Shristi on 7/03/2015.
 */
    'use strict';
angular.module('core').service('usersService', ['$q',
    function($q) {


    /**
     * Users DataService
     * Uses embedded, hard-coded data model; acts asynchronously to simulate
     * remote data service call(s).
     *
     * @returns {{loadAll: Function}}
     * @constructor
     */

    var users = [
        {
            name: 'Bed room',
            avatar: './lib/material-design-icons/action/svg/design/ic_android_48px.svg',
            content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
        }
        
    ];

    // Promise-based API
    return {
        loadAll : function() {
            // Simulate async nature of real remote calls
            return $q.when(users);
        }
    };
}]);
