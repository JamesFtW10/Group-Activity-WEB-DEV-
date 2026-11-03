import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/items", label: "Items" },
  { to: "/forms", label: "Forms" },
];

function Aside() {
  return (
<div className="lg:drawer-open">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-side">
    <label  aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-neutral min-h-full w-80 p-4">
      {/* Sidebar content here */}
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink className="text-white" to={item.to} end={item.end}>{item.label}</NavLink>
          </li>
        ))}
    </ul>
  </div>
</div>
  );
}




export default Aside;


