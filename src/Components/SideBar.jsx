import Heading from "./Heading";
import CategoryLink from "../Features/Categories/CategoryLink";

import { MEDIUM_ICON_SIZE } from "../Utility/constants";

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
    <aside className="ml-3 flex h-[40em] flex-col gap-5 rounded-md bg-stone-200 py-3">
      <Heading type="h2" moreStyles={"px-3"}>
        all categories
      </Heading>
      <div className="no-scrollbar flex flex-col gap-3 overflow-scroll px-3">
        <CategoryLink path="items" categoryName="Home">
          <IoHomeOutline size={MEDIUM_ICON_SIZE} />
        </CategoryLink>
        <CategoryLink path="babyitems" categoryName="Baby Items">
          <TbBabyCarriage size={MEDIUM_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="sports" categoryName="Sports & Gym">
          <MdSportsSoccer size={MEDIUM_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="clothing" categoryName="Fashion & Clothing">
          <GiClothes size={MEDIUM_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="beauty" categoryName="Health & Beauty">
          <RiHealthBookLine size={MEDIUM_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="phones" categoryName="Phones & Accessories">
          <IoPhonePortraitSharp size={MEDIUM_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="pets" categoryName="Pets & Animals">
          <FaDog size={MEDIUM_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="automobile" categoryName="Cars & Automobile">
          <IoCarSportOutline size={MEDIUM_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="groceries" categoryName="Groceries">
          <MdOutlineStoreMallDirectory size={MEDIUM_ICON_SIZE} />
        </CategoryLink>

        <CategoryLink path="toys" categoryName="Toys & Gaming">
          <IoGameControllerOutline size={MEDIUM_ICON_SIZE} />
        </CategoryLink>
      </div>
    </aside>
  );
}

export default SideBar;
