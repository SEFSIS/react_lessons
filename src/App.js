import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AlbumsPage, CommentDetailsPage, CommentsPage, CompleteTasksPage, NotFoundPage} from "./pages";


const App = () => {

  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route path={'todos'} element={<CompleteTasksPage/>}/>
              <Route path={'albums'} element={<AlbumsPage/>}/>

              <Route path={'comments'} element={<CommentsPage/>}>
                  <Route path={':postId'} element={<CommentDetailsPage/>}/>

              </Route>

          </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>

  );
};

export {App};



