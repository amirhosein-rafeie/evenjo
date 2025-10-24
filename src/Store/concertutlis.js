export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const formatDate = (dateString) => {
  return dateString;
};

export const getUniqueGenres = (concerts) => {
  return [...new Set(concerts.map((concert) => concert.genre))];
};

export const getUniqueLocations = (concerts) => {
  return [...new Set(concerts.map((concert) => concert.location))];
};

export const filterConcertsByMultipleCriteria = (concerts, filters) => {
  return concerts.filter((concert) => {
    const matchesWhat =
      !filters.what ||
      concert.genre.toLowerCase().includes(filters.what.toLowerCase()) ||
      concert.artistName.toLowerCase().includes(filters.what.toLowerCase());

    const matchesWhen =
      !filters.when ||
      concert.date.toLowerCase().includes(filters.when.toLowerCase());

    const matchesWhere =
      !filters.where ||
      concert.location.toLowerCase().includes(filters.where.toLowerCase());

    const matchesPrice =
      !filters.price || concert.price <= parseFloat(filters.price);

    return matchesWhat && matchesWhen && matchesWhere && matchesPrice;
  });
};
