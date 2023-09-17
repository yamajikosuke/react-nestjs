import React from "react";

export const Suspense: React.FC = () => {
  return (
    // <SiteLayout menu={<p>Menu</p>}>
    //   <>
    //     <div>Callout</div>
    //     <h1>Contents</h1>
    //     <p>This is the main part of the example layout</p>
    //   </>
    // </SiteLayout>
    <div></div>
  );
};

const SiteLayout: React.FC<{
  menu: any;
  children: React.ReactNode;
}> = ({ menu, children }) => {
  return (
    <div className="site-container">
      <div>{menu}</div>
      <div>{children}</div>
    </div>
  );
};
