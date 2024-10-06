export default function handler(req, res) {
    const { f } = req.query;
    res.writeHead(302, { Location: `localexplorer://${f}` });
    res.end();
  }