function distributeGifts(packOfGifts, reindeers) {
  return Math.floor(
    reindeers.map((reno) => reno.length * 2).reduce((a, b) => a + b) /
      packOfGifts.map((regalo) => regalo.length).reduce((a, b) => a + b)
  );
}
