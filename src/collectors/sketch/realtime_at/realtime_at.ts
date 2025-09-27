
import { SketchCollector } from '../../sketchCollector';

export class RealtimeAtCollector extends SketchCollector {

    static CONFIG = {
        id: "realtime_at",
        name: "Realtime.at",
        description: "i18n.collectors.realtime_at.description",
        version: "0",
        website: "http://www.realtime.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52744.jpg",
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
        entryUrl: "http://www.realtime.at",
    }

    constructor() {
        super(RealtimeAtCollector.CONFIG);
    }
}
