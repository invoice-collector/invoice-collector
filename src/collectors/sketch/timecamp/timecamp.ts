
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TimecampCollector extends SketchCollector {

    static CONFIG = {
        id: "timecamp",
        name: "TimeCamp",
        description: "i18n.collectors.timecamp.description",
        version: "0",
        website: "https://app.timecamp.com/app#/subscription/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1034205.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://app.timecamp.com/app#/subscription/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TimecampCollector.CONFIG);
    }
}
