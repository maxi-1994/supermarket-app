import { Routes, Route, Navigate } from 'react-router-dom';

import { Navbar } from '../../shared/components/Navbar';
import { SuperMarketList } from '../pages/SuperMarketList';
import { Historial } from '../pages/Historial';
import { ListProvider } from '../context/ListProvider';


export const TabsRouter = () => {

    return (
        <ListProvider>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="items-list" element={ <SuperMarketList /> } />
                    <Route path="historial" element={ <Historial /> } />

                    <Route path="/" element={ <Navigate to='items-list' /> } />
                </Routes>
            </div>
        </ListProvider>

    )
}