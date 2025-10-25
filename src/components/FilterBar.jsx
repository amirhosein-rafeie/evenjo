import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setWhatFilter,
  setWhenFilter,
  setWhereFilter,
  setPriceFilter,
  clearAllFilters,
  filterEvents,
} from "../Store/unifiedStore";

const FilterBar = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.unified);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [locationSearch, setLocationSearch] = useState("");

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case "what":
        dispatch(setWhatFilter(value));
        break;
      case "when":
        dispatch(setWhenFilter(value));
        break;
      case "where":
        dispatch(setWhereFilter(value));
        break;
      case "price":
        dispatch(setPriceFilter(value));
        break;
      default:
        break;
    }

    dispatch(
      filterEvents({
        what: filterType === "what" ? value : filters.what,
        when: filterType === "when" ? value : filters.when,
        where: filterType === "where" ? value : filters.where,
        price: filterType === "price" ? value : filters.price,
      })
    );

    setOpenDropdown(null);
  };

  const handleClearFilters = () => {
    dispatch(clearAllFilters());
    setLocationSearch("");
  };

  const handleLocationSearch = (value) => {
    setLocationSearch(value);
    dispatch(setWhereFilter(value));
    dispatch(
      filterEvents({
        what: filters.what,
        when: filters.when,
        where: value,
        price: filters.price,
      })
    );
  };

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = "Current Location";
        setLocationSearch(location);
        dispatch(setWhereFilter(location));
        dispatch(
          filterEvents({
            what: filters.what,
            when: filters.when,
            where: location,
            price: filters.price,
          })
        );
      });
    }
  };

  const DropdownFilter = ({
    type,
    placeholder,
    icon,
    value,
    options,
    children,
  }) => (
    <div className="relative flex-1">
      <button
        onClick={() => setOpenDropdown(openDropdown === type ? null : type)}
        className="w-full pl-10 pr-4 py-3 bg-neutral-n700 border border-neutral-n600 rounded-lg text-neutral-n200 placeholder-neutral-n400 focus:outline-none focus:ring-2 focus:ring-primaryMain focus:border-transparent flex items-center justify-between"
      >
        <div className="flex items-center">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
          <span className={value ? "text-neutral-n200" : "text-neutral-n400"}>
            {value || placeholder}
          </span>
        </div>
        <svg
          className="w-4 h-4 text-neutral-n400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {openDropdown === type && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-n700 border border-neutral-n600 rounded-lg shadow-lg z-50">
          {children}
        </div>
      )}
    </div>
  );

  const LocationFilter = () => (
    <div className="relative flex-1">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-neutral-n400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="search location"
        value={locationSearch}
        onChange={(e) => handleLocationSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-neutral-n700 border border-neutral-n600 rounded-lg text-neutral-n200 placeholder-neutral-n400 focus:outline-none focus:ring-2 focus:ring-primaryMain focus:border-transparent"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 text-neutral-n400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <button
        onClick={handleUseMyLocation}
        className="absolute top-full left-0 right-0 mt-1 bg-neutral-n700 border border-neutral-n600 rounded-lg text-neutral-n200 hover:bg-neutral-n600 px-3 py-2 text-sm transition-colors"
      >
        use my location
      </button>
    </div>
  );

  return (
    <div className=" p-10 rounded-lg mb-6">
      <div className="flex gap-4 items-center">
        <DropdownFilter
          type="what"
          placeholder="What"
          value={filters.what}
          icon={
            <svg
              className="w-5 h-5 text-neutral-n400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          }
        >
          <div className="py-2">
            <button
              onClick={() => handleFilterChange("what", "")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              All genres
            </button>
            <button
              onClick={() => handleFilterChange("what", "Pop")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              Pop
            </button>
            <button
              onClick={() => handleFilterChange("what", "R&B")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              R&B
            </button>
            <button
              onClick={() => handleFilterChange("what", "Alternative")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              Alternative
            </button>
          </div>
        </DropdownFilter>

        <DropdownFilter
          type="when"
          placeholder="When"
          value={filters.when}
          icon={
            <svg
              className="w-5 h-5 text-neutral-n400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
          }
        >
          <div className="py-2">
            <button
              onClick={() => handleFilterChange("when", "")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              All dates
            </button>
            <button
              onClick={() => handleFilterChange("when", "Today")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              Today
            </button>
            <button
              onClick={() => handleFilterChange("when", "This weekend")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              This weekend
            </button>
            <button
              onClick={() => handleFilterChange("when", "This month")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              This month
            </button>
          </div>
        </DropdownFilter>

        <LocationFilter />

        <DropdownFilter
          type="price"
          placeholder="Price"
          value={filters.price}
          icon={
            <svg
              className="w-5 h-5 text-neutral-n400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              />
            </svg>
          }
        >
          <div className="py-2">
            <button
              onClick={() => handleFilterChange("price", "")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              All prices
            </button>
            <button
              onClick={() => handleFilterChange("price", "100")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              Under $100
            </button>
            <button
              onClick={() => handleFilterChange("price", "300")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              $100-$300
            </button>
            <button
              onClick={() => handleFilterChange("price", "500")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              $300-$500
            </button>
            <button
              onClick={() => handleFilterChange("price", "1000")}
              className="w-full px-4 py-2 text-left text-neutral-n200 hover:bg-neutral-n600 transition-colors"
            >
              Over $500
            </button>
          </div>
        </DropdownFilter>

        <button
          onClick={handleClearFilters}
          className="px-4 py-3 bg-primaryMain text-white rounded-lg transition-colors duration-200"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
