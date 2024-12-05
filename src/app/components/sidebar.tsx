import { sideBarItems } from "@/lib/constants";
import { SideBarComponent } from "./sidebar-component";

export function SideBar() {
  return (
    <div className="w-1/5 overflow-auto mt-[5vh] mb-[10vh] h-[80vh] scrollbar">
      <div className="ml-4">
        {sideBarItems.map((header, index) => (
          <div key={index}>
            <SideBarComponent header={header.header} item={header.item} />
          </div>
        ))}
      </div>
    </div>
  );
}
