import Project from "./Project";

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="row">
        <div className="col-md-4">
          <Project 
            title="RecipeHub"
            image="/recipehub.png"
            link="https://github.com/ECiarabellini/RecipeHub"
          />
        </div>
        <div className="col-md-4">
          <Project 
            title="BlogHub"
            image="/techblog.png"
            link="https://github.com/ECiarabellini/Mod14-MVC-BlogHub"
          />
        </div>
        <div className="col-md-4">
          <Project 
            title="Note Taker"
            image="/notes.png"
            link="https://github.com/ECiarabellini/Mod11-Note-Taker"
          />
        </div>
        <div className="col-md-4">
          <Project 
            title="MongoDB Social Network API"
            image="/social.png"
            link="https://github.com/ECiarabellini/Mod18-MongoDB-SocialAPI"
          />
        </div>
        <div className="col-md-4">
          <Project 
            title="SQL Employee Management CLI"
            image="/employee.png"
            link="https://github.com/ECiarabellini/Mod12-SQL-Employee-Management-CLI"
          />
        </div>
        <div className="col-md-4">
          <Project 
            title="TempoForecast"
            image="/tempoforecast.png"
            link="https://github.com/ECiarabellini/TempoForecast"
          />
        </div>
      </div>
    </div>
  );
}
