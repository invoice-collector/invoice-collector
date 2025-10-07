
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BrisqqCollector extends SketchCollector {

    static CONFIG = {
        id: "brisqq",
        name: "BRISQQ",
        description: "i18n.collectors.brisqq.description",
        version: "0",
        website: "https://partners.brisqq.com/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68438.jpg",
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
        entryUrl: "https://partners.brisqq.com/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BrisqqCollector.CONFIG);
    }
}
