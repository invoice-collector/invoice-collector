
import { SketchCollector } from '../../sketchCollector';

export class CoveragebookCollector extends SketchCollector {

    static CONFIG = {
        id: "coveragebook",
        name: "coveragebook",
        description: "i18n.collectors.coveragebook.description",
        version: "0",
        website: "https://coveragebook.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167018.jpg",
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
        entryUrl: "https://coveragebook.com/",
    }

    constructor() {
        super(CoveragebookCollector.CONFIG);
    }
}
