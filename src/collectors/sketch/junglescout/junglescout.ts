
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JunglescoutCollector extends SketchCollector {

    static CONFIG = {
        id: "junglescout",
        name: "Junglescout",
        description: "i18n.collectors.junglescout.description",
        version: "0",
        website: "https://members.junglescout.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/37591.jpg",
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
        entryUrl: "https://members.junglescout.com/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JunglescoutCollector.CONFIG);
    }
}
