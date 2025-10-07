
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlextrackCollector extends SketchCollector {

    static CONFIG = {
        id: "flextrack",
        name: "Flextrack",
        description: "i18n.collectors.flextrack.description",
        version: "0",
        website: "https://www.flextrack.ca/Account/LogOn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8842.jpg",
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
        entryUrl: "https://www.flextrack.ca/Account/LogOn",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlextrackCollector.CONFIG);
    }
}
