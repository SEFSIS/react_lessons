import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {RouterEndpoints} from "./routes/routes";
import {HomePage} from "./api/pages/HomePage/HomePage";
import {TodosPage} from "./api/pages/TodosPage/TodosPage";
import {AlbumsPage} from "./api/pages/AlbumsPage/AlbumsPage";
import {CommentsPage} from "./api/pages/CommentsPage/CommentsPage";
import {PostByCommentPage} from "./api/pages/PostByCommentPage/PostByCommentPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={RouterEndpoints.index} element={<MainLayout/>}>
                    <Route path={RouterEndpoints.index} index element={<HomePage/>}/>
                    <Route path={RouterEndpoints.todos} element={<TodosPage/>}/>
                    <Route path={RouterEndpoints.albums} element={<AlbumsPage/>}/>
                    <Route path={RouterEndpoints.comments} element={<CommentsPage/>}>
                        <Route path={RouterEndpoints.postId} element={<PostByCommentPage/>}/>

                    </Route>
                </Route>
            </Routes>
        </div>
    )
        ;
};

export {App};



