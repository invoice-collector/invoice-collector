
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WeglotCollector extends SketchCollector {

    static CONFIG = {
        id: "weglot",
        name: "Weglot",
        description: "i18n.collectors.weglot.description",
        version: "0",
        website: "https://dashboard.weglot.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75219.jpg",
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
        entryUrl: "https://dashboard.weglot.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WeglotCollector.CONFIG);
    }
}
