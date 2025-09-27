
import { SketchCollector } from '../../sketchCollector';

export class EversourceCollector extends SketchCollector {

    static CONFIG = {
        id: "eversource",
        name: "Eversource",
        description: "i18n.collectors.eversource.description",
        version: "0",
        website: "http://www.eversource.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8972.jpg",
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
        entryUrl: "http://www.eversource.com",
    }

    constructor() {
        super(EversourceCollector.CONFIG);
    }
}
