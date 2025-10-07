
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TooltimeCollector extends SketchCollector {

    static CONFIG = {
        id: "tooltime",
        name: "Tooltime",
        description: "i18n.collectors.tooltime.description",
        version: "0",
        website: "https://app.tooltime.de/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1676801.jpg",
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
        entryUrl: "https://app.tooltime.de/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TooltimeCollector.CONFIG);
    }
}
