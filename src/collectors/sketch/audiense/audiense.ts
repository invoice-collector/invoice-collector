
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AudienseCollector extends SketchCollector {

    static CONFIG = {
        id: "audiense",
        name: "audiense",
        description: "i18n.collectors.audiense.description",
        version: "0",
        website: "https://dashboard.audiense.com/?main-product=true&_ga=2.201741969.165080570.1524064356-374652238.1524064356#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32799.jpg",
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
        entryUrl: "https://dashboard.audiense.com/?main-product=true&_ga=2.201741969.165080570.1524064356-374652238.1524064356#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AudienseCollector.CONFIG);
    }
}
