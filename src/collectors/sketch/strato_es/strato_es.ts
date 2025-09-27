
import { SketchCollector } from '../../sketchCollector';

export class StratoEsCollector extends SketchCollector {

    static CONFIG = {
        id: "strato_es",
        name: "STRATO.es",
        description: "i18n.collectors.strato_es.description",
        version: "0",
        website: "https://www.strato.es/apps/CustomerService#/skl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20513.jpg",
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
        entryUrl: "https://www.strato.es/apps/CustomerService#/skl",
    }

    constructor() {
        super(StratoEsCollector.CONFIG);
    }
}
