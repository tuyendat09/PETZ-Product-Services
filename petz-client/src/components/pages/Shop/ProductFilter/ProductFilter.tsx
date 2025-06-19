import FilterCategories from "./FilterCategories";
import OtherFilter from "./OtherFilter";

export default function ProductFilter() {
  return (
    <div className="w-1/2 max-w-[250px]">
      <FilterCategories />
      <OtherFilter />
    </div>
  );
}
