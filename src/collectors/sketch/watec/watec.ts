
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WatecCollector extends SketchCollector {

    static CONFIG = {
        id: "watec",
        name: "Watec",
        description: "i18n.collectors.watec.description",
        version: "0",
        website: "http://shop.mobilzubehoer.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22755.jpg",
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
        entryUrl: "http://shop.mobilzubehoer.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WatecCollector.CONFIG);
    }
}
