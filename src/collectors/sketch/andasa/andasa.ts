
import { SketchCollector } from '../../sketchCollector';

export class AndasaCollector extends SketchCollector {

    static CONFIG = {
        id: "andasa",
        name: "Andasa",
        description: "i18n.collectors.andasa.description",
        version: "0",
        website: "http://www.andasa.de/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64994.jpg",
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
        entryUrl: "http://www.andasa.de/login.html",
    }

    constructor() {
        super(AndasaCollector.CONFIG);
    }
}
