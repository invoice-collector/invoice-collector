
import { SketchCollector } from '../../sketchCollector';

export class AlscoCollector extends SketchCollector {

    static CONFIG = {
        id: "alsco",
        name: "ALSCO",
        description: "i18n.collectors.alsco.description",
        version: "0",
        website: "https://atrack.alsco.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/419709.jpg",
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
        entryUrl: "https://atrack.alsco.com/",
    }

    constructor() {
        super(AlscoCollector.CONFIG);
    }
}
