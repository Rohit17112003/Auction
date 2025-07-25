const Search = () => {
  return (
    <div className="flex w-full items-center justify-between p-5">
      <input
        className="w-[80%] rounded-full bg-gray-100 px-6 py-3 text-sm outline-none lg:w-80"
        type="search"
        placeholder="Search ID/Location"
      />
      <div className="flex items-center">
        <i className="ri-filter-2-line ri-lg"></i>
        <p className="text-sm text-gray-400">Filter</p>
      </div>
    </div>
  );
};

export default Search;
