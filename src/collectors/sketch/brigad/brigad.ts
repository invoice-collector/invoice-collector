
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BrigadCollector extends SketchCollector {

    static CONFIG = {
        id: "brigad",
        name: "brigad",
        description: "i18n.collectors.brigad.description",
        version: "0",
        website: "https://work.brigad.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/927933.jpg",
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
        entryUrl: "https://work.brigad.co/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BrigadCollector.CONFIG);
    }
}
