
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlsoaskedCollector extends SketchCollector {

    static CONFIG = {
        id: "alsoasked",
        name: "AlsoAsked",
        description: "i18n.collectors.alsoasked.description",
        version: "0",
        website: "https://alsoasked.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1525111.jpg",
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
        entryUrl: "https://alsoasked.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlsoaskedCollector.CONFIG);
    }
}
