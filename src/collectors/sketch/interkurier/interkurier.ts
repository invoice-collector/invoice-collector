
import { SketchCollector } from '../../sketchCollector';

export class InterkurierCollector extends SketchCollector {

    static CONFIG = {
        id: "interkurier",
        name: "interkurier",
        description: "i18n.collectors.interkurier.description",
        version: "0",
        website: "https://cloud-11.datenbanken24.de/apps/ikauftrag/base.nsf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1203405.jpg",
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
        entryUrl: "https://cloud-11.datenbanken24.de/apps/ikauftrag/base.nsf",
    }

    constructor() {
        super(InterkurierCollector.CONFIG);
    }
}
