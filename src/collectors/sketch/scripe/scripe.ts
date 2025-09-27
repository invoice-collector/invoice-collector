
import { SketchCollector } from '../../sketchCollector';

export class ScripeCollector extends SketchCollector {

    static CONFIG = {
        id: "scripe",
        name: "Scripe",
        description: "i18n.collectors.scripe.description",
        version: "0",
        website: "https://scripe.io/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4513750.jpg",
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
        entryUrl: "https://scripe.io/signin",
    }

    constructor() {
        super(ScripeCollector.CONFIG);
    }
}
