
import { SketchCollector } from '../../sketchCollector';

export class PayzoneIeCollector extends SketchCollector {

    static CONFIG = {
        id: "payzone_ie",
        name: "Payzone IE",
        description: "i18n.collectors.payzone_ie.description",
        version: "0",
        website: "https://www.payzone.ie/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/741161.jpg",
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
        entryUrl: "https://www.payzone.ie/",
    }

    constructor() {
        super(PayzoneIeCollector.CONFIG);
    }
}
