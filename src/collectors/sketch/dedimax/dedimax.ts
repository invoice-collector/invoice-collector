
import { SketchCollector } from '../../sketchCollector';

export class DedimaxCollector extends SketchCollector {

    static CONFIG = {
        id: "dedimax",
        name: "DEDIMAX",
        description: "i18n.collectors.dedimax.description",
        version: "0",
        website: "https://panel.dedimax.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/931015.jpg",
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
        entryUrl: "https://panel.dedimax.com/login",
    }

    constructor() {
        super(DedimaxCollector.CONFIG);
    }
}
