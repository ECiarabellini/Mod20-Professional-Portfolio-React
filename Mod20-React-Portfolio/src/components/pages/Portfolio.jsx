import Project from "./Project";

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="row">
        <div className="col-md-4">
          <Project 
            title="RecipeHub"
            image="./oven.png"
            link="https://github.com/ECiarabellini/RecipeHub"
          />
        </div>
        <div className="col-md-4">
          <Project 
            title="BlogHub"
            image="path/to/image2.jpg"
            link="https://github.com/ECiarabellini/Mod14-MVC-BlogHub"
          />
        </div>
        <div className="col-md-4">
          <Project 
            title="Note Taker"
            image="path/to/image3.jpg"
            link="https://github.com/ECiarabellini/Mod11-Note-Taker"
          />
        </div>
        <div className="col-md-4">
          <Project 
            title="MongoDB Social Network API"
            image="path/to/image3.jpg"
            link="https://github.com/ECiarabellini/Mod18-MongoDB-SocialAPI"
          />
        </div>
        <div className="col-md-4">
          <Project 
            title="Note Taker"
            image="path/to/image3.jpg"
            link="https://github.com/ECiarabellini/Mod11-Note-Taker"
          />
        </div>
        <div className="col-md-4">
          <Project 
            title="Note Taker"
            image="path/to/image3.jpg"
            link="https://github.com/ECiarabellini/Mod11-Note-Taker"
          />
        </div>
        {/* Add more Project components as needed */}
        </div>
    </div>
  );
}
