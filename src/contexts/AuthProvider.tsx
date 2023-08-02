import { createContext, useState, useEffect, useContext } from 'react';
import StorageUtils from '../utils/StorageUtils';

interface IAuthContext {
    isAuthorized: boolean,
    loading: boolean,
    authenticate: (login: string, password: string) => Promise<void>,
    logout: () => void,
    token?: string
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: any) => {
    const [isAuthorized, setAuthorized] = useState<boolean>(false);
    const [token, setToken] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageToken = await StorageUtils.getToken();

            if (storageToken) {
                setToken(storageToken);
                setAuthorized(true);
            }


            setLoading(false);
        }

        loadStorageData();
    }, []);

    async function authenticate(login: string, password: string): Promise<void> {
        const result = 'abc';

        await StorageUtils.setToken(result);

        setToken(result);
        setAuthorized(true)
    }

    async function logout(): Promise<void> {
        await StorageUtils.clearStorage();
        setAuthorized(false);
        setToken(undefined);
    }



    return (
        <AuthContext.Provider value={{ isAuthorized, token, loading, authenticate, logout }}>
            {children}
        </AuthContext.Provider >
    )
}

export function useAuth() {
    const context = useContext<IAuthContext | any>(AuthContext);

    return context as IAuthContext;
}