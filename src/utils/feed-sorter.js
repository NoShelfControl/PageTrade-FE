/* eslint-disable max-len */
export const feedSorter = (id, array) => {
  const sortedFeed = array.slice().reverse();
  const slicedFeed = sortedFeed.slice(0, 10);
  const actionsFeed = [];
  slicedFeed.forEach(item => {
    switch(item.actionType) {
      case 'TRADE':
        actionsFeed.push(`User ${id} put ${item.book} up for trade!`);
        break;
      case 'ADD':
        actionsFeed.push(`User ${id} added ${item.book} to their collection!`);
        break;
      case 'WATCH':
        actionsFeed.push(`User ${id} placed ${item.book} on their watchlist!`);
    }
  });
  return actionsFeed;
};

export const globalFeedSorter = (array) => {
  const sortedFeed = array.slice().reverse();
  const slicedFeed = sortedFeed.slice(0, 5);
  const actionsFeed = [];
  slicedFeed.forEach(item => {
    switch(item.actionType) {
      case 'TRADE':
        actionsFeed.push(`User ${item.userId} put ${item.book} up for trade!`);
        break;
      case 'ADD':
        actionsFeed.push(`User ${item.userId} added ${item.book} to their collection!`);
        break;
      case 'WATCH':
        actionsFeed.push(`User ${item.userId} placed ${item.book} on their watchlist!`);
    }
  });
  return actionsFeed;
};
