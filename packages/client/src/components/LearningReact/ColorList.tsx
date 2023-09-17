import React from "react";
import { useColors } from "./useColor";
import { useEdit } from "./useEdit";
import { StarRating } from "./StarRating";
import { EditModal } from "./EditModal";

export const ColorList: React.FC = () => {
  const { colors, removeColor, doBookmark } = useColors();
  const { isOpenModal, setOpenModal, setSelectedId } = useEdit();

  return (
    <section className="section">
      <div className="container">
        <div className="field">
          <label className="label">Color list</label>
          {colors &&
            colors.map((item, idx) => {
              return (
                <div key={idx}>
                  <div>{item.title}</div>
                  <div>
                    <button
                      onClick={(): void => {
                        setOpenModal(true);
                        setSelectedId(item.id);
                      }}
                    >
                      edit
                    </button>
                  </div>
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: item.color,
                    }}
                  ></div>
                  <div>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        checked={item.isBookmark || false}
                        onChange={(): void => {
                          doBookmark(item.id, !item.isBookmark);
                        }}
                      />
                      bookmark
                    </label>
                  </div>
                  <div>{item.color}</div>
                  <StarRating id={item.id} selectedStars={item.rating} />
                  <div>
                    <button
                      onClick={(): void => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete the item?"
                          )
                        ) {
                          removeColor(item.id);
                        }
                      }}
                    >
                      remove
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
        </div>
      </div>
      {isOpenModal && <EditModal />}
    </section>
  );
};
