import React from "react";

export default ({ url }) => {
  return (
    <div className="border-black border">
      <span className="block font-bold">版权声明</span>
      <span>
        本博客所有的原创文章，作者皆保留版权。转载必须包含本声明，保持本文完整，并以超链接形式注明作者
        <a
          className="text-brand
        hover:text-brand-light
        "
          href="mailto:cuprumzhen@gmail.com"
        >
          cuprumz
        </a>
        和本文原始地址：
      </span>
      <br />
      <a
        className="text-brand
        hover:text-brand-light
        "
        href={url}
      >
        {url}
      </a>
    </div>
  );
};
