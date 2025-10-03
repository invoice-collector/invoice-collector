
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CincopaCollector extends SketchCollector {

    static CONFIG = {
        id: "cincopa",
        name: "cincopa",
        description: "i18n.collectors.cincopa.description",
        version: "0",
        website: "https://www.cincopa.com/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/962399.jpg",
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
        entryUrl: "https://www.cincopa.com/login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CincopaCollector.CONFIG);
    }
}
