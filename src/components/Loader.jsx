import { useState, CSSProperties } from "react"
import BarLoader from 'react-spinners/BarLoader';

const Loader = () => {
    const [loading, setLoading] = useState(true);

    return <div className="loader">
        <BarLoader
            color="#572327"
            loading={loading}
            size={80} />
        <p className="loader-p">Cargando..</p>
    </div>
}

export default Loader;