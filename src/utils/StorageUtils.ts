export default class StorageUtils {
    static async clearStorage() {
        localStorage.clear();
    }

    static async getToken(): Promise<string | null> {
        const token = localStorage.getItem("token");

        if (token === null) {
            return null;
        }

        return token;
    }

    static setToken(token: string): void {
        localStorage.setItem("token", token);
    }
}