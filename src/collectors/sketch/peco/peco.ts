
import { SketchCollector } from '../../sketchCollector';

export class PecoCollector extends SketchCollector {

    static CONFIG = {
        id: "peco",
        name: "Peco",
        description: "i18n.collectors.peco.description",
        version: "0",
        website: "http://www.peco-uk.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8865.jpg",
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
        entryUrl: "http://www.peco-uk.com",
    }

    constructor() {
        super(PecoCollector.CONFIG);
    }
}
