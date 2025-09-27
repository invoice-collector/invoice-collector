
import { SketchCollector } from '../../sketchCollector';

export class JiffyboxCollector extends SketchCollector {

    static CONFIG = {
        id: "jiffybox",
        name: "JiffyBox",
        description: "i18n.collectors.jiffybox.description",
        version: "0",
        website: "https://admin.jiffybox.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8066.jpg",
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
        entryUrl: "https://admin.jiffybox.de/",
    }

    constructor() {
        super(JiffyboxCollector.CONFIG);
    }
}
