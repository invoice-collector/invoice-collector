
import { SketchCollector } from '../../sketchCollector';

export class TravisCiCollector extends SketchCollector {

    static CONFIG = {
        id: "travis_ci",
        name: "Travis CI",
        description: "i18n.collectors.travis_ci.description",
        version: "0",
        website: "https://travis-ci.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34226.jpg",
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
        entryUrl: "https://travis-ci.com/invoices",
    }

    constructor() {
        super(TravisCiCollector.CONFIG);
    }
}
