import { useAuth } from "../../contexts/AuthProvider"

export default function LoginPage() {
    const { authenticate } = useAuth();

    return (
        <>
            <h1>WELCOME</h1>
            <div style={{width: '300px'}}>
                <button className="btn-primary" onClick={() => {
                    authenticate('', '');
                }}>Acessar!</button>
            </div>
        </>
    )
}