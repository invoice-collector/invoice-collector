
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DachserCollector extends SketchCollector {

    static CONFIG = {
        id: "dachser",
        name: "DACHSER",
        description: "i18n.collectors.dachser.description",
        version: "0",
        website: "https://elogistics.dachser.com/login/home?5",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/145456.jpg",
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
        entryUrl: "https://elogistics.dachser.com/login/home?5",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DachserCollector.CONFIG);
    }
}
