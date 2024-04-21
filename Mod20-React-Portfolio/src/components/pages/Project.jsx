export default function Project ({ title, image, link }) {
    return (
        <div className="card p-1 m-3">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
}