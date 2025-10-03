
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ResponsterCollector extends SketchCollector {

    static CONFIG = {
        id: "responster",
        name: "Responster",
        description: "i18n.collectors.responster.description",
        version: "0",
        website: "https://account.responster.com/#page=billing&tab=&id=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/49903.jpg",
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
        entryUrl: "https://account.responster.com/#page=billing&tab=&id=",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ResponsterCollector.CONFIG);
    }
}
