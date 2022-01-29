import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "../pages/MainPages/MainPages";
import PagesArticle from "../pages/PagesArticle/PagesArticle";

import { useEffect } from "react";
import { addPostsToStore, postsList } from "../redux/posts";
import {
  categories as categoriesRedux,
  addCategoriesToStore,
} from "../redux/categories";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import routes from "../routes/routes";
import AboutMe from "../pages/AboutMe/AboutMe";

export const Router = () => {
  const dispatch = useDispatch();

  const posts = useSelector(postsList);
  const categories = useSelector(categoriesRedux);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(addPostsToStore());
    }
    if (categories.length === 0) {
      dispatch(addCategoriesToStore());
    }
  }, []);

  return (
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path={routes.mainPage} component={MainPage} />
            <Route path={routes.pagesArticle} component={PagesArticle} />
            <Route path={routes.AboutMe} component={AboutMe} />
          </Switch>
        </AnimatePresence>
      )}
    />
  );
};
