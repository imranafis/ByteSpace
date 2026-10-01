import Band from '../components/Band.jsx';
import Footer from '../components/Footer.jsx';
import Button from '../components/Button.jsx';
import { ShapeField } from '../components/Shape3D.jsx';
import { notFoundShapes } from '../data';

export default function NotFound() {
  return (
    <>
      <main>
        <Band className="notfound">
          <ShapeField shapes={notFoundShapes} />
          <div className="notfound__content">
            <p className="notfound__code" aria-hidden="true">404</p>
            <h1 className="display-l notfound__title">The page you are looking for doesn’t exist</h1>
            <p className="body-l">Try to use a correct url or go back to homepage to start again</p>
            <Button to="/" variant="lime">Back to Home</Button>
          </div>
        </Band>
      </main>
      <Footer />
    </>
  );
}
