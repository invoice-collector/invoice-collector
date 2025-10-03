
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SnaptradeCollector extends SketchCollector {

    static CONFIG = {
        id: "snaptrade",
        name: "SnapTrade",
        description: "i18n.collectors.snaptrade.description",
        version: "0",
        website: "http://www.snapsoft.de/snaptrade/login?langcode=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6482.jpg",
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
        entryUrl: "http://www.snapsoft.de/snaptrade/login?langcode=de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SnaptradeCollector.CONFIG);
    }
}
