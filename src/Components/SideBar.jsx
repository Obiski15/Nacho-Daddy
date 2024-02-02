import CategoryLink from "../Features/Categories/CategoryLink";

import { SMALL_ICON_SIZE } from "../Utility/constants";

import { IoHomeOutline } from "react-icons/io5";
import { TbBabyCarriage } from "react-icons/tb";
import { MdSportsSoccer } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { FaDog } from "react-icons/fa";
import { RiHealthBookLine } from "react-icons/ri";
import { IoCarSportOutline } from "react-icons/io5";
import { IoPhonePortraitSharp } from "react-icons/io5";

function SideBar() {
  return (
    <aside className="col-span-3 mx-2 flex flex-col gap-5 rounded-md bg-stone-200 py-3 lg:col-span-1 lg:h-[40em]">
      <h2 className="h2 text-md px-3 font-light capitalize italic tracking-wide">
        all categories
      </h2>
      <div className="no-scrollbar flex flex-row gap-3 overflow-scroll px-3 lg:flex-col">
        <CategoryLink path="items" categoryName="Home">
          <IoHomeOutline size={SMALL_ICON_SIZE} />
        </CategoryLink>
        <CategoryLink path="babyitems" categoryName="Baby Items">
          <TbBabyCarriage size={SMALL_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="sports" categoryName="Sports & Gym">
          <MdSportsSoccer size={SMALL_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="clothing" categoryName="Fashion & Clothing">
          <GiClothes size={SMALL_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="beauty" categoryName="Health & Beauty">
          <RiHealthBookLine size={SMALL_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="phones" categoryName="Phones & Accessories">
          <IoPhonePortraitSharp size={SMALL_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="pets" categoryName="Pets & Animals">
          <FaDog size={SMALL_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="automobile" categoryName="Cars & Automobile">
          <IoCarSportOutline size={SMALL_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="groceries" categoryName="Groceries">
          <MdOutlineStoreMallDirectory size={SMALL_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="toys" categoryName="Toys & Gaming">
          <IoGameControllerOutline size={SMALL_ICON_SIZE} />
        </CategoryLink>
      </div>
    </aside>
  );
}

export default SideBar;
