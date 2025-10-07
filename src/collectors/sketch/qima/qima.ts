
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QimaCollector extends SketchCollector {

    static CONFIG = {
        id: "qima",
        name: "QIMA",
        description: "i18n.collectors.qima.description",
        version: "0",
        website: "http://www.qima.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118613.jpg",
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
        entryUrl: "http://www.qima.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QimaCollector.CONFIG);
    }
}
