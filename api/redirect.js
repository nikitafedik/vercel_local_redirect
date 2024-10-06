export default function handler(req, res) {
  const { query } = req;

  // Map the incoming link to a local file or app
  const redirects = {
    "localfile": "file:///C:/path/to/your/localfile.txt",
    "localapp": "app://path/to/your/localapp",
  };

  const target = redirects[query.link];

  if (target) {
    res.writeHead(302, { Location: target });
    res.end();
  } else {
    res.status(404).send("Not Found");
  }
}
