
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlituCollector extends SketchCollector {

    static CONFIG = {
        id: "alitu",
        name: "ALITU",
        description: "i18n.collectors.alitu.description",
        version: "0",
        website: "https://app.alitu.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/883248.jpg",
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
        entryUrl: "https://app.alitu.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlituCollector.CONFIG);
    }
}
