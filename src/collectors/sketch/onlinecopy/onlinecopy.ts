
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OnlinecopyCollector extends SketchCollector {

    static CONFIG = {
        id: "onlinecopy",
        name: "onLINEcopy",
        description: "i18n.collectors.onlinecopy.description",
        version: "0",
        website: "https://shop.online-copy.de/auftrag_rechnung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2161961.jpg",
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
        entryUrl: "https://shop.online-copy.de/auftrag_rechnung",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OnlinecopyCollector.CONFIG);
    }
}
