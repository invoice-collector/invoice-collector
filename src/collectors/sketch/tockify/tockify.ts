
import { SketchCollector } from '../../sketchCollector';

export class TockifyCollector extends SketchCollector {

    static CONFIG = {
        id: "tockify",
        name: "Tockify",
        description: "i18n.collectors.tockify.description",
        version: "0",
        website: "https://tockify.com/i/site/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1101215.jpg",
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
        entryUrl: "https://tockify.com/i/site/login",
    }

    constructor() {
        super(TockifyCollector.CONFIG);
    }
}
