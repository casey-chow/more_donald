Template.test.helpers({
    tweets: function() { 
        return ReactiveMethod.call('getTweets', Session.get('user'));
    },
    user: function() {
        return Session.get('user');
    }
});

Template.test.events({
    'submit .tweet-retrieval': function(event, template) {
        event.preventDefault();

        var screenName = template.$('#screen-name').val();
        Session.set('user', screenName);
    }
});