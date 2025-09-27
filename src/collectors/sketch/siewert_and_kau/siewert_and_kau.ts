
import { SketchCollector } from '../../sketchCollector';

export class SiewertAndKauCollector extends SketchCollector {

    static CONFIG = {
        id: "siewert_and_kau",
        name: "Siewert & Kau",
        description: "i18n.collectors.siewert_and_kau.description",
        version: "0",
        website: "http://www.siewert-kau.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122592.jpg",
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
        entryUrl: "http://www.siewert-kau.de",
    }

    constructor() {
        super(SiewertAndKauCollector.CONFIG);
    }
}
