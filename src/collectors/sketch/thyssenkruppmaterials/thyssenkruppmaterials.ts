import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ThyssenkruppMaterialsCollector extends SketchCollector {

    static CONFIG = {
        id: "thyssenkruppmaterials",
        name: "Thyssenkrupp Materials",
        description: "i18n.collectors.thyssenkruppmaterials.description",
        version: "0",
        website: "https://www.thyssenkrupp-materials.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Thyssenkrupp_AG_Logo_2015.svg",
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
        loginUrl: "https://www.thyssenkrupp-materials.fr",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ThyssenkruppMaterialsCollector.CONFIG);
    }
}
