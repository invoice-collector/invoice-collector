
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WerbenUndVerkaufenCollector extends SketchCollector {

    static CONFIG = {
        id: "werben_und_verkaufen",
        name: "Werben und Verkaufen",
        description: "i18n.collectors.werben_und_verkaufen.description",
        version: "0",
        website: "https://www.wuv.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/759104.jpg",
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
        entryUrl: "https://www.wuv.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WerbenUndVerkaufenCollector.CONFIG);
    }
}
