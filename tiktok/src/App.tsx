import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Defaulayout from './components/Layout/Defaulayout/Index';
import { publicRoutes } from './routes/Index';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout === null ? Fragment : Defaulayout;
                        if (Layout === Defaulayout) {
                            return (
                                <Route key={index} path={route.path} element={<Layout Children={<Page />}></Layout>} />
                            );
                        } else {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Fragment>
                                            <Page />
                                        </Fragment>
                                    }
                                />
                            );
                        }
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
