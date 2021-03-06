import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import SubscriptionDashboard from '../components/subscription_dashboard.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('currentUser').ready()) {
    let user = Meteor.user();
    onData(null, {user});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SubscriptionDashboard);
