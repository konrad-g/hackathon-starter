/**
 * GET /
 * Home page.
 */
export class HomeController {
  
  index(req, res) {
    res.render('home', {
      title: 'Home'
    });
  };
}
