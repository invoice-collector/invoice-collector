
import { SketchCollector } from '../../sketchCollector';

export class LocalyticsCollector extends SketchCollector {

    static CONFIG = {
        id: "localytics",
        name: "Localytics",
        description: "i18n.collectors.localytics.description",
        version: "0",
        website: "https://dashboard.localytics.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6650.jpg",
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
        entryUrl: "https://dashboard.localytics.com/login",
    }

    constructor() {
        super(LocalyticsCollector.CONFIG);
    }
}
