<<<<<<< HEAD
=======
import CarouselGallery from './components/CarouselGallery';
>>>>>>> homepage
import NavBar from './components/navbar';
import HomePage from './homePage';
import NoTimeToDiePage from './NoTimeToDiePage';
import BookingNoTimeToDiePage from './BookingNoTimeToDiePage';
import OpeningTimes from './openingTimes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
<<<<<<< HEAD
          <Home />
=======
          <HomePage />
        </Route>
        <Route path="/movie/no_time_to_die">
          <NoTimeToDiePage />
        </Route>
        <Route path="/booking/no_time_to_die">
          <BookingNoTimeToDiePage />
>>>>>>> homepage
        </Route>
        <Route path="/OpeningTimes">
          <OpeningTimes />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
