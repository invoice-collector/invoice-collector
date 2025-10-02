
import { SketchCollector } from '../../sketchCollector';

export class EngieBeNlCollector extends SketchCollector {

    static CONFIG = {
        id: "engie_be_nl",
        name: "Engie Pro (.be)",
        description: "i18n.collectors.engie_be_nl.description",
        version: "0",
        website: "https://www.engie.be/nl/professionals/customer-area/facturen-en-betalingen/facturen-betalingen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1361518.jpg",
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
        entryUrl: "https://www.engie.be/nl/professionals/customer-area/facturen-en-betalingen/facturen-betalingen/",
    }

    constructor() {
        super(EngieBeNlCollector.CONFIG);
    }
}
