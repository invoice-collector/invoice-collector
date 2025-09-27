
import { SketchCollector } from '../../sketchCollector';

export class SailthruCollector extends SketchCollector {

    static CONFIG = {
        id: "sailthru",
        name: "Sailthru",
        description: "i18n.collectors.sailthru.description",
        version: "0",
        website: "https://my.sailthru.com/login?redirect=http%3A%2F%2Fmy.sailthru.com%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8772.jpg",
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
        entryUrl: "https://my.sailthru.com/login?redirect=http%3A%2F%2Fmy.sailthru.com%2F",
    }

    constructor() {
        super(SailthruCollector.CONFIG);
    }
}
