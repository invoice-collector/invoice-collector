
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HereDeveloperCollector extends SketchCollector {

    static CONFIG = {
        id: "here_developer",
        name: "Here Developer",
        description: "i18n.collectors.here_developer.description",
        version: "0",
        website: "https://developer.here.com/billing-management",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1500900.jpg",
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
        entryUrl: "https://developer.here.com/billing-management",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HereDeveloperCollector.CONFIG);
    }
}
