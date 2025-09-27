
import { SketchCollector } from '../../sketchCollector';

export class TravisPerkinsCollector extends SketchCollector {

    static CONFIG = {
        id: "travis_perkins",
        name: "Travis Perkins",
        description: "i18n.collectors.travis_perkins.description",
        version: "0",
        website: "https://www.travisperkins.co.uk/login?targetUrl=/cart&uiel=Desktop",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/189970.jpg",
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
        entryUrl: "https://www.travisperkins.co.uk/login?targetUrl=/cart&uiel=Desktop",
    }

    constructor() {
        super(TravisPerkinsCollector.CONFIG);
    }
}
