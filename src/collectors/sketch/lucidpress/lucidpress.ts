
import { SketchCollector } from '../../sketchCollector';

export class LucidpressCollector extends SketchCollector {

    static CONFIG = {
        id: "lucidpress",
        name: "Lucidpress",
        description: "i18n.collectors.lucidpress.description",
        version: "0",
        website: "https://www.lucidpress.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10675.jpg",
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
        entryUrl: "https://www.lucidpress.com/users/login",
    }

    constructor() {
        super(LucidpressCollector.CONFIG);
    }
}
