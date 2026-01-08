
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PetershopCollector extends SketchCollector {

    static CONFIG = {
        id: "petershop",
        name: "petershop",
        description: "i18n.collectors.petershop.description",
        version: "0",
        website: "https://www.petershop.de/index.php?cl=tc_b2b_item_list_document",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1920083.jpg",
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
        loginUrl: "https://www.petershop.de/index.php?cl=tc_b2b_item_list_document",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PetershopCollector.CONFIG);
    }
}
