import { img } from '../data';

/** 3D ornament: a flat colour silhouette multiplied with the rendered shape for shading. */
export default function Shape3D({ src, size, x, y, color }) {
  const url = img(src);
  return (
    <div className="shape3d" aria-hidden="true"
      style={{ width: size, height: size, left: x, top: y, '--shape': `url(${url})`, '--shape-color': color }}>
      <img src={url} alt="" />
    </div>
  );
}

export function ShapeField({ shapes, className = '' }) {
  return (
    <div className={`shape-field ${className}`} aria-hidden="true">
      <div className="shape-field__stage">
        {shapes.map((s, i) => <Shape3D key={i} {...s} />)}
      </div>
    </div>
  );
}
