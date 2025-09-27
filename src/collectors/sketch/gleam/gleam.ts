
import { SketchCollector } from '../../sketchCollector';

export class GleamCollector extends SketchCollector {

    static CONFIG = {
        id: "gleam",
        name: "Gleam",
        description: "i18n.collectors.gleam.description",
        version: "0",
        website: "https://gleam.io",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8003.jpg",
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
        entryUrl: "https://gleam.io",
    }

    constructor() {
        super(GleamCollector.CONFIG);
    }
}
