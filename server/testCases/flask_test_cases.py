import unittest, sys
sys.path.append("..")
from server import app

class FlaskTests(unittest.TestCase):

    def setUp(self):
        """Stuff to do before every test."""

        self.client = app.test_client()
        app.config['TESTING'] = True

    def tearDown(self):
        """Stuff to do after every test."""
        pass

    def test_homepage_route(self):
        """Tests that home page route is working."""

        result = self.client.get("/")
        self.assertEqual(result.status_code, 200)
        self.assertIn(b"<h1>Welcome to Fetch!</h1>", result.data)

if __name__ == "__main__":
    unittest.main()
