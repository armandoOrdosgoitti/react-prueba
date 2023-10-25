import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Form } from './components/formulario'
import { Tablas } from './components/tablas'
export function App(){
    return (
        <div className="container box box-border">
            <nav className="bg-slate-950 p-2 flex flex-row justify-between items-baseline">
            <h1 className="text-3xl text-white mx-2">React tailwind</h1>
            <button className='text-white border border-slate-50 px-2 py-1 rounded sm:invisible'>
            <FontAwesomeIcon icon={faBars} />
            </button>
        </nav>
        <>
        <Form/>
        <Tablas/>
        </>

        </div>

    )
}