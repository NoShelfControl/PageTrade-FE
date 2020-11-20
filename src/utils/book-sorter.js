export const booksSorter = (array) => {
  const sortedFeed = array.slice().reverse();
  const sortedTradeFeed = array.filter(x => x.isTradeable == true);
  const sortedWatchFeed = sortedFeed.filter(x => x.isWatched == true);
  const slicedSortedTradeFeed = sortedTradeFeed.slice(0, 10);
  const slicedSortedWatchFeed = sortedWatchFeed.slice(0, 10);
  return [slicedSortedTradeFeed, slicedSortedWatchFeed];
};
