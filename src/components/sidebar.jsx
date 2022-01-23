import React from "react";

function SideBarLink({ href, children }) {
  return (
    <a className="
    block
    text-brand-dark
    hover:text-brand hover:underline
    " href={href} target="_blank">
      {children}
    </a>
  );
}

export default () => {
  return (
    <div className="mt-2 h-full
    pl-4
    border-black border-l-2
    border-dashed
    ">
      <img
        className="
        w-48
        rounded-2xl shadow-lg
        object-cover
        "
        src="/icon.png"
      ></img>
      <div className="mt-4 space-y-0.5">
        <SideBarLink href="https://cuprumz.com">
          俺的主站点(cuprumz.com)
        </SideBarLink>
        <SideBarLink href="mailto:cuprumzhen@gmail.com">
          俺的邮箱(Gmail)
        </SideBarLink>
        <SideBarLink href="https://github.com/cuprumz">
          俺的收藏(GitHub)
        </SideBarLink>
        <SideBarLink href="https://twitter.com/cuprum_z">
          俺的推特(@cuprum_z)
        </SideBarLink>
      </div>
    </div>
  );
};
