import { SecretManagerFactory } from "../secret_manager/secretManagerFactory";

export class Secret {
    id: string;
    key: string;
    value: any;

    constructor(key: string, value: any = {}) {
        this.id = "";
        this.key = key;
        this.value = value;
    }

    private async getValue(key: string): Promise<any> {
        if (Object.keys(this.value).length == 0) {
            this.value = await SecretManagerFactory.getSecretManager().getValue(this.id);
        }
        return this.value[key];
    }

    async getParams(): Promise<any> {
        return this.getValue("params");
    }

    async setParams(value: any) {
        this.value["params"] = value;
    }

    async getCookies(): Promise<any> {
        return this.getValue("cookies");
    }

    async setCookies(value: any) {
        this.value["cookies"] = value;
    }

    async getLocalStorage(): Promise<any> {
        return this.getValue("localStorage");
    }

    async setLocalStorage(value: any) {
        this.value["localStorage"] = value;
    }

    async commit(): Promise<void> {
        if (this.id) {
            // Update existing secret
            await SecretManagerFactory.getSecretManager().updateSecret(this);
        }
        else {
            // Create secret
            await SecretManagerFactory.getSecretManager().createSecret(this);
        }
    }

    async delete(): Promise<void> {
        await SecretManagerFactory.getSecretManager().deleteSecret(this.id);
    }
}