
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QweebyCollector extends SketchCollector {

    static CONFIG = {
        id: "qweeby",
        name: "Qweeby",
        description: "i18n.collectors.qweeby.description",
        version: "0",
        website: "https://www.qweeby.net/facturesrecues-consultees",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4334539.jpg",
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
        entryUrl: "https://www.qweeby.net/facturesrecues-consultees",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QweebyCollector.CONFIG);
    }
}
