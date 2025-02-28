import NavLinkButton from "../NavLinkButton";

const BottomButtons = () => {
  return (
    <div className="flex pt-3 justify-between w-full px-3 gap-3">
      <NavLinkButton href="/store-locator" className="w-full">
        find in store
      </NavLinkButton>
      <NavLinkButton href={"/rewards"} className="w-full">
        reward
      </NavLinkButton>
    </div>
  );
};

export default BottomButtons;
