
import { SketchCollector } from '../../sketchCollector';

export class TimeonePerformancePublisherCollector extends SketchCollector {

    static CONFIG = {
        id: "timeone_performance_publisher",
        name: "TimeOne - Performance - Publisher",
        description: "i18n.collectors.timeone_performance_publisher.description",
        version: "0",
        website: "https://performance.timeonegroup.com/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/84336.jpg",
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
        entryUrl: "https://performance.timeonegroup.com/en/",
    }

    constructor() {
        super(TimeonePerformancePublisherCollector.CONFIG);
    }
}
