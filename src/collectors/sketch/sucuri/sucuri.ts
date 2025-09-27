
import { SketchCollector } from '../../sketchCollector';

export class SucuriCollector extends SketchCollector {

    static CONFIG = {
        id: "sucuri",
        name: "Sucuri",
        description: "i18n.collectors.sucuri.description",
        version: "0",
        website: "https://dashboard.sucuri.net/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31243.jpg",
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
        entryUrl: "https://dashboard.sucuri.net/login/",
    }

    constructor() {
        super(SucuriCollector.CONFIG);
    }
}
