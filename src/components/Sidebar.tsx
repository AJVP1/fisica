import { NavLink } from "react-router-dom";
import modulos from "../data/modulos.json";

type SidebarItem = {
  to: string;
  label: string;
  icon: string;
};

type SidebarGroup = {
  title: string;
  items: SidebarItem[];
};

const groups: SidebarGroup[] = modulos.sidebar;

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

const SidebarContent = ({ onClose }: { onClose?: () => void }) => (
  <>
    {groups.map((group) => (
      <div key={group.title}>
        <h5 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#757575]">
          {group.title}
        </h5>
        <ul className="space-y-1">
          {group.items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? "bg-accent text-white font-medium"
                      : "text-[#141414] hover:bg-[#f2f2f2]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`material-symbols-outlined text-base ${
                        isActive ? "text-white" : "text-[#757575]"
                      }`}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </>
);

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar-scroll hidden md:flex md:w-72 md:flex-col md:sticky md:top-24 md:h-[calc(100vh-96px)] overflow-y-auto border-r border-[#f2f2f2] p-6 space-y-8 z-10">
        <SidebarContent />
      </aside>

      {/* Mobile modal overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          {/* Drawer */}
          <aside className="sidebar-scroll relative w-72 max-w-[85vw] bg-white h-full overflow-y-auto p-6 space-y-8 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#757575]">Navegación</span>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-[#f2f2f2] transition-colors"
                aria-label="Cerrar menú"
              >
                <span className="material-symbols-outlined text-[#757575]">close</span>
              </button>
            </div>
            <SidebarContent onClose={onClose} />
          </aside>
        </div>
      )}
    </>
  );
};
