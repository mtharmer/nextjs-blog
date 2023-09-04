import NavItem from "./navitem"

export default function NavItemList({ items }) {
  return (
    items.map((item) => {
      return <NavItem key={item.key} item={item} />
    })
  );
}
