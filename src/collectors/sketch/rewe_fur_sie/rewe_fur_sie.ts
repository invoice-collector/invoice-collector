
import { SketchCollector } from '../../sketchCollector';

export class ReweFurSieCollector extends SketchCollector {

    static CONFIG = {
        id: "rewe_fur_sie",
        name: "REWE fur Sie",
        description: "i18n.collectors.rewe_fur_sie.description",
        version: "0",
        website: "https://portal.fuer-sie-eg.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1108440.jpg",
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
        entryUrl: "https://portal.fuer-sie-eg.de/login",
    }

    constructor() {
        super(ReweFurSieCollector.CONFIG);
    }
}
