
import { SketchCollector } from '../../sketchCollector';

export class JantyFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "janty_france",
        name: "Janty France",
        description: "i18n.collectors.janty_france.description",
        version: "0",
        website: "https://www.janty.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120472.jpg",
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
        entryUrl: "https://www.janty.com/",
    }

    constructor() {
        super(JantyFranceCollector.CONFIG);
    }
}
