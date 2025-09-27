
import { SketchCollector } from '../../sketchCollector';

export class ScreamingFrogCollector extends SketchCollector {

    static CONFIG = {
        id: "screaming_frog",
        name: "Screaming Frog",
        description: "i18n.collectors.screaming_frog.description",
        version: "0",
        website: "https://www.screamingfrog.co.uk/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7009.jpg",
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
        entryUrl: "https://www.screamingfrog.co.uk/login/",
    }

    constructor() {
        super(ScreamingFrogCollector.CONFIG);
    }
}
