
import { SketchCollector } from '../../sketchCollector';

export class MyuniqaCollector extends SketchCollector {

    static CONFIG = {
        id: "myuniqa",
        name: "Myuniqa",
        description: "i18n.collectors.myuniqa.description",
        version: "0",
        website: "https://myuniqa.at/main/dashboard/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2557101.jpg",
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
        entryUrl: "https://myuniqa.at/main/dashboard/documents",
    }

    constructor() {
        super(MyuniqaCollector.CONFIG);
    }
}
