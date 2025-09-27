
import { SketchCollector } from '../../sketchCollector';

export class EpsonReadyPrintEuCollector extends SketchCollector {

    static CONFIG = {
        id: "epson_ready_print_eu",
        name: "Epson Ready Print EU",
        description: "i18n.collectors.epson_ready_print_eu.description",
        version: "0",
        website: "https://subscription.epson.eu/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1336083.jpg",
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
        entryUrl: "https://subscription.epson.eu/",
    }

    constructor() {
        super(EpsonReadyPrintEuCollector.CONFIG);
    }
}
