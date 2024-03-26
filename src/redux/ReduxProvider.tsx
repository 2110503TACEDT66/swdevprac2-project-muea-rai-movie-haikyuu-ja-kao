'use client'
import { store } from './store'
import { Provider as ReactReduxPorvider} from 'react-redux'

export default function ReduxPorvider({children}: {children:React.ReactNode}) {
    return (
        <ReactReduxPorvider store={store}>
            {children}
        </ReactReduxPorvider>
    )
}