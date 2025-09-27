
import { SketchCollector } from '../../sketchCollector';

export class MyparcelNlCollector extends SketchCollector {

    static CONFIG = {
        id: "myparcel_nl",
        name: "myparcel.nl",
        description: "i18n.collectors.myparcel_nl.description",
        version: "0",
        website: "https://www.myparcel.nl/plogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32352.jpg",
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
        entryUrl: "https://www.myparcel.nl/plogin",
    }

    constructor() {
        super(MyparcelNlCollector.CONFIG);
    }
}
