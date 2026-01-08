
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CarsharingDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "carsharing_deutschland",
        name: "Carsharing Deutschland",
        description: "i18n.collectors.carsharing_deutschland.description",
        version: "0",
        website: "https://www.carsharing-deutschland.de/?7rxoobsknyr3h6rjxlxyikcewa=kicwisu5bd3pjmgxdxnivzccau#52.3725-9.7376-13-0/account/bills",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1953776.jpg",
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
        loginUrl: "https://www.carsharing-deutschland.de/?7rxoobsknyr3h6rjxlxyikcewa=kicwisu5bd3pjmgxdxnivzccau#52.3725-9.7376-13-0/account/bills",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CarsharingDeutschlandCollector.CONFIG);
    }
}
