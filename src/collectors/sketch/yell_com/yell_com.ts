
import { SketchCollector } from '../../sketchCollector';

export class YellComCollector extends SketchCollector {

    static CONFIG = {
        id: "yell_com",
        name: "Yell.com",
        description: "i18n.collectors.yell_com.description",
        version: "0",
        website: "https://auth.yell.com/sso/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109099.jpg",
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
        entryUrl: "https://auth.yell.com/sso/login",
    }

    constructor() {
        super(YellComCollector.CONFIG);
    }
}
