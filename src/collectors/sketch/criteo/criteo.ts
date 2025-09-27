
import { SketchCollector } from '../../sketchCollector';

export class CriteoCollector extends SketchCollector {

    static CONFIG = {
        id: "criteo",
        name: "Criteo",
        description: "i18n.collectors.criteo.description",
        version: "0",
        website: "https://marketing.criteo.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28706.jpg",
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
        entryUrl: "https://marketing.criteo.com/login",
    }

    constructor() {
        super(CriteoCollector.CONFIG);
    }
}
