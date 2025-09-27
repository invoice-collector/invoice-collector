
import { SketchCollector } from '../../sketchCollector';

export class Best4tiresCollector extends SketchCollector {

    static CONFIG = {
        id: "best4tires",
        name: "best4tires",
        description: "i18n.collectors.best4tires.description",
        version: "0",
        website: "https://login.best4tires.com/auth/realms/mygundlach/protocol/openid-connect/auth?client_id=frontend&redirect_uri=https%3A%2F%2Fwww.best4tires.com%2Fde%2Fuser%2Fcallback%2F&response_type=code&state=&ui_locales=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1440626.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://login.best4tires.com/auth/realms/mygundlach/protocol/openid-connect/auth?client_id=frontend&redirect_uri=https%3A%2F%2Fwww.best4tires.com%2Fde%2Fuser%2Fcallback%2F&response_type=code&state=&ui_locales=de",
    }

    constructor() {
        super(Best4tiresCollector.CONFIG);
    }
}
