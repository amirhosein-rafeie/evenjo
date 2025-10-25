import { createSlice, configureStore } from "@reduxjs/toolkit";
import { concerts, sports } from "../components/data";

const normalizeSportsData = (sports) => {
  return sports.map((sport) => ({
    ...sport,
    artistName: sport.sportName,
    name: sport.sportName,
    price: parseFloat(sport.price.replace("$", "")),
    genre: "Sports",
    type: "sport",
  }));
};

const normalizeConcertsData = (concerts) => {
  return concerts.map((concert) => ({
    ...concert,
    type: "concert",
  }));
};

const initialState = {
  events: {
    concerts: normalizeConcertsData(concerts),
    sports: normalizeSportsData(sports),
  },
  filteredEvents: {
    concerts: normalizeConcertsData(concerts),
    sports: normalizeSportsData(sports),
  },
  filters: {
    what: "",
    when: "",
    where: "",
    price: "",
    category: "concerts",
    activeFilters: {
      what: false,
      when: false,
      where: false,
      price: false,
    },
  },
  loading: false,
  error: null,
};

const unifiedSlice = createSlice({
  name: "unified",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      const { category, data } = action.payload;
      state.events[category] = data;
      state.filteredEvents[category] = data;
    },

    setCategory: (state, action) => {
      state.filters.category = action.payload;
    },

    setWhatFilter: (state, action) => {
      state.filters.what = action.payload;
      state.filters.activeFilters.what = action.payload !== "";
    },

    setWhenFilter: (state, action) => {
      state.filters.when = action.payload;
      state.filters.activeFilters.when = action.payload !== "";
    },

    setWhereFilter: (state, action) => {
      state.filters.where = action.payload;
      state.filters.activeFilters.where = action.payload !== "";
    },

    setPriceFilter: (state, action) => {
      state.filters.price = action.payload;
      state.filters.activeFilters.price = action.payload !== "";
    },

    filterEvents: (state, action) => {
      const { what, when, where, price } = action.payload;
      const category = state.filters.category;

      let filtered = [...state.events[category]];

      if (what) {
        filtered = filtered.filter(
          (event) =>
            event.genre.toLowerCase().includes(what.toLowerCase()) ||
            event.artistName.toLowerCase().includes(what.toLowerCase()) ||
            (event.name &&
              event.name.toLowerCase().includes(what.toLowerCase()))
        );
      }

      if (when) {
        if (when === "Today") {
          const today = new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          filtered = filtered.filter((event) => event.date.includes(today));
        } else if (when === "This weekend") {
          filtered = filtered.filter(
            (event) => event.date.includes("Sat") || event.date.includes("Sun")
          );
        } else if (when === "This month") {
          const currentMonth = new Date().toLocaleDateString("en-US", {
            month: "short",
          });
          filtered = filtered.filter((event) =>
            event.date.includes(currentMonth)
          );
        } else {
          filtered = filtered.filter((event) =>
            event.date.toLowerCase().includes(when.toLowerCase())
          );
        }
      }

      if (where) {
        filtered = filtered.filter((event) =>
          event.location.toLowerCase().includes(where.toLowerCase())
        );
      }

      if (price) {
        const priceNum = parseFloat(price);
        if (!isNaN(priceNum)) {
          if (price === "100") {
            filtered = filtered.filter((event) => event.price < 100);
          } else if (price === "300") {
            filtered = filtered.filter(
              (event) => event.price >= 100 && event.price <= 300
            );
          } else if (price === "500") {
            filtered = filtered.filter(
              (event) => event.price >= 300 && event.price <= 500
            );
          } else if (price === "1000") {
            filtered = filtered.filter((event) => event.price > 500);
          } else {
            filtered = filtered.filter((event) => event.price <= priceNum);
          }
        }
      }

      state.filteredEvents[category] = filtered;
    },

    clearFilters: (state) => {
      const category = state.filters.category;
      state.filteredEvents[category] = state.events[category];
      state.filters.what = "";
      state.filters.when = "";
      state.filters.where = "";
      state.filters.price = "";
      state.filters.activeFilters = {
        what: false,
        when: false,
        where: false,
        price: false,
      };
    },

    clearAllFilters: (state) => {
      state.filters.what = "";
      state.filters.when = "";
      state.filters.where = "";
      state.filters.price = "";
      state.filters.activeFilters = {
        what: false,
        when: false,
        where: false,
        price: false,
      };
      state.filteredEvents.concerts = state.events.concerts;
      state.filteredEvents.sports = state.events.sports;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setEvents,
  setCategory,
  setWhatFilter,
  setWhenFilter,
  setWhereFilter,
  setPriceFilter,
  filterEvents,
  clearFilters,
  clearAllFilters,
  setLoading,
  setError,
} = unifiedSlice.actions;

export default unifiedSlice.reducer;

export const store = configureStore({
  reducer: {
    unified: unifiedSlice.reducer,
  },
});
