
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeathToStockphotoCollector extends SketchCollector {

    static CONFIG = {
        id: "death_to_stockphoto",
        name: "Death To Stockphoto",
        description: "i18n.collectors.death_to_stockphoto.description",
        version: "0",
        website: "https://app.deathtothestockphoto.com/account/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778916.jpg",
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
        loginUrl: "https://app.deathtothestockphoto.com/account/payment",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeathToStockphotoCollector.CONFIG);
    }
}
