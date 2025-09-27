
import { SketchCollector } from '../../sketchCollector';

export class TrackingtimeCollector extends SketchCollector {

    static CONFIG = {
        id: "trackingtime",
        name: "TrackingTime",
        description: "i18n.collectors.trackingtime.description",
        version: "0",
        website: "https://pro.trackingtime.co/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/48176.jpg",
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
        entryUrl: "https://pro.trackingtime.co/",
    }

    constructor() {
        super(TrackingtimeCollector.CONFIG);
    }
}
