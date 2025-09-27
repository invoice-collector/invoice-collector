
import { SketchCollector } from '../../sketchCollector';

export class LucidpicCollector extends SketchCollector {

    static CONFIG = {
        id: "lucidpic",
        name: "Lucidpic",
        description: "i18n.collectors.lucidpic.description",
        version: "0",
        website: "https://lucidpic.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842282.jpg",
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
        entryUrl: "https://lucidpic.com",
    }

    constructor() {
        super(LucidpicCollector.CONFIG);
    }
}
