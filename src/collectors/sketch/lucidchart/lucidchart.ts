
import { SketchCollector } from '../../sketchCollector';

export class LucidchartCollector extends SketchCollector {

    static CONFIG = {
        id: "lucidchart",
        name: "LucidChart",
        description: "i18n.collectors.lucidchart.description",
        version: "0",
        website: "https://www.lucidchart.com/users/login?passwordOnly=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7360.jpg",
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
        entryUrl: "https://www.lucidchart.com/users/login?passwordOnly=1",
    }

    constructor() {
        super(LucidchartCollector.CONFIG);
    }
}
