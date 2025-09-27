
import { SketchCollector } from '../../sketchCollector';

export class LoffelhardtCollector extends SketchCollector {

    static CONFIG = {
        id: "loffelhardt",
        name: "Loffelhardt",
        description: "i18n.collectors.loffelhardt.description",
        version: "0",
        website: "https://online.loeffelhardt.de/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/792816.jpg",
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
        entryUrl: "https://online.loeffelhardt.de/de/login",
    }

    constructor() {
        super(LoffelhardtCollector.CONFIG);
    }
}
