'use client'
import { store } from './store'
import { Provider as ReactReduxPorvider} from 'react-redux'
import { persistStore, REGISTER, REHYDRATE } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react' 

export default function ReduxPorvider({children}: {children:React.ReactNode}) {
    let reduxPersistor = persistStore(store)

    return (
        <ReactReduxPorvider store={store}>
            <PersistGate loading={null} persistor={reduxPersistor}>
                {children}
            </PersistGate>
        </ReactReduxPorvider>
    )
}