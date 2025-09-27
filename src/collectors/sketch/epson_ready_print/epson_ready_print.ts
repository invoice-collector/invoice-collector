
import { SketchCollector } from '../../sketchCollector';

export class EpsonReadyPrintCollector extends SketchCollector {

    static CONFIG = {
        id: "epson_ready_print",
        name: "epson ready print",
        description: "i18n.collectors.epson_ready_print.description",
        version: "0",
        website: "https://readyprint.epson.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1132284.jpg",
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
        entryUrl: "https://readyprint.epson.com/login",
    }

    constructor() {
        super(EpsonReadyPrintCollector.CONFIG);
    }
}
