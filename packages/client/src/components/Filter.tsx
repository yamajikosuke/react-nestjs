import React from "react";

export const Filter: React.FC = () => {
  const items = [
    { name: "label_1", isDelete: false },
    { name: "label_2", isDelete: false },
    { name: "label_3", isDelete: true },
    { name: "label_4", isDelete: true },
    { name: "label_5", isDelete: false },
  ];

  type ItemProp = {
    name: string;
    isDelete: boolean;
  };

  type Prop = {
    id: number;
    item: ItemProp;
  };

  const filterWrap = (items: ItemProp[]): Prop[] => {
    return items
      .map((item, index) => {
        return {
          id: index,
          item: item,
        };
      })
      .filter((data) => {
        return !data.item.isDelete;
      });
  };

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Filter</h1>
        <div className="field">
          {filterWrap(items).map((_item, i) => {
            return (
              <div key={i}>
                {_item.id}:{_item.item.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
