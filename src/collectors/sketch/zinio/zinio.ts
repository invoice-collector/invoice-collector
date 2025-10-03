
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ZinioCollector extends SketchCollector {

    static CONFIG = {
        id: "zinio",
        name: "Zinio",
        description: "i18n.collectors.zinio.description",
        version: "0",
        website: "https://www.zinio.com/gb/sign-in?redirect_to=%2Fmy-library",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123814.jpg",
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
        entryUrl: "https://www.zinio.com/gb/sign-in?redirect_to=%2Fmy-library",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ZinioCollector.CONFIG);
    }
}
