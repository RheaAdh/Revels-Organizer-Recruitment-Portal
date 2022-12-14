import React, { useEffect, useState } from "react";
import "../App.css";

const Categories = (props) => {
  const [activeCat, setActiveCat] = useState({
    title: "",
    description: "",
    video: "",
  });
  setTimeout(() => {
    activeCat.title !== "" &&
      document.getElementById(activeCat.title)?.classList.add("active");
  }, 100);

  // resets any active tiles
  const removeActive = () => {
    props.categories.forEach((category) => {
      document.getElementById(category.title)?.classList.remove("active");
    });
  };

  // handles tile click
  const handleCardClick = (title, description, video) => {
    setActiveCat({
      title: title,
      description: description,
      video: video,
    });
    removeActive();
    document.getElementById(title)?.classList.add("active");
  };

  useEffect(() => {
    setActiveCat({
      title: props.categories[0].title,
      description: props.categories[0].description,
      video: props.categories[0].video,
    });
    document.getElementById(props.categories[0].title)?.classList.add("active");
  }, [props.categories]);

  return (
    <div className="categories">
      <div className="category-list">
        {props.isList ? (
          props.categories.map((category, index) => {
            return (
              <div
                key={index}
                id={category.title}
                className={!category.blocked ? "cat-card" : "cat-card disabled"}
                onClick={() => {
                  if (!category.blocked)
                    handleCardClick(
                      category.title,
                      category.description,
                      category.video
                    );
                }}
              >
                <p>{category.title}</p>
                {category.blocked ? (
                  <>
                    <br />
                    <p style={{ fontSize: "10px", padding: "2px" }}>
                      closed
                    </p>{" "}
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div className="category-info">
        <div className="video-desc">
          <iframe
            className="video"
            src={props.isList ? activeCat.video : props.item.video}
            frameborder="0"
          ></iframe>
          <div className="desc">
            <span>{props.isList ? activeCat.title : props.item.title}</span>
            <p>
              {props.isList ? activeCat.description : props.item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
