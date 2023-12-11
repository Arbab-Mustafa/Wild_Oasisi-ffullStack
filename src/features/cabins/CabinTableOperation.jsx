import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
// import Filter from "ui/Filter";

export const CabinTableOperation = () => {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },

          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "maxCapacity-desc", label: "Sort by Capacity (high first)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity (low first)" },
        ]}
      />
    </TableOperations>
  );
};
