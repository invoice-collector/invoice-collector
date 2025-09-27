
import { SketchCollector } from '../../sketchCollector';

export class LavitaCollector extends SketchCollector {

    static CONFIG = {
        id: "lavita",
        name: "LaVita",
        description: "i18n.collectors.lavita.description",
        version: "0",
        website: "https://account.lavita.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1194003.jpg",
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
        entryUrl: "https://account.lavita.de/login",
    }

    constructor() {
        super(LavitaCollector.CONFIG);
    }
}
