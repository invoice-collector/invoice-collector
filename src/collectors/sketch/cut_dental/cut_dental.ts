
import { SketchCollector } from '../../sketchCollector';

export class CutDentalCollector extends SketchCollector {

    static CONFIG = {
        id: "cut_dental",
        name: "Cut Dental",
        description: "i18n.collectors.cut_dental.description",
        version: "0",
        website: "https://cut-dental.de/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4607616.jpg",
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
        entryUrl: "https://cut-dental.de/account/login",
    }

    constructor() {
        super(CutDentalCollector.CONFIG);
    }
}
