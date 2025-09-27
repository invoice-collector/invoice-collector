
import { SketchCollector } from '../../sketchCollector';

export class ApiaryCollector extends SketchCollector {

    static CONFIG = {
        id: "apiary",
        name: "Apiary",
        description: "i18n.collectors.apiary.description",
        version: "0",
        website: "https://login.apiary.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7051.jpg",
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
        entryUrl: "https://login.apiary.io/login",
    }

    constructor() {
        super(ApiaryCollector.CONFIG);
    }
}
