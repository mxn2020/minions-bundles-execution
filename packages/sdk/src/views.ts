/**
 * @module minions-bundles-execution/views
 * Named query filters for Minions Bundle: Execution.
 */

export const bundleViews = {
  dailyFocus: {
    description: 'The top 3 tasks assigned for today',
    type: 'task',
    filter: {
      "isTop3Today": "true"
},
  },
};

