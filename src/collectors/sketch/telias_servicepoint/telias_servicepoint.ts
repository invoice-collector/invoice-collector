
import { SketchCollector } from '../../sketchCollector';

export class TeliasServicepointCollector extends SketchCollector {

    static CONFIG = {
        id: "telias_servicepoint",
        name: "Telias Servicepoint",
        description: "i18n.collectors.telias_servicepoint.description",
        version: "0",
        website: "https://www.telias.de/login/de#overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/438.jpg",
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
        entryUrl: "https://www.telias.de/login/de#overview",
    }

    constructor() {
        super(TeliasServicepointCollector.CONFIG);
    }
}
