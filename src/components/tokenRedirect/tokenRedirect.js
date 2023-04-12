import { Navigate, useSearchParams } from "react-router-dom";

const TokenRedirect = () => {

    const [searchParams] = useSearchParams();
    let token = searchParams.get("token")
    if (token) {
        localStorage.setItem('token', token);
    }
    Navigate({to: '/realtime-investment'})

    return (
        <div className="h-def">{token}</div>
    )
}

export default TokenRedirect;