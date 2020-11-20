export const booksSorter = (array) => {
  const sortedFeed = array.slice().reverse();
<<<<<<< HEAD
  const sortedTradeFeed = sortedFeed.filter(x => x.isTradeable == true);
=======
  const sortedTradeFeed = array.filter(x => x.isTradeable == true);
>>>>>>> 329bd775a828093a107183394a38de253517c806
  const sortedWatchFeed = sortedFeed.filter(x => x.isWatched == true);
  const slicedSortedTradeFeed = sortedTradeFeed.slice(0, 10);
  const slicedSortedWatchFeed = sortedWatchFeed.slice(0, 10);
  return [slicedSortedTradeFeed, slicedSortedWatchFeed];
};
