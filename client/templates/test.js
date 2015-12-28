Template.test.helpers({
    user: function() { return Session.get('user'); },
    userProfile: function() {
        return ReactiveMethod.call('getUserData', Session.get('user'));
    },
    tweets: function() { 
        return ReactiveMethod.call('getTweets', Session.get('user'));
    },
    markovModel: function() {
        return ReactiveMethod.call('presentRawMarkovModel', Session.get('sourceText'));
    },
    markovModelLength: function() {
        return _.values(Template.test.__helpers.get('markovModel').call()).length;
    },
    markovUser: function() { return Session.get('markov-user'); },
    markovTwets: function() {
        return ReactiveMethod.call('getMarkovTweets', Session.get('markov-user'));
    }
});

Template.test.events({
    'submit .tweet-retrieval-input': function(event, template) {
        event.preventDefault();

        var screenName = template.$('#screen-name').val();
        Session.set('user', screenName);
    },
    'submit .markov-model-input': function(event, template) {
        event.preventDefault();

        var sourceText = template.$('#markov-input').val();
        Session.set('sourceText', sourceText);
    }
});

Template.test.onDestroyed(function() {
    Session.set('user', undefined);
    Session.set('sourceText', undefined);
});