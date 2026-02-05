
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MolsonCoorsCollector extends SketchCollector {

    static CONFIG = {
        id: "molson_coors",
        name: "Molson Coors",
        description: "i18n.collectors.molson_coors.description",
        version: "0",
        website: "https://www.mymolsoncoors.com/ccrz__CCSiteLogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3086118.jpg",
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
        loginUrl: "https://www.mymolsoncoors.com/ccrz__CCSiteLogin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MolsonCoorsCollector.CONFIG);
    }
}
