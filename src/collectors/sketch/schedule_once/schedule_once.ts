
import { SketchCollector } from '../../sketchCollector';

export class ScheduleOnceCollector extends SketchCollector {

    static CONFIG = {
        id: "schedule_once",
        name: "Schedule Once",
        description: "i18n.collectors.schedule_once.description",
        version: "0",
        website: "https://app.oncehub.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8695.jpg",
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
        entryUrl: "https://app.oncehub.com",
    }

    constructor() {
        super(ScheduleOnceCollector.CONFIG);
    }
}
