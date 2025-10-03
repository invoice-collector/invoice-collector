
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Substance3dCollector extends SketchCollector {

    static CONFIG = {
        id: "substance_3d",
        name: "Substance 3d",
        description: "i18n.collectors.substance_3d.description",
        version: "0",
        website: "https://store.substance3d.com/user/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167027.jpg",
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
        entryUrl: "https://store.substance3d.com/user/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Substance3dCollector.CONFIG);
    }
}
