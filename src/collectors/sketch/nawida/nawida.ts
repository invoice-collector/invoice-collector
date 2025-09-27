
import { SketchCollector } from '../../sketchCollector';

export class NawidaCollector extends SketchCollector {

    static CONFIG = {
        id: "nawida",
        name: "NAWIDA",
        description: "i18n.collectors.nawida.description",
        version: "0",
        website: "https://nawida.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4426749.jpg",
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
        entryUrl: "https://nawida.de/login",
    }

    constructor() {
        super(NawidaCollector.CONFIG);
    }
}
