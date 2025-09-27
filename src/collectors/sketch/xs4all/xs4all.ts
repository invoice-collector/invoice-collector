
import { SketchCollector } from '../../sketchCollector';

export class Xs4allCollector extends SketchCollector {

    static CONFIG = {
        id: "xs4all",
        name: "XS4ALL",
        description: "i18n.collectors.xs4all.description",
        version: "0",
        website: "https://inloggen.xs4all.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9473.jpg",
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
        entryUrl: "https://inloggen.xs4all.nl/login",
    }

    constructor() {
        super(Xs4allCollector.CONFIG);
    }
}
