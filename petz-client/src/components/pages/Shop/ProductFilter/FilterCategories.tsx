import { useGetCategoriesQuery } from "@/libs/features/services/categories";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useState } from "react";
import { useShopContext } from "../_store/useShopContext";

export default function FilterCategories() {
  const [openCategory, setOpenCategory] = useState<boolean>(true);
  const {
    data: CategoryList,
    error: QueryError,
    isLoading,
  } = useGetCategoriesQuery();

  const { handleFilterCategory, queryParams } = useShopContext();

  function handleToggleCategory() {
    setOpenCategory((prevState) => !prevState);
  }

  if (isLoading) {
    return <p>Đang tải danh mục...</p>;
  }

  if (QueryError) {
    return <p>Không thể tải danh mục. Vui lòng thử lại.</p>;
  }

  return (
    <motion.div>
      <button
        className="flex w-full items-center"
        onClick={handleToggleCategory}
      >
        <h4 className="text-h4">Danh mục</h4>
        <Icon
          className={`ml-auto ${
            openCategory ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
          icon="majesticons:chevron-up"
          width="24"
          height="24"
        />
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: openCategory ? "auto" : 0,
          opacity: openCategory ? 1 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="mt-2 max-h-60 space-y-2 overflow-y-hidden border-b"
      >
        {CategoryList?.map((category) => (
          <button
            className={`flex w-full items-center rounded-lg px-4 py-2 text-left text-[14px] transition ${
              queryParams.productCategory === category._id
                ? "bg-gray-200 font-bold text-black"
                : "hover:bg-gray-100"
            }`}
            key={category.categoryName}
            onClick={() => handleFilterCategory(category._id)}
          >
            {category.categoryName}
          </button>
        ))}
      </motion.div>
    </motion.div>
  );
}
