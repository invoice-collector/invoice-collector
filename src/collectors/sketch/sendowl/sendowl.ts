
import { SketchCollector } from '../../sketchCollector';

export class SendowlCollector extends SketchCollector {

    static CONFIG = {
        id: "sendowl",
        name: "SendOwl",
        description: "i18n.collectors.sendowl.description",
        version: "0",
        website: "https://www.sendowl.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28529.jpg",
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
        entryUrl: "https://www.sendowl.com/login",
    }

    constructor() {
        super(SendowlCollector.CONFIG);
    }
}
