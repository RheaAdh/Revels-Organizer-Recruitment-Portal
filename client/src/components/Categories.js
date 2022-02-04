import React, { useEffect, useState } from "react";
import "../App.css";

const Categories = (props) => {
    console.log(props)

    const [activeCat, setActiveCat] = useState({
        title: "",
        description: "",
        video: ""
    })

    // resets any active tiles
    const removeActive = () => {
        props.categories.forEach((category) => {
            document.getElementById(category.title).classList.remove("active")
        })
    }

    // handles tile click
    const handleCardClick = (title, description, video) => {
        setActiveCat({
            title: title,
            description: description,
            video: video
        })
        removeActive()
        document.getElementById(title).classList.add("active")
    }

    useEffect(() => {
        setActiveCat({
            title: props.categories[0].title,
            description: props.categories[0].description,
            video: props.categories[0].video
        })
        document.getElementById(props.categories[0].title).classList.add("active")
    }, [])

    return (
      <div className="categories">
          <div className="category-list">
              {
                  props.categories.map((category, index) => {
                      return (
                          <div key={index} id={category.title} className="cat-card" onClick={() => handleCardClick(category.title, category.description, category.video)}>
                              <p>
                                  {category.title}
                              </p>
                          </div>
                      )
                  })
              }
          </div>
          <div className="category-info">
              <div className="video-desc">
                <iframe 
                    className="video" 
                    src={activeCat.video}
                    frameborder="0"
                >
                </iframe>
                <div className="desc">
                    <h3>{activeCat.title}</h3>
                    <p>{activeCat.description}</p>
                </div>
              </div>
          </div>
      </div>    
    );
}

export default Categories;
