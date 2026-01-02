import "./loader.css";

export default function Loader() {
  return (
     <div className="np-loader">
      <div className="np-core">
        <div className="np-ring" />
        <div className="np-pulse" />
      </div>

      <span className="np-text">Initializing AGORA...</span>
    </div>
  );
}
