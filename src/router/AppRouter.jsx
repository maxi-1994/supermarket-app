import { Routes, Route } from 'react-router-dom';

import { Login } from '../auth/pages/Login';
import { TabsRouter } from '../tabs/routes/TabsRouter';

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path='/login' element={ <Login /> } />
                <Route path='/*' element={ <TabsRouter /> } />
            </Routes>
        </>
    )
}

/*
    ----- TODO -----
    - Agregar Rutas publicas y privadas cuando haya autenticacion en Firebase
*/