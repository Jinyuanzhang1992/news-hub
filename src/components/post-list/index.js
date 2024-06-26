import { useEffect, useState } from "react";
import postListMock from "../../mock-data/post-list.mock.json";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./post-list.scss";

function PostList(props) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    setPostList(postListMock);
  }, []);

  return (
    <Row className=" g-3">
      {postList.map((item) => (
        <Col md={4} key={item.id}>
          <Card>
            <Card.Img
              variant="top"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMyMCAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTg5YjEzOWRmYTggdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxNnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xODliMTM5ZGZhOCI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMTguNDY2NjY3MTc1MjkyOTciIHk9IjEwNy4xMjk5OTk5MjM3MDYwNSI+MzIweDIwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg=="
              alt="100%x200"
              style={{ height: "200px", width: "100%", display: "block" }}
            />
            <Card.Body>
              <Card.Title
                className="
              small-title"
              >
                {item.title}
              </Card.Title>
              <Card.Text
                className="
              small-text"
              >
                {item.content}
              </Card.Text>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="primary">Button</Button>
                <Button variant="secondary">Button</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default PostList;
