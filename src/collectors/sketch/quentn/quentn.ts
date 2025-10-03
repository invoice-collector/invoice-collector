
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QuentnCollector extends SketchCollector {

    static CONFIG = {
        id: "quentn",
        name: "Quentn",
        description: "i18n.collectors.quentn.description",
        version: "0",
        website: "https://my.quentn.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64998.jpg",
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
        entryUrl: "https://my.quentn.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QuentnCollector.CONFIG);
    }
}
